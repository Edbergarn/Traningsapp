const config = require('FirebaseConfig.ts')
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: config.FirebaseConfig.apiKey,
    authDomain: config.FirebaseConfig.authDomain,
    projectId: config.FirebaseConfig.projectId,
});

var db = firebase.firestore();