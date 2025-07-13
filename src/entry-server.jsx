// import React from 'react';
// import { StaticRouter } from 'react-router-dom/server';
// import { renderToString } from 'react-dom/server';
// import { HelmetProvider } from 'react-helmet-async';
// import App from './App';

// export function render(url) {
//   const helmetContext = {};
//   const appHtml = renderToString(
//     <HelmetProvider context={helmetContext}>
//       <StaticRouter location={url}>
//         <App />
//       </StaticRouter>
//     </HelmetProvider>
//   );

//   return {
//     appHtml,
//     helmet: helmetContext.helmet,
//   };
// }

import React from 'react';
// import App from './App.jsx';
import { renderToString } from 'react-dom/server';
import App from './App';

export async function render() {
  const html = renderToString(<App />);
  return { html };
}
