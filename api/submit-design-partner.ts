const WEB_APP_URL = process.env.GOOGLE_SHEETS_WEB_APP_URL;

export default async function handler(req: { method?: string; body?: unknown }, res: { setHeader: (k: string, v: string) => void; status: (n: number) => { json: (o: object) => void } }) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!WEB_APP_URL) {
    return res.status(500).json({
      error: 'Form is not configured. Set GOOGLE_SHEETS_WEB_APP_URL in Vercel environment variables.',
    });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!body || typeof body !== 'object') {
      return res.status(400).json({ error: 'Invalid request body.' });
    }

    // Send as form-encoded so Apps Script populates e.parameter (e.postData can be missing for JSON)
    const sheetRes = await fetch(WEB_APP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ data: JSON.stringify(body) }).toString(),
      signal: AbortSignal.timeout(15000),
    });

    const text = await sheetRes.text();
    let data: { ok?: boolean; error?: string };
    try {
      data = JSON.parse(text) as { ok?: boolean; error?: string };
    } catch {
      data = {};
    }

    // Apps Script returns 200 even when it returns { error: "..." }, so check body too
    if (!sheetRes.ok || data.error) {
      const bodyPreview = text.slice(0, 300).replace(/\s+/g, ' ').trim();
      const detail = data.error
        ? `Script error: ${data.error}`
        : `Google returned ${sheetRes.status}. Body: ${bodyPreview || '(empty)'}`;
      console.error('Google Apps Script error:', sheetRes.status, text);
      return res.status(502).json({
        error: 'Failed to save submission. Please try again or email us directly.',
        detail,
      });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    const err = e as Error & { code?: string; name?: string };
    const isTimeout = err.name === 'AbortError' || err.code === 'ETIMEDOUT';
    console.error('submit-design-partner error:', e);
    return res.status(500).json({
      error: 'Something went wrong. Please try again or email us directly.',
      detail: isTimeout
        ? 'Request to Google timed out. Check that GOOGLE_SHEETS_WEB_APP_URL is correct and the script is deployed.'
        : err.message?.slice(0, 200),
    });
  }
}
