import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthKitProvider } from '@farcaster/auth-kit';

// Konfigurasi untuk AuthKit
const authConfig = {
  rpcUrl: 'https://mainnet.optimism.io', // RPC URL untuk Optimism
  domain: 'localhost', // Ganti dengan domain Anda saat deploy (misalnya, my-mini-app.vercel.app)
  siweUri: 'http://localhost:5173/login', // Ganti dengan URL login Anda
  relay: 'https://relay.farcaster.xyz', // URL relay Farcaster
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthKitProvider config={authConfig}>
      <App />
    </AuthKitProvider>
  </StrictMode>,
);