
import React, { Suspense } from 'react';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import PortalUiHostAppRoutes from './routes';

// Lazy load remote components from the federated core-ui-remote-app
// These components are exposed via module federation and loaded dynamically at runtime
const Header = React.lazy(() => import('remote-app/Header'));
const Footer = React.lazy(() => import('remote-app/Footer'));

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Header title='Portal UI' />
      </Suspense>
      <Suspense fallback={null}>
        <PortalUiHostAppRoutes />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
