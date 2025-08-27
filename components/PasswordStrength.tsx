'use client';

import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mt-4 p-4 rounded-lg border ${strength.bgColor} ${strength.borderColor}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          {strength.icon}
          <span className={`font-medium ${strength.color}`}>
            Password Strength: {strength.label}
          </span>
        </div>
        <span className="text-white/70 text-sm">
          Score: {strength.score}/7
        </span>
      </div>
      
      <div className="w-full bg-white/10 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(strength.score / 7) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`h-2 rounded-full ${
            strength.score <= 2 ? 'bg-red-400' :
            strength.score <= 4 ? 'bg-yellow-400' :
            strength.score <= 6 ? 'bg-blue-400' : 'bg-green-400'
          }`}
        />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div className={`flex items-center space-x-1 ${password.length >= 8 ? 'text-green-400' : 'text-white/50'}`}>
          <CheckCircle className="w-3 h-3" />
          <span>8+ characters</span>
        </div>
        <div className={`flex items-center space-x-1 ${/[a-z]/.test(password) ? 'text-green-400' : 'text-white/50'}`}>
          <CheckCircle className="w-3 h-3" />
          <span>Lowercase</span>
        </div>
        <div className={`flex items-center space-x-1 ${/[A-Z]/.test(password) ? 'text-green-400' : 'text-white/50'}`}>
          <CheckCircle className="w-3 h-3" />
          <span>Uppercase</span>
        </div>
        <div className={`flex items-center space-x-1 ${/\d/.test(password) ? 'text-green-400' : 'text-white/50'}`}>
          <CheckCircle className="w-3 h-3" />
          <span>Numbers</span>
        </div>
        <div className={`flex items-center space-x-1 ${/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) ? 'text-green-400' : 'text-white/50'}`}>
          <CheckCircle className="w-3 h-3" />
          <span>Symbols</span>
        </div>
        <div className={`flex items-center space-x-1 ${password.length >= 12 ? 'text-green-400' : 'text-white/50'}`}>
          <CheckCircle className="w-3 h-3" />
          <span>12+ characters</span>
        </div>
      </div>
    </motion.div>
  );
}
