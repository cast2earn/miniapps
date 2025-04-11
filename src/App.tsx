import { useEffect } from 'react';
import { SignInButton, useProfile } from '@farcaster/auth-kit';
import { sdk } from '@farcaster/frame-sdk';

function App() {
  const { isAuthenticated, profile } = useProfile();

  useEffect(() => {
    const initializeSdk = async () => {
      try {
        await sdk.actions.ready();
        console.log('Mini app siap dimuat di Warpcast');
      } catch (error) {
        console.error('Gagal memanggil sdk.actions.ready:', error);
      }
    };
    initializeSdk();
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Selamat Datang di Mini App</h1>
      {!isAuthenticated ? (
        <SignInButton
          onSuccess={({ fid, username }) => {
            console.log(`Berhasil login! FID: ${fid}, Username: ${username}`);
          }}
          onError={(error) => {
            console.error('Error saat sign-in:', error);
          }}
        />
      ) : (
        <div>
          <h2>Profil Pengguna</h2>
          <p><strong>Username:</strong> {profile.username || 'Tidak tersedia'}</p>
          <p><strong>FID:</strong> {profile.fid || 'Tidak tersedia'}</p>
        </div>
      )}
    </div>
  );
}

export default App;
