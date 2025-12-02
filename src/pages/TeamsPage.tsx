import { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from 'sonner';

const TeamsPage = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const user = useQuery(api.auth.loggedInUser);
  const userTeams = useQuery(api.teams.getUserTeams) || [];
  const createTeam = useMutation(api.teams.createTeam);

  const handleCreateTeam = async () => {
    if (!teamName.trim()) {
      toast.error("Team name cannot be empty");
      return;
    }

    setIsCreating(true);
    try {
      await createTeam({ name: teamName.trim() });
      setTeamName('');
      setShowCreateForm(false);
      toast.success("Team created successfully!");
    } catch (error) {
      toast.error("Failed to create team");
    } finally {
      setIsCreating(false);
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
            Teams
          </h1>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="neon-card p-2 flex gap-2">
              {[
                { id: 'browse', label: 'Browse Teams' },
                { id: 'my-teams', label: 'My Teams' }
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

          {/* Browse Teams Tab */}
          {activeTab === 'browse' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">👥</div>
              <h2 className="text-3xl font-gaming font-bold text-gray-400 mb-4">Teams Will Be Shown Here</h2>
              <p className="text-gray-500 text-lg mb-8">
                Browse and discover teams looking for new members.
              </p>
            </motion.div>
          )}

          {/* My Teams Tab */}
          {activeTab === 'my-teams' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Create Team Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="neon-button"
                >
                  Create New Team
                </button>
              </div>

              {/* Create Team Form */}
              {showCreateForm && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="neon-card max-w-md mx-auto"
                >
                  <h3 className="text-xl font-gaming font-bold text-neon-blue mb-4">Create New Team</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      placeholder="Enter team name"
                      className="w-full px-4 py-2 bg-dark-light border border-neon-blue/30 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={handleCreateTeam}
                        disabled={isCreating}
                        className="flex-1 px-4 py-2 bg-neon-green text-white rounded-lg hover:bg-neon-green/80 transition-colors disabled:opacity-50"
                      >
                        {isCreating ? "Creating..." : "Create Team"}
                      </button>
                      <button
                        onClick={() => {
                          setShowCreateForm(false);
                          setTeamName('');
                        }}
                        disabled={isCreating}
                        className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* User Teams */}
              {userTeams.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userTeams.map((team, index) => (
                    <motion.div
                      key={team._id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="neon-card group"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xl">{team.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">
                            {team.name}
                          </h3>
                          <p className="text-gray-400 text-sm">Created by you</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Members:</span>
                          <span className="text-white">1/4</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Status:</span>
                          <span className="text-neon-green">Active</span>
                        </div>
                      </div>

                      <button className="w-full neon-button">
                        Manage Team
                      </button>
                    </motion.div>
                  ))}
                </div>
              ) : !showCreateForm && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">No Teams Yet</h3>
                  <p className="text-gray-500">Create your first team to get started!</p>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamsPage;
