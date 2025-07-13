import express from "express";
import fs from "fs";
// import path from 'path';
import { createServer as createViteServer } from "vite";

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: "ssr" },
  });

  app.use(vite.middlewares);

//   app.use("/api", (req, res) => {
//     proxy.web(req, res, { target: "http://localhost:5000" }); // or your API server
//   });

  app.use("*", async (req, res) => {
    try {
        //   const url = req.originalUrl;
        console.log("Requested URL:", req?.originalUrl);
    //   const url = req.originalUrl.split('?')[0]; // safest
    //   const url = req.url || '/';

    const rawUrl = req.originalUrl?.split('?')[0] || '/';
    const url = rawUrl.startsWith('/') ? rawUrl : '/';


      const template = fs.readFileSync("index.html", "utf-8");
      const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");
      const { appHtml, helmet } = await render(url);

      const html = template
        .replace("<!--helmet-title-->", helmet.title.toString())
        .replace("<!--helmet-meta-->", helmet.meta.toString())
        .replace("<!--app-html-->", appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      res.status(500).end(e.message);
    }
  });

  

  app.listen(3000, () => {
    console.log("App running at http://localhost:3000");
  });
}

createServer();
