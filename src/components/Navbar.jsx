import { Home, Settings, Shield, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar({ onLoginClick, onLogoutClick, isAuthenticated }) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 dark:bg-zinc-900/30 border border-white/20 dark:border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 shadow-inner shadow-white/10 flex items-center justify-center">
                <Shield className="text-white" size={20} />
              </div>
              <div className="leading-tight">
                <p className="text-white font-semibold tracking-tight">Finora</p>
                <p className="text-xs text-white/70">Modern Fintech Dashboard</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-white/80">
              <a href="#home" className="hover:text-white transition-colors flex items-center gap-2"><Home size={18}/> Home</a>
              <a href="#dashboard" className="hover:text-white transition-colors flex items-center gap-2"><Settings size={18}/> Dashboard</a>
            </nav>
            <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80">
                    <User size={16} />
                    <span className="text-sm">Admin</span>
                  </div>
                  <button
                    onClick={onLogoutClick}
                    className="px-4 py-2 rounded-xl bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={onLoginClick}
                  className="px-4 py-2 rounded-xl bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-colors"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
