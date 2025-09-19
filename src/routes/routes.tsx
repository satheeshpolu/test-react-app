import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const HomePage = lazy(() => import('../pages/home/Home'));
const AboutPage = lazy(() => import('../pages/about/About'));
const ContactPage = lazy(() => import('../pages/contact/Contact'));
const NotFoundPage = lazy(() => import('../pages/not-found/Not-Found'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // header + footer live here
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default router;
