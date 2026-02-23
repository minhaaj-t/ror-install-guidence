// Vercel serverless: proxy APK download so the button works on HTTPS (avoids mixed content)
const APK_URL = process.env.APK_URL || 'https://re.rawabimarket.com/app-release.apk';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end();
  }

  try {
    const response = await fetch(APK_URL, {
      redirect: 'follow',
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ROR-Vansale-Download/1.0)' },
    });

    if (!response.ok) {
      return res.redirect(302, APK_URL);
    }

    const contentType = response.headers.get('content-type') || 'application/vnd.android.package-archive';
    const contentLength = response.headers.get('content-length');
    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', 'attachment; filename="app-release.apk"');
    if (contentLength) res.setHeader('Content-Length', contentLength);

    const buffer = await response.arrayBuffer();
    return res.end(Buffer.from(buffer));
  } catch (_) {
    res.redirect(302, APK_URL);
  }
}
