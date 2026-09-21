// Local review only. GitHub Pages serves the HTML and assets directly.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const port = Number(process.env.PORT || 4173);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.otf': 'font/otf' };
http.createServer((req, res) => {
  try {
    let pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    // Also preview repository-based Pages URLs, without copying the site.
    if (pathname === '/manifesta_site') { res.writeHead(302, { Location: '/manifesta_site/' }); return res.end(); }
    pathname = pathname.replace(/^\/manifesta_site\//, '/');
    if (pathname.endsWith('/')) pathname += 'index.html';
    const file = path.resolve(root, '.' + pathname);
    const relative = path.relative(root, file);
    if (relative.startsWith('..') || path.isAbsolute(relative) || relative.split(path.sep).some(part => part.startsWith('.')) || !['.html', '.css', '.js', '.png', '.otf'].includes(path.extname(file))) {
      res.writeHead(403); return res.end('Forbidden');
    }
    fs.readFile(file, (error, data) => {
      if (error) { res.writeHead(404); return res.end('Not found'); }
      res.writeHead(200, { 'Content-Type': types[path.extname(file)], 'Cache-Control': 'no-store' });
      res.end(data);
    });
  } catch { res.writeHead(400); res.end('Bad request'); }
}).listen(port, '127.0.0.1', () => console.log(`Intualia preview: http://127.0.0.1:${port}`));
