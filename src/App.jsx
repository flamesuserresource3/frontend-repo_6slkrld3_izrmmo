import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoginForm from './components/LoginForm';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const handleLoginSuccess = (u) => setUser(u);
  const handleLogout = () => setUser(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar onLoginClick={handleLoginOpen} onLogoutClick={handleLogout} isAuthenticated={!!user} />
      <main>
        <Hero onGetStarted={handleLoginOpen} />
        <AdminDashboard user={user} />
      </main>
      <LoginForm open={loginOpen} onClose={handleLoginClose} onSuccess={handleLoginSuccess} />
      <footer className="border-t border-white/10 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white/60">
          © {new Date().getFullYear()} Finora — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
