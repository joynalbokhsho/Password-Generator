'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, RefreshCw, Shield, Check, Sparkles } from 'lucide-react';
import PasswordStrength from '@/components/PasswordStrength';

export default function Home() {
  const [password, setPassword] = useState('');
  const [displayedPassword, setDisplayedPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (password && !isTyping) {
      setIsTyping(true);
      setDisplayedPassword('');
      
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        if (currentIndex < password.length) {
          setDisplayedPassword(password.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 50); // Adjust speed here (lower = faster)

      return () => clearInterval(typeInterval);
    }
  }, [password]);

  const generatePassword = async () => {
    setIsGenerating(true);
    setDisplayedPassword(''); // Clear displayed password immediately
    setIsTyping(false); // Reset typing state
    
    // Add a small delay for animation effect
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (includeUppercase) chars += uppercase;
    if (includeLowercase) chars += lowercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (chars === '') {
      alert('Please select at least one character type!');
      setIsGenerating(false);
      return;
    }

    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(result);
    setIsGenerating(false);
  };

  const copyToClipboard = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Ensure displayed password never exceeds actual password
  const safeDisplayedPassword = displayedPassword.length <= password.length ? displayedPassword : password;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const copyButtonVariants = {
    hover: { 
      transition: { duration: 0.2 }
    },
    tap: { 
      transition: { duration: 0.1 }
    }
  };

  const checkboxVariants = {
    checked: { 
      scale: 1.1,
      transition: { duration: 0.2 }
    },
    unchecked: { 
      scale: 1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-400/5 rounded-full blur-2xl"
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400" />
            </motion.div>
            <motion.h1 
              className="text-xl sm:text-2xl font-bold gradient-text"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              PasswordGen
            </motion.h1>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] p-4 sm:p-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl px-2 sm:px-0"
        >
                      <motion.div 
              className="card p-4 sm:p-6"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
            <motion.div
              variants={itemVariants}
              className="text-center mb-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: 0.3 
                }}
                className="mb-4"
              >
                <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-primary-400 mx-auto" />
              </motion.div>
              <motion.h2 
                className="text-2xl sm:text-3xl font-bold text-white mb-2"
                variants={itemVariants}
              >
                Generate Secure Passwords
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-base text-white/70"
                variants={itemVariants}
              >
                Create strong, unique passwords with customizable options
              </motion.p>
            </motion.div>

            {/* Password Display */}
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.input
                  type="text"
                  value={safeDisplayedPassword}
                  readOnly
                  placeholder="Your generated password will appear here..."
                  className="input-field w-full text-base sm:text-lg font-mono pr-12"
                  animate={{
                    borderColor: password ? "rgba(59, 130, 246, 0.5)" : "rgba(255, 255, 255, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Typewriter cursor */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="absolute top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-primary-400"
                      style={{
                        left: `${safeDisplayedPassword.length * 0.6 + 1}rem`,
                      }}
                    />
                  )}
                </AnimatePresence>
                
                <motion.button
                  onClick={copyToClipboard}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors flex items-center justify-center w-8 h-8"
                  title="Copy to clipboard"
                  variants={copyButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{ 
                    marginTop: '-4px',
                    transformOrigin: 'center'
                  }}
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center w-5 h-5"
                      >
                        <Check className="w-5 h-5 text-green-400" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center w-5 h-5"
                      >
                        <Copy className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
              
              <AnimatePresence>
                {copied && (
                  <motion.p
                    initial={{ opacity: 0, y: -10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.8 }}
                    className="text-green-400 text-sm mt-2 text-center"
                  >
                    Password copied to clipboard!
                  </motion.p>
                )}
              </AnimatePresence>
              
              {/* Password Strength Indicator */}
              <motion.div
                variants={itemVariants}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <PasswordStrength password={password} />
              </motion.div>
            </motion.div>

            {/* Generate Button */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
                              <motion.button
                  onClick={generatePassword}
                  className="btn-primary w-full flex items-center justify-center space-x-2 text-base sm:text-lg relative overflow-hidden"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  disabled={isGenerating || isTyping}
                >
                <motion.div
                  animate={{ rotate: isGenerating ? 360 : 0 }}
                  transition={{ 
                    duration: isGenerating ? 1 : 0,
                    repeat: isGenerating ? Infinity : 0,
                    ease: "linear"
                  }}
                >
                  <RefreshCw className="w-5 h-5" />
                </motion.div>
                <span>
                  {isGenerating ? 'Generating...' : 
                   isTyping ? 'Typing...' : 'Generate Password'}
                </span>
                
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>

            {/* Options */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-white font-medium mb-3 text-sm sm:text-base">
                  Password Length: <span className="text-primary-400">{length}</span>
                </label>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <input
                    type="range"
                    min="8"
                    max="64"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <motion.div
                    className="absolute top-0 left-0 h-2 bg-primary-500 rounded-lg"
                    style={{ width: `${((length - 8) / (64 - 8)) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                variants={itemVariants}
              >
                {[
                  { state: includeUppercase, setState: setIncludeUppercase, label: 'Uppercase (A-Z)' },
                  { state: includeLowercase, setState: setIncludeLowercase, label: 'Lowercase (a-z)' },
                  { state: includeNumbers, setState: setIncludeNumbers, label: 'Numbers (0-9)' },
                  { state: includeSymbols, setState: setIncludeSymbols, label: 'Symbols (!@#$%)' }
                ].map((option, index) => (
                  <motion.label
                    key={index}
                    className="flex items-center space-x-2 sm:space-x-3 cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      variants={checkboxVariants}
                      animate={option.state ? "checked" : "unchecked"}
                    >
                      <input
                        type="checkbox"
                        checked={option.state}
                        onChange={(e) => option.setState(e.target.checked)}
                        className="w-4 h-4 text-primary-600 bg-white/10 border-white/20 rounded focus:ring-primary-500"
                      />
                    </motion.div>
                    <span className="text-white text-sm sm:text-base">{option.label}</span>
                  </motion.label>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
