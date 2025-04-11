import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthKitProvider } from '@farcaster/auth-kit';

// Konfigurasi untuk AuthKit
const authConfig = {
  rpcUrl: 'https://mainnet.optimism.io', // RPC URL untuk Optimism
  domain: 'https://miniapps-bice.vercel.app', // Ganti dengan domain Anda saat deploy (misalnya, my-mini-app.vercel.app)
  siweUri: 'https://miniapps-bice.vercel.app/login', // Ganti dengan URL login Anda
  relay: 'https://relay.farcaster.xyz', // URL relay Farcaster
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthKitProvider config={authConfig}>
      <App />
    </AuthKitProvider>
  </StrictMode>,
);