// Simple Firebase Configuration
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBXdC23TpcXdS2FCrwejDHkmbcQafmBq50",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "academic-matchmaker-prod.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "academic-matchmaker-prod",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "academic-matchmaker-prod.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "967137857941",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:967137857941:web:d27ed1253edb32bd2ee69c",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-SPZGHFKQT3"
};

export const appId = import.meta.env.VITE_APP_ID || 'academic-match-production';