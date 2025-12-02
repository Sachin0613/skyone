import { useState } from 'react';
import { motion } from 'framer-motion';

const MatchesPage = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div className="min-h-screen pt-16 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-gaming font-bold text-center mb-8 neon-text">
            Matches
          </h1>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-8">
            <div className="neon-card p-2 flex gap-2">
              {[
                { id: 'all', label: 'All Matches' },
                { id: 'live', label: 'Live' },
                { id: 'upcoming', label: 'Upcoming' },
                { id: 'completed', label: 'Completed' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    filter === tab.id
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
            <div className="text-6xl mb-6">⚔️</div>
            <h2 className="text-3xl font-gaming font-bold text-gray-400 mb-4">Matches Coming Soon</h2>
            <p className="text-gray-500 text-lg mb-8">
              {filter === 'all' && "All matches will be displayed here once tournaments begin."}
              {filter === 'live' && "Live matches will be shown here during tournaments."}
              {filter === 'upcoming' && "Upcoming matches will be displayed here."}
              {filter === 'completed' && "Completed match results will be shown here."}
            </p>
            
            <div className="neon-card max-w-2xl mx-auto">
              <h3 className="text-xl font-gaming font-bold text-neon-blue mb-4">What to Expect</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-neon-green">🔴</span>
                    <span className="text-gray-300">Live match streaming</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neon-blue">📊</span>
                    <span className="text-gray-300">Real-time scoreboards</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neon-purple">🏆</span>
                    <span className="text-gray-300">Tournament brackets</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-neon-cyan">📱</span>
                    <span className="text-gray-300">Room details & passwords</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neon-green">📈</span>
                    <span className="text-gray-300">Player statistics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neon-pink">🎮</span>
                    <span className="text-gray-300">Match replays</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MatchesPage;
