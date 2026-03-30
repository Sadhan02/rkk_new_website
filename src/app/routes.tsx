import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { RootLayout } from './layouts/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'services', Component: Services },
      { path: 'contact', Component: Contact },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});
