import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const MatchDetailsPage = () => {
  const { id } = useParams();

  // Mock match data
  const match = {
    id: 1,
    tournament: "SkyOne Championship",
    matchNumber: "Semi-Final 1",
    date: "2024-02-15",
    time: "19:45",
    map: "Bermuda",
    status: "Completed",
    teams: [
      {
        id: 1,
        name: "SkyLords",
        logo: "/api/placeholder/60/60",
        placement: 1,
        kills: 15,
        points: 25,
        players: [
          { name: "SkyWarrior", kills: 5, damage: 1250, survival: "15:30" },
          { name: "FireStorm", kills: 4, damage: 1100, survival: "15:30" },
          { name: "NeonBlade", kills: 3, damage: 980, survival: "15:30" },
          { name: "CyberHawk", kills: 3, damage: 890, survival: "15:30" }
        ]
      },
      {
        id: 2,
        name: "Neon Wolves",
        logo: "/api/placeholder/60/60",
        placement: 2,
        kills: 12,
        points: 20,
        players: [
          { name: "WolfLeader", kills: 4, damage: 1180, survival: "14:20" },
          { name: "ShadowHunt", kills: 3, damage: 950, survival: "14:20" },
          { name: "BlitzKrieg", kills: 3, damage: 870, survival: "12:45" },
          { name: "StormRider", kills: 2, damage: 720, survival: "14:20" }
        ]
      },
      {
        id: 3,
        name: "Cyber Phoenix",
        logo: "/api/placeholder/60/60",
        placement: 3,
        kills: 10,
        points: 16,
        players: [
          { name: "PhoenixRise", kills: 3, damage: 920, survival: "12:15" },
          { name: "QuantumX", kills: 3, damage: 880, survival: "12:15" },
          { name: "VortexStrike", kills: 2, damage: 750, survival: "10:30" },
          { name: "GhostSnipe", kills: 2, damage: 690, survival: "12:15" }
        ]
      }
    ]
  };

  const getPlacementColor = (placement: number) => {
    switch (placement) {
      case 1: return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 2: return 'text-gray-300 bg-gray-300/20 border-gray-300/30';
      case 3: return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  return (
    <div className="min-h-screen pt-16 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Match Header */}
          <div className="neon-card mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
              <div>
                <h1 className="text-3xl font-gaming font-bold text-white mb-2">
                  {match.matchNumber}
                </h1>
                <p className="text-neon-blue text-lg mb-4">{match.tournament}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Date:</span>
                      <span className="text-white">{match.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Time:</span>
                      <span className="text-white">{match.time}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Map:</span>
                      <span className="text-white">{match.map}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className="text-neon-green">{match.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Match Results */}
          <div className="space-y-6">
            {match.teams.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="neon-card"
              >
                {/* Team Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={team.logo}
                      alt={team.name}
                      className="w-12 h-12 rounded-lg border-2 border-neon-blue/30"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">{team.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getPlacementColor(team.placement)}`}>
                          #{team.placement}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-neon-green">{team.points} pts</div>
                    <div className="text-gray-400">{team.kills} kills</div>
                  </div>
                </div>

                {/* Player Stats */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-neon-blue">Player</th>
                        <th className="text-center py-2 text-neon-blue">Kills</th>
                        <th className="text-center py-2 text-neon-blue">Damage</th>
                        <th className="text-center py-2 text-neon-blue">Survival</th>
                      </tr>
                    </thead>
                    <tbody>
                      {team.players.map((player, playerIndex) => (
                        <tr key={playerIndex} className="border-b border-gray-700/50">
                          <td className="py-3 text-white font-semibold">{player.name}</td>
                          <td className="py-3 text-center text-neon-green">{player.kills}</td>
                          <td className="py-3 text-center text-gray-300">{player.damage}</td>
                          <td className="py-3 text-center text-neon-cyan">{player.survival}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MatchDetailsPage;
