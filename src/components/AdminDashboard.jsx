import { motion } from 'framer-motion';
import { BarChart3, CreditCard, Settings, User } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, change }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl p-5 bg-white/10 border border-white/10 backdrop-blur-xl text-white"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-white/70 text-sm">{label}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center">
        <Icon size={20} />
      </div>
    </div>
    <p className="mt-3 text-emerald-300 text-sm">{change} this week</p>
  </motion.div>
);

const MiniBar = ({ values }) => {
  const max = Math.max(...values);
  return (
    <div className="flex items-end gap-2 h-24">
      {values.map((v, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${(v / max) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className="w-4 rounded-md bg-gradient-to-t from-indigo-500 to-sky-400"
        />)
      )}
    </div>
  );
};

export default function AdminDashboard({ user }) {
  return (
    <section id="dashboard" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-sky-500/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <motion.h2
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Welcome{user?.email ? `, ${user.email}` : ''}
          </motion.h2>
          <p className="text-white/70">Here's a snapshot of your activity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={CreditCard} label="Active Cards" value="4" change="+1" />
          <StatCard icon={BarChart3} label="Payments" value="$12,480" change="+8%" />
          <StatCard icon={User} label="Customers" value="1,284" change="+3%" />
          <StatCard icon={Settings} label="Integrations" value="7" change="+1" />
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 bg-white/10 border border-white/10 backdrop-blur-xl text-white"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">Revenue (last 12 days)</h3>
                <p className="text-white/60 text-sm">Quick glance at performance</p>
              </div>
            </div>
            <div className="mt-6">
              <MiniBar values={[4, 7, 6, 9, 8, 12, 10, 14, 12, 15, 13, 18]} />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl p-6 bg-white/10 border border-white/10 backdrop-blur-xl text-white"
          >
            <h3 className="font-semibold">Recent Transactions</h3>
            <div className="mt-4 divide-y divide-white/10">
              {[
                { id: 'TX-8842', amount: '$240.00', card: 'Visa •• 9241' },
                { id: 'TX-8843', amount: '$1,240.95', card: 'Mastercard •• 1173' },
                { id: 'TX-8844', amount: '$87.50', card: 'Amex •• 0092' },
                { id: 'TX-8845', amount: '$640.00', card: 'Visa •• 9241' },
              ].map((tx) => (
                <div key={tx.id} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{tx.id}</p>
                    <p className="text-xs text-white/60">{tx.card}</p>
                  </div>
                  <p className="font-semibold">{tx.amount}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-6 bg-white/10 border border-white/10 backdrop-blur-xl text-white"
          >
            <h3 className="font-semibold">Team</h3>
            <div className="mt-4 space-y-3">
              {[
                { name: 'Avery Chen', role: 'Finance Lead' },
                { name: 'Maya Patel', role: 'Risk Analyst' },
                { name: 'Lucas Silva', role: 'Ops Manager' },
              ].map((m) => (
                <div key={m.name} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{m.name}</p>
                    <p className="text-xs text-white/60">{m.role}</p>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm">
                    View
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
