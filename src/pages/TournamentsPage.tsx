import { useState } from 'react';
import { motion } from 'framer-motion';

const TournamentsPage = () => {
  const [filter, setFilter] = useState('all');

  const tournaments = [
    {
      id: 1,
      name: "SkyOne Championship",
      date: "2026-01-01",
      time: "18:00",
      entryFee: "₹0",
      prizePool: "₹1000",
      map: "Bermuda",
      type: "Squad",
      slotsLeft: 64,
      totalSlots: 64,
      status: "All",
      organizer: "SkyOne eSports",
      formUrl: "https://discord.com/channels/699934151742324736/1445031257670025277"
    }
  ];

  const handleJoinTournament = (formUrl: string) => {
    window.open(formUrl, '_blank');
  };

  const getStatusColor = (status: string) => {
    return 'bg-neon-blue/20 text-neon-blue border-neon-blue/30';
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Squad': return 'bg-neon-purple/20 text-neon-purple border-neon-purple/30';
      case 'Duo': return 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30';
      case 'Solo': return 'bg-neon-green/20 text-neon-green border-neon-green/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen pt-16 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-gaming font-bold text-center mb-8 neon-text">
            Tournaments
          </h1>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-8">
            <div className="neon-card p-2 flex gap-2">
              {[
                { id: 'all', label: 'All' },
                { id: 'upcoming', label: 'Upcoming' },
                { id: 'live', label: 'Live' },
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

          {/* Tournament Content */}
          {filter === 'all' ? (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {tournaments.map((tournament, index) => (
                <motion.div
                  key={tournament.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="neon-card group"
                >
                  {/* Tournament Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">
                        {tournament.name}
                      </h3>
                      <p className="text-neon-purple text-sm">{tournament.organizer}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(tournament.status)}`}>
                      {tournament.status}
                    </span>
                  </div>

                  {/* Tournament Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Date & Time:</span>
                      <span className="text-white">{tournament.date} at {tournament.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Entry Fee:</span>
                      <span className="text-neon-cyan font-semibold">{tournament.entryFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Prize Pool:</span>
                      <span className="text-neon-green font-bold">{tournament.prizePool}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Map:</span>
                      <span className="text-white">{tournament.map}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Type:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getTypeColor(tournament.type)}`}>
                        {tournament.type}
                      </span>
                    </div>
                  </div>

                  {/* Slots Progress */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Slots Available</span>
                      <span className="text-white">{tournament.slotsLeft}/{tournament.totalSlots}</span>
                    </div>
                    <div className="w-full bg-dark-light rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-neon-blue to-neon-purple h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((tournament.totalSlots - tournament.slotsLeft) / tournament.totalSlots) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => handleJoinTournament(tournament.formUrl)}
                    className="w-full neon-button"
                  >
                    Register Now
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🚧</div>
              <h2 className="text-3xl font-gaming font-bold text-gray-400 mb-4">Coming Soon</h2>
              <p className="text-gray-500 text-lg">
                {filter === 'upcoming' && "Upcoming tournaments will be displayed here."}
                {filter === 'live' && "Live tournaments will be displayed here."}
                {filter === 'completed' && "Completed tournaments will be displayed here."}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TournamentsPage;
