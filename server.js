// import express from 'express';
// import { createServer as createViteServer } from 'vite';
// import { readFile } from 'fs/promises';
// import path from 'path';

// const app = express();
// const root = process.cwd();

// async function start() {
//   const vite = await createViteServer({
//     root,
//     server: { middlewareMode: 'ssr' },
//   });

//   app.use(vite.middlewares);

//   // app.use('*', async (req, res) => {
//   //   try {
//   //     const url = req.originalUrl;
//   //     let template = await readFile(path.resolve('index.html'), 'utf-8');
//   //     template = await vite.transformIndexHtml(url, template);

//   //     const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
//   //     const { html } = await render();

//   //     const finalHtml = template.replace('<!--ssr-outlet-->', html);
//   //     res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
//   //   } catch (e) {
//   //     vite.ssrFixStacktrace(e);
//   //     console.error(e);
//   //     res.status(500).end(e.message);
//   //   }
//   // });

//     app.use(async (req, res, next) => {
//     const url = req.originalUrl;

//     // Block malformed full URLs
//     if (!url.startsWith("/")) {
//       return res.status(400).send("Bad request");
//     }

//     // If it's a GET request and expects HTML, SSR it
//     if (req.method === "GET" && req.headers.accept?.includes("text/html")) {
//       try {
//         let template = await readFile(path.resolve("index.html"), "utf-8");
//         template = await vite.transformIndexHtml(url, template);
//         const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");
//         const { html } = await render();
//         const finalHtml = template.replace(`<!--ssr-outlet-->`, html);
//         return res
//           .status(200)
//           .set({ "Content-Type": "text/html" })
//           .end(finalHtml);
//       } catch (e) {
//         vite.ssrFixStacktrace(e);
//         console.error("SSR Error:", e);
//         return res.status(500).end(e.message);
//       }
//     }

//     // Let other assets (CSS, JS, API) pass through
//     next();
//   });
  
//   app.listen(3000, () => {
//     console.log(' Dev server running at http://localhost:3000');
//   });
// }

// start();



import express from 'express';
import { createServer as createViteServer } from 'vite';
import { readFile } from 'fs/promises';
import path from 'path';

const app = express();
const root = process.cwd();

async function start() {
  const vite = await createViteServer({
    root,
    server: { middlewareMode: 'ssr' },
  });

  app.use(vite.middlewares);

  app.use(async (req, res, next) => {
    const url = req.originalUrl;

    // Block malformed full URLs
    if (!url.startsWith('/')) {
      return res.status(400).send('Bad request');
    }

    // Only SSR for HTML page requests
    if (req.method === 'GET' && req.headers.accept?.includes('text/html')) {
      try {
        let template = await readFile(path.resolve('index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);

        const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

        // 👇 Pass URL to render for meta detection
        const { html, head } = await render(url);

        // 👇 Replace placeholders in template
        const finalHtml = template
          .replace('<!--head-tags-->', head || '')
          .replace('<!--ssr-outlet-->', html);

        return res
          .status(200)
          .set({ 'Content-Type': 'text/html' })
          .end(finalHtml);
      } catch (e) {
        vite.ssrFixStacktrace(e);
        console.error('SSR Error:', e);
        return res.status(500).end(e.message);
      }
    }

    // Let other requests fall through
    next();
  });

  app.listen(3000, () => {
    console.log(' Dev server running at http://localhost:3000');
  });
}

start();
