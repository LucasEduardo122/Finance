import React from 'react';
import { AuthProvider } from './src/hooks/auth';
import AuthRoutes from './src/Routes/index';

export default function App() {

  return (
    <AuthProvider>
      <AuthRoutes /> 
    </AuthProvider>
  );
}
