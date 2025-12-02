import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const TournamentDetailsPage = () => {
  const { id } = useParams();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Mock tournament data
  const tournament = {
    id: 1,
    name: "SkyOne Championship",
    description: "The ultimate Free Fire tournament featuring the best players from across the region. Battle it out on Bermuda for glory and massive prizes!",
    startDate: "2024-02-15",
    startTime: "18:00",
    entryFee: "₹0",
    prizePool: "₹100",
    map: "Bermuda",
    type: "Squad",
    mode: "Battle Royale",
    deviceRules: "Mobile ",
    slotsLeft: 8,
    totalSlots: 64,
    status: "Upcoming",
    organizer: "SkyOne eSports",
    rules: [
      "Teams must consist of 4 players",
      "No cheating or hacking allowed",
      "All matches will be streamed live",
      "Players must join the Discord server",
      "Room ID and password will be shared 30 minutes before match"
    ],
    prizeBreakdown: [
      { position: "1st Place", prize: "₹500", percentage: "50%" },
      { position: "2nd Place", prize: "₹250", percentage: "25%" },
      { position: "3rd Place", prize: "₹150", percentage: "15%" },
      { position: "4th-8th Place", prize: "₹0", percentage: "2% each" }
    ],
    schedule: [
      { time: "17:30", event: "Check-in Opens", status: "upcoming" },
      { time: "18:00", event: "Tournament Begins", status: "upcoming" },
      { time: "18:15", event: "Match 1 - Groups A & B", status: "upcoming" },
      { time: "19:00", event: "Match 2 - Groups C & D", status: "upcoming" },
      { time: "19:45", event: "Semi-Finals", status: "upcoming" },
      { time: "20:30", event: "Grand Finals", status: "upcoming" },
      { time: "21:15", event: "Prize Distribution", status: "upcoming" }
    ]
  };

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date(`${tournament.startDate}T${tournament.startTime}`).getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [tournament.startDate, tournament.startTime]);

  return (
    <div className="min-h-screen pt-16 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tournament Header */}
          <div className="neon-card mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
              <div className="flex-1">
                <h1 className="text-4xl font-gaming font-bold text-white mb-4">
                  {tournament.name}
                </h1>
                <p className="text-gray-300 text-lg mb-6">
                  {tournament.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Date:</span>
                      <span className="text-white font-semibold">{tournament.startDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Time:</span>
                      <span className="text-white font-semibold">{tournament.startTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Entry Fee:</span>
                      <span className="text-neon-cyan font-bold">{tournament.entryFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Prize Pool:</span>
                      <span className="text-neon-green font-bold">{tournament.prizePool}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Map:</span>
                      <span className="text-white">{tournament.map}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Mode:</span>
                      <span className="text-white">{tournament.mode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Type:</span>
                      <span className="text-neon-purple">{tournament.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Organizer:</span>
                      <span className="text-white">{tournament.organizer}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-neon-blue to-neon-purple p-6 rounded-lg">
                  <h3 className="text-white font-bold mb-2">Slots Available</h3>
                  <p className="text-3xl font-gaming font-bold text-white">
                    {tournament.slotsLeft}/{tournament.totalSlots}
                  </p>
                </div>
                <button className="neon-button w-full mt-4">
                  Register Now
                </button>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="neon-card mb-8 text-center"
          >
            <h2 className="text-2xl font-gaming font-bold text-neon-blue mb-6">Tournament Starts In</h2>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={item.label} className="bg-dark-light/50 p-4 rounded-lg border border-neon-blue/30">
                  <div className="text-3xl font-gaming font-bold text-neon-blue animate-pulse">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Rules & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="neon-card">
                <h3 className="text-xl font-gaming font-bold text-neon-blue mb-4">Tournament Rules</h3>
                <ul className="space-y-2">
                  {tournament.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-neon-blue mt-1">•</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="neon-card">
                <h3 className="text-xl font-gaming font-bold text-neon-blue mb-4">Device Rules</h3>
                <p className="text-gray-300">{tournament.deviceRules}</p>
              </div>
            </motion.div>

            {/* Prize Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="neon-card">
                <h3 className="text-xl font-gaming font-bold text-neon-blue mb-4">Prize Breakdown</h3>
                <div className="space-y-3">
                  {tournament.prizeBreakdown.map((prize, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-dark-light/50 rounded-lg border border-gray-700/50">
                      <span className="text-white font-semibold">{prize.position}</span>
                      <div className="text-right">
                        <div className="text-neon-green font-bold">{prize.prize}</div>
                        <div className="text-gray-400 text-sm">{prize.percentage}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="neon-card mt-8"
          >
            <h3 className="text-xl font-gaming font-bold text-neon-blue mb-6">Tournament Schedule</h3>
            <div className="space-y-4">
              {tournament.schedule.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-dark-light/30 rounded-lg border border-gray-700/50">
                  <div className="text-neon-cyan font-bold text-lg min-w-[60px]">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <span className="text-white font-semibold">{item.event}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'upcoming' 
                      ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/30'
                      : 'bg-green-500/20 text-green-400 border border-green-500/30'
                  }`}>
                    {item.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TournamentDetailsPage;
