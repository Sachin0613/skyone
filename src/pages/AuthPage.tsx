import { useState } from 'react';
import { motion } from 'framer-motion';
import { SignInForm } from '../SignInForm';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark-lighter"></div>
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-neon-blue/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-neon-purple/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="neon-card">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-gaming font-bold neon-text mb-2">
              {isSignUp ? 'Join SkyOne' : 'Welcome Back'}
            </h1>
            <p className="text-gray-400">
              {isSignUp ? 'Create your account to start competing' : 'Sign in to your account'}
            </p>
          </div>

          <SignInForm />

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-neon-blue hover:text-neon-purple transition-colors"
            >
              {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="text-center text-sm text-gray-400">
              <p>By continuing, you agree to our</p>
              <div className="space-x-4 mt-2">
                <a href="#" className="text-neon-blue hover:text-neon-purple transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="#" className="text-neon-blue hover:text-neon-purple transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
