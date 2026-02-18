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

    const sheetRes = await fetch(WEB_APP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
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
      console.error('Google Apps Script error:', sheetRes.status, text);
      return res.status(502).json({
        error: 'Failed to save submission. Please try again or email us directly.',
      });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('submit-design-partner error:', e);
    return res.status(500).json({
      error: 'Something went wrong. Please try again or email us directly.',
    });
  }
}
