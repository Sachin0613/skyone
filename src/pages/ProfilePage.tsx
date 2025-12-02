import { motion } from 'framer-motion';
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from 'react';
import { toast } from 'sonner';

const ProfilePage = () => {
  const user = useQuery(api.auth.loggedInUser);
  const updateUserName = useMutation(api.auth.updateUserName);

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  // ⭐ FIX: These MUST be inside the component
  const [ffUid, setFfUid] = useState("");
  const [phone, setPhone] = useState("");
  const [oneLink, setOneLink] = useState("");

  // Mock user data
  const profileData = {
    username: user?.name || "Username",
    email: user?.email || "skywarrior@example.com",
    level: 0,
    kd: 0,
    winRate: 0,
    headshots: 0,
    totalKills: 0,
    totalMatches: 0,
    wins: 0,
    avatar: user?.image || "/api/placeholder/150/150",
    badges: [
      { name: "Tournament Winner", icon: "🏆", color: "text-yellow-400" },
      { name: "Headshot Master", icon: "🎯", color: "text-red-400" },
      { name: "Team Player", icon: "👥", color: "text-blue-400" },
      { name: "Veteran", icon: "⭐", color: "text-purple-400" }
    ]
  };

  const handleEditProfile = () => {
    setEditName(profileData.username);
    setIsEditing(true);
  };

  const handleSaveProfile = async () => {
    if (!editName.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    setIsUpdating(true);
    try {
      await updateUserName({ name: editName.trim() });

      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditName("");
  };

  if (!user) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

          {/* Profile Header */}
          <div className="neon-card mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

              {/* Name & Email */}
              <div className="flex-1 text-center md:text-left">
                {isEditing ? (
                  <div className="space-y-4">

                    {/* Username Input */}
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="w-full max-w-md px-4 py-2 bg-dark-light border border-neon-blue/30 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                      placeholder="Enter your name"
                    />

                    {/* Free Fire UID */}
                    <input
                      type="text"
                      value={ffUid}
                      onChange={(e) => setFfUid(e.target.value)}
                      className="w-full max-w-md px-4 py-2 bg-dark-light border border-neon-blue/30 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                      placeholder="Free Fire UID"
                    />

                    {/* Phone Number */}
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full max-w-md px-4 py-2 bg-dark-light border border-neon-blue/30 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                      placeholder="Phone Number"
                    />

                    {/* One Link */}
                    <input
                      type="text"
                      value={oneLink}
                      onChange={(e) => setOneLink(e.target.value)}
                      className="w-full max-w-md px-4 py-2 bg-dark-light border border-neon-blue/30 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                      placeholder="One Link (Instagram / YouTube / Website)"
                    />

                    {/* Buttons */}
                    <div className="flex gap-2 justify-center md:justify-start">
                      <button
                        onClick={handleSaveProfile}
                        disabled={isUpdating}
                        className="px-4 py-2 bg-neon-green text-white rounded-lg hover:bg-neon-green/80 transition-colors disabled:opacity-50"
                      >
                        {isUpdating ? "Saving..." : "Save"}
                      </button>

                      <button
                        onClick={handleCancelEdit}
                        disabled={isUpdating}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h1 className="text-3xl font-gaming font-bold text-white mb-2">
                      {profileData.username}
                    </h1>
                    <p className="text-gray-400 mb-2">{profileData.email}</p>

                    {/* Show saved fields */}
                    <p className="text-gray-300">FF UID: {ffUid || "Not added"}</p>
                    <p className="text-gray-300">Phone: {phone || "Not added"}</p>
                    <p className="text-gray-300">
                      One Link:{" "}
                      {oneLink ? (
                        <a href={oneLink} target="_blank" className="text-neon-blue underline">
                          {oneLink}
                        </a>
                      ) : (
                        "Not added"
                      )}
                    </p>
                  </>
                )}
              </div>

              {!isEditing && (
                <button onClick={handleEditProfile} className="neon-button">
                  Edit Profile
                </button>
              )}

            </div>
          </div>




          {/* Achievements + Stats */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Achievements */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="neon-card">
              <h2 className="text-xl font-gaming font-bold text-neon-blue mb-6">Achievements</h2>
              <div className="grid grid-cols-2 gap-4">
                {profileData.badges.map((badge) => (
                  <div key={badge.name} className="bg-dark-light/50 p-4 rounded-lg border border-gray-700/50 hover:border-neon-blue/30 transition-colors">
                    <div className="text-center">
                      <div className="text-2xl mb-2">{badge.icon}</div>
                      <h3 className={`font-semibold ${badge.color}`}>{badge.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Match Stats */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="neon-card">
              <h2 className="text-xl font-gaming font-bold text-neon-blue mb-6">Match Statistics</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Matches</span>
                  <span className="text-white font-semibold">{profileData.totalMatches}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Wins</span>
                  <span className="text-neon-green font-semibold">{profileData.wins}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Losses</span>
                  <span className="text-red-400 font-semibold">{profileData.totalMatches - profileData.wins}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Kills</span>
                  <span className="text-neon-purple font-semibold">{profileData.totalKills}</span>
                </div>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 justify-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="neon-card text-center mx-auto"
              >
                <h3 className="text-gray-400 text-sm mb-2">
                  Join Our Discord - For more information or Upadtes
                </h3>

                <a
                  href="https://discord.gg/Xjj7Qdy7gz"
                  target="_blank"
                  className="text-2xl font-bold text-neon-blue underline hover:text-neon-purple transition"
                >
                  Click Here
                </a>
              </motion.div>
            </div>



          </div>
          {/* ============================
     🎥 Profile Video Section
{/* ============================
 🎥 Profile Video Section (FIXED)
============================ */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">

              <div className="relative w-full rounded-xl overflow-hidden shadow-[0_0_25px_rgba(0,200,255,0.5)] border border-neon-blue/30">

                {/* 🔥 VIDEO FIX: High Brightness + Contrast + Overlay */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-xl brightness-125 contrast-125"
                  style={{
                    filter: "brightness(1.3) contrast(1.2) saturate(1.1)",
                  }}
                >
                  <source src="/assest/intro.mp4" type="video/mp4" />
                </video>


                {/* Light Overlay to Make Video POP */}
                <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>

                {/* Neon Glow Border */}
                <div className="absolute inset-0 border border-neon-blue/50 rounded-xl pointer-events-none animate-pulse"></div>
              </div>

            </div>
          </section>



        </motion.div>
      </div>
    </div>

  );
};

export default ProfilePage;
