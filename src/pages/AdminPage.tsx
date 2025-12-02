import { useState } from 'react';
import { motion } from 'framer-motion';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = {
    totalUsers: 1250,
    activeTournaments: 5,
    totalMatches: 89,
    revenue: "₹2,45,000"
  };

  const recentUsers = [
    { id: 1, name: "NewPlayer123", email: "newplayer@example.com", joinDate: "2024-02-15", status: "Active" },
    { id: 2, name: "ProGamer456", email: "progamer@example.com", joinDate: "2024-02-14", status: "Active" },
    { id: 3, name: "FireMaster", email: "firemaster@example.com", joinDate: "2024-02-13", status: "Banned" }
  ];

  return (
    <div className="min-h-screen pt-16 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-gaming font-bold text-center mb-8 neon-text">
            Admin Dashboard
          </h1>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="neon-card p-2 flex gap-2">
              {[
                { id: 'dashboard', label: 'Dashboard' },
                { id: 'users', label: 'Users' },
                { id: 'tournaments', label: 'Tournaments' },
                { id: 'settings', label: 'Settings' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-neon-blue text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Stats Grid */}
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: "Total Users", value: stats.totalUsers, color: "text-neon-blue", icon: "👥" },
                  { label: "Active Tournaments", value: stats.activeTournaments, color: "text-neon-green", icon: "🏆" },
                  { label: "Total Matches", value: stats.totalMatches, color: "text-neon-purple", icon: "⚔️" },
                  { label: "Revenue", value: stats.revenue, color: "text-neon-cyan", icon: "💰" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="neon-card text-center"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <h3 className="text-gray-400 text-sm mb-2">{stat.label}</h3>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="neon-card">
                <h2 className="text-xl font-gaming font-bold text-neon-blue mb-6">Recent Users</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-neon-blue">Name</th>
                        <th className="text-left py-2 text-neon-blue">Email</th>
                        <th className="text-left py-2 text-neon-blue">Join Date</th>
                        <th className="text-left py-2 text-neon-blue">Status</th>
                        <th className="text-left py-2 text-neon-blue">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user) => (
                        <tr key={user.id} className="border-b border-gray-700/50">
                          <td className="py-3 text-white">{user.name}</td>
                          <td className="py-3 text-gray-300">{user.email}</td>
                          <td className="py-3 text-gray-300">{user.joinDate}</td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              user.status === 'Active' 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-red-500/20 text-red-400'
                            }`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="py-3">
                            <button className="text-neon-blue hover:text-neon-purple transition-colors">
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other tabs content */}
          {activeTab !== 'dashboard' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="neon-card text-center"
            >
              <div className="text-6xl mb-4">🚧</div>
              <h2 className="text-2xl font-gaming font-bold text-gray-400 mb-4">Coming Soon</h2>
              <p className="text-gray-500">This section is under development.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPage;
