import { motion } from "framer-motion";
import Hero3D from "../components/Hero3D";

const HomePage = () => {
  const leaderboard = [
    { rank: 1, name: "SkyWarrior", kills: 1250, kd: 4.2, points: 8500 },
    { rank: 2, name: "FireStorm", kills: 1180, kd: 3.8, points: 8200 },
    { rank: 3, name: "NeonBlade", kills: 1120, kd: 3.5, points: 7900 },
    { rank: 4, name: "CyberHawk", kills: 1050, kd: 3.2, points: 7600 },
    { rank: 5, name: "QuantumX", kills: 980, kd: 3.0, points: 7300 },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen">
        <Hero3D />
      </section>

      {/* ABOUT US */}
      <section className="py-20 px-4 bg-gradient-to-r from-dark-light/50 to-dark-lighter/50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-gaming font-bold text-center mb-12 neon-text">
            About SkyOne eSports
          </h2>
          <motion.div
  className="
    hero-text 
    text-lg 
    md:text-xl 
    max-w-3xl 
    mx-auto 
    mb-8 
    text-center 
    leading-relaxed 
    md:leading-loose 
    font-gaming 
    pointer-events-none 
    flex 
    flex-wrap 
    justify-center 
  "
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  }}
>
  {"SkyOne ESP is a next-generation Free Fire esports platform built for competitive gamers, emerging teams and rising champions. We bring together daily tournaments, team-based leagues, rankings and fair gameplay — all designed to help players improve, showcase their skills and earn real rewards. Whether you're a solo fighter or a full squad ready to dominate, SkyOne ESP gives you the tools, stage and opportunities to rise in the esports world. Join the battlefield, build your legacy and become the next champion of SkyOne ESP."
    .split(" ")
    .map((word, index) => (
      <motion.span
        key={index}
        className="word-glow inline-block"
        variants={{
          hidden: { opacity: 0.3 },
          visible: {
            opacity: 1,
            textShadow: "0 0 12px #fff, 0 0 22px #fff",
            transition: { duration: 0.25 }
          }
        }}
      >
        {word}&nbsp;
      </motion.span>
    ))}
</motion.div>


          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {[
                  { number: "soon", label: "Active Players", icon: "👥" },
                  { number: "soon", label: "Tournaments", icon: "🏆" },
                  { number: "soon", label: "Prizes Distributed", icon: "💰" },
                  { number: "24/7", label: "Support", icon: "🛟" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-dark-light/50 rounded-lg border border-neon-blue/20"
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-neon-blue">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="neon-card bg-gradient-to-br from-neon-blue/10 to-neon-purple/10">
                <h3 className="text-2xl font-gaming font-bold text-neon-blue mb-6">
                  Our Vision
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      icon: "🎯",
                      title: "Excellence in Gaming",
                      desc: "Providing world-class tournament infrastructure and fair competition.",
                    },
                    {
                      icon: "🚀",
                      title: "Innovation First",
                      desc: "Cutting-edge tech for seamless esports gameplay.",
                    },
                    {
                      icon: "🤝",
                      title: "Community Driven",
                      desc: "Building a strong ecosystem for gamers to thrive.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <span className="text-neon-green text-xl">
                        {item.icon}
                      </span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FLOATING FEATURES SECTION */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-gaming font-bold text-center mb-12 neon-text">
            Why Choose SkyOne ESP
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Player Reviews",
                desc: "Real gamers trust SkyOne ESP for fast payments, fair matches, and premium tournaments.",
              },
              {
                title: "Esports Roadmap 2025",
                desc: "Daily events, yearly championships, and big league tournaments coming this season.",
              },
              {
                title: "Game Modes & Features",
                desc: "Solo, Duo, Squad, knockouts, leagues, custom rooms, and live match stats.",
              },
              {
                title: "Elite Membership",
                desc: "Unlock exclusive tournaments, free entries, badges, and premium rewards.",
              },
              {
                title: "Creator Program",
                desc: "Streamers get badges, paid collaborations, and special esports access.",
              },
              {
                title: "Esports News",
                desc: "Free Fire updates, esports announcements, patch notes, and pro tips.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-black/30 border border-white/10 shadow-[0_0_15px_rgba(0,200,255,0.2)] hover:shadow-[0_0_25px_rgba(0,200,255,0.4)] transition-all duration-300 backdrop-blur-xl hover:scale-105 floating-card cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-neon-blue mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <style>{`
          .floating-card {
            animation: float 4.5s ease-in-out infinite;
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}</style>
      </section>

      {/* SERVICES SECTION */}
      {/* Services Section */}
<section className="py-20 px-4">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto"
  >
    <h2 className="text-4xl font-gaming font-bold text-center mb-12 neon-text">
      Our Gaming Services
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: "🏆",
          title: "Tournament Hosting",
          description:
            "Professional tournament management with live streaming, real-time scoring, and instant prize distribution.",
          features: [
            "Live Match Streaming",
            "Real-time Leaderboards",
            "Automated Prize Pool",
            "Anti-cheat System",
          ],
        },
        {
          icon: "👥",
          title: "Team Management",
          description:
            "Complete team formation and management tools with player statistics, team analytics, and recruitment features.",
          features: [
            "Team Formation",
            "Player Statistics",
            "Performance Analytics",
            "Recruitment Tools",
          ],
        },
        {
          icon: "🎮",
          title: "Custom Matches",
          description:
            "Create private matches with custom rules, maps, and formats for practice sessions and scrimmages.",
          features: [
            "Custom Room Creation",
            "Flexible Rules",
            "Practice Modes",
            "Coaching Tools",
          ],
        },
        {
          icon: "📊",
          title: "Analytics & Stats",
          description:
            "Comprehensive player and team analytics with detailed performance metrics and improvement insights.",
          features: [
            "Performance Tracking",
            "Skill Analysis",
            "Progress Reports",
            "Comparison Tools",
          ],
        },
        {
          icon: "🏅",
          title: "Ranking System",
          description:
            "Fair and transparent ranking system based on performance, consistency, and tournament achievements.",
          features: [
            "ELO Rating System",
            "Seasonal Rankings",
            "Achievement Badges",
            "Skill Tiers",
          ],
        },
        {
          icon: "💬",
          title: "Community Hub",
          description:
            "Connect with fellow gamers, join discussions, share strategies, and build lasting gaming relationships.",
          features: [
            "Player Forums",
            "Strategy Guides",
            "Mentorship Program",
            "Social Features",
          ],
        },
      ].map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="neon-card group hover:scale-105 transition-transform duration-300"
        >
          {/* Icon */}
          <div className="text-4xl mb-4 group-hover:animate-bounce">
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-gaming font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 mb-4 leading-relaxed">
            {service.description}
          </p>

          {/* Features List */}
          <ul className="space-y-2">
            {service.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center gap-2 text-sm">
                <span className="text-neon-green">✓</span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>
<section className="relative py-20 px-4 max-w-6xl mx-auto">

  {/* 🔥 Floating Neon Lights Background */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">

    {/* Large moving gradient blob */}
    <div className="absolute top-10 left-1/4 w-96 h-96 bg-neon-blue/20 blur-3xl rounded-full animate-slow-move"></div>

    {/* Purple glow orb */}
    <div className="absolute bottom-16 right-10 w-72 h-72 bg-neon-purple/20 blur-3xl rounded-full animate-float"></div>

    {/* Pink pulsing light */}
    <div className="absolute top-1/2 left-10 w-64 h-64 bg-neon-pink/10 blur-2xl rounded-full animate-pulse-slow"></div>
  </div>

  <h2 className="text-4xl font-gaming font-bold text-center neon-text mb-12">
    SkyOne Merchandise Shop
  </h2>

  <p className="text-center text-gray-300 mb-10">
    Exclusive SkyOne ESP collectibles for true gamers.  
    If you wanna buy, contact:
    <span className="text-neon-blue"> skyoneesp@gmail.com</span> or
    <span className="text-neon-purple"> yadavsachin5001@gmail.com</span>
  </p>

  <div className="grid md:grid-cols-4 gap-8">

    {/* Jersey */}
    <div className="neon-card p-4 text-center hover:scale-105 transition-transform duration-300">
      <img
        src="/public/assest/key.png"
        alt="SkyOne Jersey"
        className="w-full h-40 object-cover rounded-lg mb-4 animate-glow"
      />
      <h3 className="text-xl font-gaming text-neon-blue mb-2">Jersey</h3>
      <p className="text-gray-300 text-sm">
        Pro-level esports jersey designed for intense gaming sessions and team identity.
      </p>
    </div>

    {/* Gaming Caps */}
    <div className="neon-card p-4 text-center hover:scale-105 transition-transform duration-300">
      <img
        src="/public/assest/cap.png"
        alt="Gaming Cap"
        className="w-full h-40 object-cover rounded-lg mb-4 animate-glow"
      />
      <h3 className="text-xl font-gaming text-neon-blue mb-2">Gaming Caps</h3>
      <p className="text-gray-300 text-sm">
        Stylish lightweight caps that represent your squad with pride on and off the battlefield.
      </p>
    </div>

    {/* Keychains */}
    <div className="neon-card p-4 text-center hover:scale-105 transition-transform duration-300">
      <img
        src="/assest/hoodie.png"
        alt="Keychains"
        className="w-full h-40 object-cover rounded-lg mb-4 animate-glow"
      />
      <h3 className="text-xl font-gaming text-neon-blue mb-2">Keychains</h3>
      <p className="text-gray-300 text-sm">
        Premium metal keychains with SkyOne branding carry your gamer identity everywhere.
      </p>
    </div>

    {/* Hoodies */}
    <div className="neon-card p-4 text-center hover:scale-105 transition-transform duration-300">
      <img
        src="/public/assest/jersey.png"
        alt="Hoodie"
        className="w-full h-40 object-cover rounded-lg mb-4 animate-glow"
      />
      <h3 className="text-xl font-gaming text-neon-blue mb-2">Hoodies</h3>
      <p className="text-gray-300 text-sm">
        Warm, premium-quality hoodies built for gamers perfect for streams, events, and daily wear.
      </p>
    </div>

  </div>

  {/* 🔥 Custom animations */}
  <style>{`
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    .animate-slow-move {
      animation: slowMove 14s ease-in-out infinite alternate;
    }

    .animate-pulse-slow {
      animation: pulseSlow 5s ease-in-out infinite;
    }

    .animate-glow {
      animation: glowPulse 3s ease-in-out infinite;
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }

    @keyframes slowMove {
      0% { transform: translateX(-50px) translateY(0); }
      100% { transform: translateX(50px) translateY(40px); }
    }

    @keyframes pulseSlow {
      0% { opacity: 0.4; }
      50% { opacity: 0.8; }
      100% { opacity: 0.4; }
    }

    @keyframes glowPulse {
      0% { filter: drop-shadow(0 0 4px rgba(0,255,255,0.3)); }
      50% { filter: drop-shadow(0 0 12px rgba(0,255,255,0.7)); }
      100% { filter: drop-shadow(0 0 4px rgba(0,255,255,0.3)); }
    }
  `}</style>

</section>


<section className="py-20 px-4 max-w-6xl mx-auto">
  <h2 className="text-4xl font-gaming font-bold text-center neon-text mb-12">
    Frequently Asked Questions
  </h2>

  <div className="space-y-6">
    {[
      {
        q: "How do I join a SkyOne ESP tournament?",
        a: (
          <span>
            Go to the{" "}
            <a href="/tournaments" className="text-neon-blue underline">
              Tournament Page
            </a>{" "}
            → select an event → click <strong>Join Now</strong>. Make sure you have added your Free Fire UID in your profile.
          </span>
        ),
      },
      
      {
        q: "What are the basic match rules?",
        a: (
          <span>
            Read our official{" "}
            <a
              href="https://discord.com/channels/699934151742324736/1445031255753359411"
              className="text-neon-purple underline"
              target="_blank"
            >
              Rulebook
            </a>{" "}
            before playing. Using hacks, emulators (if restricted), or teaming is strictly prohibited.
          </span>
        ),
      },
      {
        q: "Is SkyOne ESP anti-cheat enabled?",
        a: (
          <span>
            Yes, we use AI-based cheat detection + manual referee review.  
            Report suspicious players here:{" "}
            <a
              href="https://discord.gg/Xjj7Qdy7gz"
              className="text-red-400 underline"
              target="_blank"
            >
              Discord Support
            </a>
            .
          </span>
        ),
      },
      {
        q: "How do I contact support?",
        a: (
          <span>
            You can contact our 24/7 support team through{" "}
            <a
              href="https://discord.gg/Xjj7Qdy7gz"
              className="text-neon-blue underline"
              target="_blank"
            >
              Discord
            </a>{" "}
            or submit a ticket on the{" "}
            <a href="https://discord.com/channels/699934151742324736/1445031261612806154" className="text-neon-green underline">
              Support Page
            </a>.
          </span>
        ),
      },
      {
        q: "Where can I watch live tournament streams?",
        a: (
          <span>
            All official livestreams are available on our{" "}
            <a
              href="https://www.youtube.com/@skyoneesp"
              className="text-red-400 underline"
              target="_blank"
            >
              YouTube Channel
            </a>{" "}
            and tournament pages.
          </span>
        ),
      },
    ].map((faq, index) => (
      <details
        key={index}
        className="group bg-black/40 border border-white/10 p-4 rounded-xl backdrop-blur-xl cursor-pointer transition-all hover:border-neon-blue/40"
      >
        <summary className="text-lg font-gaming text-white flex justify-between items-center">
          {faq.q}
          <span className="text-neon-blue group-open:rotate-180 transition-transform">
            ▼
          </span>
        </summary>
        <p className="text-gray-300 mt-3 leading-relaxed">{faq.a}</p>
      </details>
    ))}
  </div>
</section>



    
    </div>
  );
};

export default HomePage;
