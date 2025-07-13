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

// import React from 'react';
// // import App from './App.jsx';
// import { renderToString } from 'react-dom/server';
// import App from './App';

// export async function render() {
//   const html = renderToString(<App />);
//   return { html };
// }


import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';


// Import routes
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import MyOrders from './pages/MyOrders/MyOrders';
import Verify from './pages/Verify/Verify';


const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/order', component: PlaceOrder },
  { path: '/myorders', component: MyOrders },
  { path: '/verify', component: Verify },
];

export async function render(url) {
  // Match route
  const route = routes.find(r => r.path === url) || routes[0];
  const Component = route.component;

  const app = (
    <StaticRouter location={url}>
      <Component />
    </StaticRouter>
  );

  const html = renderToString(app);

  // Extract meta
  const meta = Component.meta || {};
  const head = `
    <title>${meta.title || 'Default Title'}</title>
    <meta name="description" content="${meta.description || ''}" />
  `;

  return { html, head };
}

