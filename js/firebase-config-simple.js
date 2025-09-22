// Firebase configuration - Demo setup for testing
const firebaseConfig = {
  apiKey: "AIzaSyBlw61AiNR8Tx2Vjcadf0OZCbbBSby1m-k",
  authDomain: "math-ix-xii.firebaseapp.com",
  projectId: "math-ix-xii",
  storageBucket: "math-ix-xii.firebasestorage.app",
  messagingSenderId: "440389033922",
  appId: "1:440389033922:web:e57abf8e1895e90216005b",
  measurementId: "G-200EK9RVC4"
};

// Initialize Firebase with error handling
try {
  firebase.initializeApp(firebaseConfig);

  // Initialize Authentication and Firestore
  const auth = firebase.auth();
  const db = firebase.firestore();

  // Export for use in other files
  window.auth = auth;
  window.db = db;

  console.log("Firebase initialized with Authentication and Firestore");
} catch (error) {
  console.warn("Firebase initialization failed, using offline mode:", error);

  // Create mock auth and db objects for offline functionality
  window.auth = {
    createUserWithEmailAndPassword: () =>
      Promise.resolve({
        user: { uid: "demo-user", email: "demo@example.com" },
      }),
    signInWithEmailAndPassword: () =>
      Promise.resolve({
        user: { uid: "demo-user", email: "demo@example.com" },
      }),
    signOut: () => Promise.resolve(),
    onAuthStateChanged: (callback) => {
      setTimeout(() => callback(null), 100);
      return () => {};
    },
  };

  window.db = {
    collection: () => ({
      add: () => Promise.resolve({ id: "demo-doc-id" }),
      orderBy: () => ({
        orderBy: () => ({
          limit: () => ({
            get: () => Promise.resolve({ forEach: () => {} }),
          }),
        }),
      }),
      where: () => ({
        where: () => ({
          orderBy: () => ({
            orderBy: () => ({
              limit: () => ({
                get: () => Promise.resolve({ forEach: () => {} }),
              }),
            }),
          }),
        }),
      }),
    }),
  };

  // Add Firebase field value for offline mode
  window.firebase = {
    firestore: {
      FieldValue: {
        serverTimestamp: () => new Date(),
      },
    },
  };
}
