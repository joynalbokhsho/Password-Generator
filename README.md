# 🔐 PasswordGen - Secure Password Generator

A modern, animated password generator built with Next.js, React, and Framer Motion. Create strong, secure passwords with a beautiful, interactive user interface.

![Password Generator Demo](https://img.shields.io/badge/Status-Active-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## ✨ Features

### 🔒 Password Generation
- **Customizable Length**: Generate passwords from 8 to 64 characters
- **Character Types**: Choose from uppercase, lowercase, numbers, and symbols
- **Real-time Generation**: Instant password creation with smooth animations
- **Typewriter Effect**: Watch passwords being typed out character by character

### 🛡️ Security Features
- **Password Strength Analyzer**: Real-time strength assessment with visual indicators
- **Strength Scoring**: 7-point scoring system (Weak, Fair, Good, Strong)
- **Security Checklist**: Visual feedback for password requirements
- **Copy to Clipboard**: One-click password copying with confirmation

### 🎨 User Experience
- **Modern UI**: Glass morphism design with gradient backgrounds
- **Smooth Animations**: Framer Motion powered interactions
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Dark Theme**: Eye-friendly dark color scheme
- **Interactive Elements**: Hover effects, loading states, and micro-interactions

### 📱 Responsive & Accessible
- **Mobile-First**: Optimized for all screen sizes
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Friendly**: Proper ARIA labels and semantic HTML
- **Touch Optimized**: Touch-friendly controls for mobile devices

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/joynalbokhsho/Password-Generator.git
   cd Password-Generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### Icons & UI
- **Lucide React** - Beautiful, customizable icons
- **Custom CSS** - Glass morphism effects and animations

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
Password-Generator/
├── app/
│   ├── globals.css          # Global styles and custom components
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main password generator page
├── components/
│   └── PasswordStrength.tsx # Password strength analyzer component
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🎯 Usage

### Basic Password Generation
1. **Set Password Length**: Use the slider to choose between 8-64 characters
2. **Select Character Types**: Check/uncheck the character type options
3. **Generate Password**: Click the "Generate Password" button
4. **Copy Password**: Click the copy icon to copy to clipboard

### Password Strength Analysis
The app automatically analyzes your generated password and provides:
- **Strength Level**: Weak, Fair, Good, or Strong
- **Score**: 0-7 point rating system
- **Requirements Checklist**: Visual indicators for each security requirement
- **Progress Bar**: Animated strength indicator

### Customization Options
- **Uppercase Letters**: A-Z characters
- **Lowercase Letters**: a-z characters  
- **Numbers**: 0-9 digits
- **Symbols**: Special characters (!@#$%^&*)

## 🎨 Design Features

### Visual Effects
- **Glass Morphism**: Translucent card backgrounds with blur effects
- **Gradient Backgrounds**: Animated gradient overlays
- **Floating Particles**: Subtle animated background elements
- **Shimmer Effects**: Progress bar and button animations
- **Smooth Transitions**: 60fps animations throughout the app

### Color Scheme
- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Background**: Dark theme (#0f172a to #1e293b)
- **Text**: White with opacity variations
- **Accents**: Green for success, red for warnings, yellow for alerts

## 🔧 Customization

### Styling
The app uses Tailwind CSS with custom configurations. You can modify:
- Colors in `tailwind.config.js`
- Custom components in `app/globals.css`
- Animations and keyframes

### Functionality
- Password generation logic in `app/page.tsx`
- Strength calculation in `components/PasswordStrength.tsx`
- Add new character sets or validation rules

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Next.js](https://nextjs.org/) for the React framework

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Check the documentation
- Review the code comments

---

**Made with ❤️ using Next.js, React, and Framer Motion**
