
export const Sitemap = () => {
  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
<url>
<loc>http://www.webmindsstudio.com/</loc>
<lastmod>2023-10-09T11:07:00-05:00</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
</urlset>
  `;
  return (
    <div>
      <pre>{sitemap}</pre>
    </div>
  )
}
