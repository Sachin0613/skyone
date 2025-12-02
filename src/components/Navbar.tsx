import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Authenticated, Unauthenticated } from "convex/react";
import { SignOutButton } from '../SignOutButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Tournaments', path: '/tournaments' },
    { name: 'Teams', path: '/teams' },
    { name: 'Matches', path: '/matches' },
    { name: 'Leaderboard', path: '/leaderboard' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-neon-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/assest/webff.png"
              className="w-16 h-auto drop-shadow-lg"
            />
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${isActive(item.path)
                  ? 'text-neon-blue'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            <Authenticated>
              <Link
                to="/profile"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Profile
              </Link>
              <SignOutButton />
            </Authenticated>
            <Unauthenticated>
              <Link
                to="/auth"
                className="neon-button text-sm"
              >
                Sign In
              </Link>
            </Unauthenticated>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-dark-light/90 backdrop-blur-md rounded-lg mt-2 p-4"
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${isActive(item.path)
                    ? 'text-neon-blue bg-neon-blue/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-700">
                <Authenticated>
                  <Link
                    to="/profile"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg transition-colors duration-300"
                  >
                    Profile
                  </Link>
                  <div className="px-3 py-2">
                    <SignOutButton />
                  </div>
                </Authenticated>
                <Unauthenticated>
                  <Link
                    to="/auth"
                    onClick={() => setIsOpen(false)}
                    className="block neon-button text-sm text-center"
                  >
                    Sign In
                  </Link>
                </Unauthenticated>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
