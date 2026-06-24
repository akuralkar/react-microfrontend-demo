/// <reference types="vite/client" />
// Type declarations for remote modules from module federation
declare module 'remote-app/Header' {
  import React from 'react';
  const Header: React.ComponentType<{ title?: string }>;
  export default Header;
}

declare module 'remote-app/Footer' {
  import React from 'react';
  const Footer: React.ComponentType;
  export default Footer;
}

declare module 'remote-app/AppRoutes' {
  import React from 'react';
  const AppRoutes: React.ComponentType;
  export default AppRoutes;
}

declare module 'remote-app/Login' {
  import React from 'react';
  const Login: React.ComponentType;
  export default Login;
}