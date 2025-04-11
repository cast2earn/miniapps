import { useEffect } from 'react';
import { SignInButton, useProfile } from '@farcaster/auth-kit';
import { sdk } from '@farcaster/frame-sdk';

function App() {
  const { isAuthenticated, profile } = useProfile();

  // Panggil sdk.actions.ready() saat komponen dimuat
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
  }, []); // [] memastikan ini hanya dijalankan sekali saat komponen dimuat

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Selamat Datang di Mini App</h1>
      {!isAuthenticated ? (
        <SignInButton
          onSuccess={({ fid, username }) => {
            console.log(`Berhasil login! FID: ${fid}, Username: ${username}`);
          }}
        />
      ) : (
        <div>
          <h2>Profil Pengguna</h2>
          <p><strong>Username:</strong> {profile.username || 'Tidak tersedia'}</p>
          <p><strong>FID:</strong> {profile.fid || 'Tidak tersedia'}</p>
          <p><strong>Nama Tampilan:</strong> {profile.displayName || 'Tidak tersedia'}</p>
          <p><strong>Bio:</strong> {profile.bio || 'Tidak tersedia'}</p>
          {profile.pfpUrl && (
            <img
              src={profile.pfpUrl}
              alt="Foto Profil"
              style={{ width: '100px', borderRadius: '50%' }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
