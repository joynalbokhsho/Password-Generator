# Password Generator - Secure & Smart

A beautiful, modern password generator built with Next.js, Firebase authentication, and stunning animations. Generate strong, secure passwords with customizable options and optional user authentication for saving your preferences.

## ✨ Features

- 🔐 **Secure Password Generation** - Generate strong passwords with customizable length and character types
- 🎨 **Beautiful UI/UX** - Modern design with smooth animations and glass morphism effects
- 🔑 **Firebase Authentication** - Optional login/signup for saving user preferences
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast & Lightweight** - Built with Next.js 14 and optimized for performance
- 🎭 **Smooth Animations** - Powered by Framer Motion for delightful interactions
- 🎯 **Copy to Clipboard** - One-click password copying functionality
- 🌙 **Dark Theme** - Beautiful dark theme with gradient backgrounds

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase project (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Password-Generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or use an existing one
   - Enable Authentication (Email/Password)
   - Get your Firebase configuration

4. **Configure environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Authentication**: Firebase Auth
- **Database**: Firestore (for future features)
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
Password-Generator/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   └── AuthModal.tsx        # Authentication modal
├── contexts/
│   └── AuthContext.tsx      # Authentication context
├── lib/
│   └── firebase.ts          # Firebase configuration
├── public/                  # Static assets
└── package.json
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... more shades
  },
  dark: {
    50: '#f8fafc',
    // ... more shades
  }
}
```

### Animations
Custom animations are defined in `tailwind.config.js` and can be extended:
```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  // ... more animations
}
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Features in Detail

### Password Generation
- **Length Control**: 8-64 characters
- **Character Types**: 
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Special symbols (!@#$%^&*)
- **Copy to Clipboard**: One-click copying with visual feedback

### Authentication
- **Email/Password**: Traditional authentication
- **Modal Interface**: Beautiful modal for login/signup
- **Error Handling**: User-friendly error messages
- **Loading States**: Smooth loading animations

### UI/UX
- **Glass Morphism**: Modern glass effect cards
- **Gradient Backgrounds**: Beautiful animated gradients
- **Smooth Transitions**: Framer Motion powered animations
- **Responsive Design**: Works on all screen sizes

## 🔒 Security Features

- **Client-side Generation**: Passwords generated locally
- **No Storage**: Passwords are never stored on servers
- **Secure Authentication**: Firebase Auth with email verification
- **HTTPS Ready**: Production-ready security

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

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

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Firebase](https://firebase.google.com/) for authentication
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for beautiful icons

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact us.

---

Made with ❤️ using Next.js and Firebase
