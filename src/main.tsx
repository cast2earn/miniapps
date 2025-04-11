import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx'; // Pastikan huruf besar 'A'
import './index.css';
import { AuthKitProvider } from '@farcaster/auth-kit';

const authConfig = {
  rpcUrl: 'https://mainnet.optimism.io',
  domain: 'miniapps.vercel.app', // Ganti dengan domain Vercel Anda, atau 'localhost' untuk lokal
  siweUri: 'https://miniapps.vercel.app/login', // Ganti dengan URL login Anda
  relay: 'https://relay.farcaster.xyz',
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthKitProvider config={authConfig}>
      <App />
    </AuthKitProvider>
  </StrictMode>,
);