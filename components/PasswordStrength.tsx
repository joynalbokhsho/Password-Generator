'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

interface PasswordStrengthProps {
  password: string;
}

export default function PasswordStrength({ password }: PasswordStrengthProps) {
  const calculateStrength = (password: string) => {
    if (!password) return { score: 0, label: '', color: '', icon: null };

    let score = 0;
    const checks = {
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      numbers: /\d/.test(password),
      symbols: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    };

    score += checks.length ? 1 : 0;
    score += checks.lowercase ? 1 : 0;
    score += checks.uppercase ? 1 : 0;
    score += checks.numbers ? 1 : 0;
    score += checks.symbols ? 1 : 0;

    // Bonus for length
    if (password.length >= 12) score += 1;
    if (password.length >= 16) score += 1;

    if (score <= 2) {
      return {
        score,
        label: 'Weak',
        color: 'text-red-400',
        bgColor: 'bg-red-500/20',
        borderColor: 'border-red-500/50',
        icon: <AlertTriangle className="w-4 h-4 text-red-400" />
      };
    } else if (score <= 4) {
      return {
        score,
        label: 'Fair',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-500/20',
        borderColor: 'border-yellow-500/50',
        icon: <Shield className="w-4 h-4 text-yellow-400" />
      };
    } else if (score <= 6) {
      return {
        score,
        label: 'Good',
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/20',
        borderColor: 'border-blue-500/50',
        icon: <Shield className="w-4 h-4 text-blue-400" />
      };
    } else {
      return {
        score,
        label: 'Strong',
        color: 'text-green-400',
        bgColor: 'bg-green-500/20',
        borderColor: 'border-green-500/50',
        icon: <CheckCircle className="w-4 h-4 text-green-400" />
      };
    }
  };

  const strength = calculateStrength(password);

  if (!password) return null;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${(strength.score / 7) * 100}%`,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`mt-4 p-4 rounded-lg border ${strength.bgColor} ${strength.borderColor} relative overflow-hidden`}
    >
      {/* Animated background glow */}
      <motion.div
        className={`absolute inset-0 opacity-20 ${
          strength.score <= 2 ? 'bg-red-500' :
          strength.score <= 4 ? 'bg-yellow-500' :
          strength.score <= 6 ? 'bg-blue-500' : 'bg-green-500'
        }`}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <motion.div 
            className="flex items-center space-x-2"
            variants={itemVariants}
          >
            <motion.div variants={iconVariants}>
              {strength.icon}
            </motion.div>
            <motion.span 
              className={`font-medium ${strength.color}`}
              variants={itemVariants}
            >
              Password Strength: {strength.label}
            </motion.span>
          </motion.div>
          <motion.span 
            className="text-white/70 text-sm"
            variants={itemVariants}
          >
            Score: {strength.score}/7
          </motion.span>
        </div>
        
        <motion.div 
          className="w-full bg-white/10 rounded-full h-3 relative overflow-hidden"
          variants={itemVariants}
        >
          <motion.div
            variants={progressVariants}
            className={`h-3 rounded-full relative ${
              strength.score <= 2 ? 'bg-red-400' :
              strength.score <= 4 ? 'bg-yellow-400' :
              strength.score <= 6 ? 'bg-blue-400' : 'bg-green-400'
            }`}
          >
            {/* Shimmer effect on progress bar */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 1
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-4 grid grid-cols-2 gap-3 text-xs"
          variants={containerVariants}
        >
          {[
            { check: password.length >= 8, label: '8+ characters' },
            { check: /[a-z]/.test(password), label: 'Lowercase' },
            { check: /[A-Z]/.test(password), label: 'Uppercase' },
            { check: /\d/.test(password), label: 'Numbers' },
            { check: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password), label: 'Symbols' },
            { check: password.length >= 12, label: '12+ characters' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                item.check ? 'bg-green-500/10 border border-green-500/30' : 'bg-white/5'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <AnimatePresence mode="wait">
                {item.check ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className={`w-4 h-4 ${item.check ? 'text-green-400' : 'text-white/50'}`} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-4 h-4 border-2 border-white/30 rounded-full" />
                  </motion.div>
                )}
              </AnimatePresence>
              <span className={item.check ? 'text-green-400' : 'text-white/50'}>
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Strength celebration for strong passwords */}
        <AnimatePresence>
          {strength.score >= 6 && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="mt-3 flex items-center justify-center space-x-2"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-4 h-4 text-yellow-400" />
              </motion.div>
              <span className="text-yellow-400 text-sm font-medium">
                Excellent password strength!
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
