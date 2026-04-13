const OM_API_URL = process.env.OM_API_URL;
const OM_API_KEY = process.env.OM_API_KEY;

export default async function handler(
  req: { method?: string; body?: unknown },
  res: {
    setHeader: (k: string, v: string) => void;
    status: (n: number) => { json: (o: object) => void };
  },
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!OM_API_URL || !OM_API_KEY) {
    return res.status(500).json({
      error:
        'Form is not configured. Set OM_API_URL and OM_API_KEY in Vercel environment variables.',
    });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!body || typeof body !== 'object') {
      return res.status(400).json({ error: 'Invalid request body.' });
    }

    const { name, email, company, source } = body as Record<string, string>;

    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    const apiRes = await fetch(`${OM_API_URL.replace(/\/+$/, '')}/api/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OM_API_KEY}`,
      },
      body: JSON.stringify({ name, email, company, source }),
      signal: AbortSignal.timeout(15000),
    });

    if (!apiRes.ok) {
      const text = await apiRes.text();
      console.error('OM API error:', apiRes.status, text);
      return res.status(502).json({
        error: 'Failed to save submission. Please try again or email us directly.',
      });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    const err = e as Error & { name?: string };
    const isTimeout = err.name === 'AbortError';
    console.error('submit-design-partner error:', e);
    return res.status(500).json({
      error: 'Something went wrong. Please try again or email us directly.',
      detail: isTimeout
        ? 'Request to OM API timed out.'
        : err.message?.slice(0, 200),
    });
  }
}
