// Vercel serverless: stream APK download so the button works on HTTPS (avoids mixed content, no 4.5MB limit)
const { Readable } = require('stream');

const APK_URL = process.env.APK_URL || 'https://re.rawabimarket.com/app-release.apk';

module.exports = async function handler(req, res) {
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
      res.redirect(302, APK_URL);
      return;
    }

    const contentType = response.headers.get('content-type') || 'application/vnd.android.package-archive';
    const contentLength = response.headers.get('content-length');

    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', 'attachment; filename="app-release.apk"');
    if (contentLength) res.setHeader('Content-Length', contentLength);

    const nodeStream = Readable.fromWeb(response.body);
    nodeStream.pipe(res);
    await new Promise((resolve, reject) => {
      res.on('finish', resolve);
      res.on('error', reject);
      nodeStream.on('error', reject);
    });
  } catch (_) {
    res.redirect(302, APK_URL);
  }
};
