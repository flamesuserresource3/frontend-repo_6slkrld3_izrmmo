import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ onGetStarted }) {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      <div className="pointer-events-none absolute -top-24 inset-x-0 h-96 bg-gradient-to-b from-indigo-500/30 via-sky-500/20 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <div className="text-left">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              The glassmorphic fintech dashboard
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
              className="mt-4 text-lg sm:text-xl text-white/80 max-w-xl"
            >
              Manage cards, monitor payments, and visualize key metrics in a delightful real‑time experience.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.0, ease: 'easeOut', delay: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <button
                onClick={onGetStarted}
                className="px-6 py-3 rounded-xl bg-white text-zinc-900 font-semibold shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition transform"
              >
                Get started
              </button>
              <a href="#dashboard" className="text-white/80 hover:text-white">Explore dashboard</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
