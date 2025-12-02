import { useState } from 'react';
import { motion } from 'framer-motion';

const LeaderboardPage = () => {
  const [activeTab, setActiveTab] = useState('overall');

  return (
    <div className="min-h-screen pt-16 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-gaming font-bold text-center mb-8 neon-text">
            Leaderboard
          </h1>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="neon-card p-2 flex gap-2">
              {[
                { id: 'overall', label: 'Overall' },
                { id: 'weekly', label: 'Weekly' },
                { id: 'teams', label: 'Teams' }
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

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-6">🏆</div>
            <h2 className="text-3xl font-gaming font-bold text-gray-400 mb-4">
              {activeTab === 'teams' ? 'Team Leaderboard Will Be Shown Here' : 'Player Leaderboard Will Be Shown Here'}
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              {activeTab === 'overall' && "Overall player rankings will be displayed here based on tournament performance."}
              {activeTab === 'weekly' && "Weekly player rankings will be updated here every week."}
              {activeTab === 'teams' && "Team rankings will be shown here based on tournament results and team performance."}
            </p>
            
            <div className="neon-card max-w-3xl mx-auto">
              <h3 className="text-xl font-gaming font-bold text-neon-blue mb-6">Ranking System</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-dark-light/50 rounded-lg border border-neon-blue/20">
                  <div className="text-3xl mb-2">📊</div>
                  <h4 className="font-semibold text-neon-green mb-2">Performance Based</h4>
                  <p className="text-gray-400 text-sm">Rankings based on kills, wins, and tournament placements</p>
                </div>
                <div className="text-center p-4 bg-dark-light/50 rounded-lg border border-neon-purple/20">
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="font-semibold text-neon-purple mb-2">Skill Rating</h4>
                  <p className="text-gray-400 text-sm">ELO-based system that tracks your competitive progress</p>
                </div>
                <div className="text-center p-4 bg-dark-light/50 rounded-lg border border-neon-cyan/20">
                  <div className="text-3xl mb-2">🏅</div>
                  <h4 className="font-semibold text-neon-cyan mb-2">Achievements</h4>
                  <p className="text-gray-400 text-sm">Earn badges and titles for exceptional performance</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-lg border border-neon-blue/20">
                <h4 className="font-semibold text-white mb-2">🚀 Coming Features</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Real-time rank updates during tournaments</li>
                  <li>• Seasonal leaderboard resets</li>
                  <li>• Regional and global rankings</li>
                  <li>• Team vs team comparison tools</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
