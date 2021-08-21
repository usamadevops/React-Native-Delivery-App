import React from 'react';
import { AuthUserProvider } from './AuthUserProvider';
import Routes from './Routes';

/**
 * Wrap all providers here
 */

 function Providers() {
  return (
    <AuthUserProvider>
      <Routes />
    </AuthUserProvider>
  );
}
export default Providers