// Initialize Firebase using the global firebase object
const firebaseConfig = {
  apiKey: "AIzaSyD_lAdpA2l_TXbKsr2_IIEE1p2xcPtgaQA",
  authDomain: "londonpubguide-e47a5.firebaseapp.com",
  projectId: "londonpubguide-e47a5",
  storageBucket: "londonpubguide-e47a5.appspot.com",
  messagingSenderId: "103182514079",
  appId: "1:103182514079:web:a7499cffe2f5c8eb4defaa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
