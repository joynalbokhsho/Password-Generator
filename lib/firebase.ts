// Simple Firebase configuration that avoids SSR issues
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "demo-key",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "demo.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "demo-project",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "demo.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "demo-app-id"
};

// Mock Firebase services for now
export const auth = {
  currentUser: null,
  onAuthStateChanged: (callback: (user: any) => void) => {
    callback(null);
    return () => {};
  },
  signInWithEmailAndPassword: async (email: string, password: string) => {
    throw new Error('Firebase not configured');
  },
  createUserWithEmailAndPassword: async (email: string, password: string) => {
    throw new Error('Firebase not configured');
  },
  signOut: async () => {
    throw new Error('Firebase not configured');
  }
};

export const db = {
  collection: () => ({
    add: () => Promise.resolve({ id: 'demo' }),
    doc: () => ({
      set: () => Promise.resolve(),
      get: () => Promise.resolve({ data: () => null })
    })
  })
};

export default { firebaseConfig };
