import * as admin from 'firebase-admin'

// Based on https://firebase.google.com/docs/database/admin/start#node.js_1
const serviceAccount = require('../firebase-service-account.json')

// Initialize the app with a service account, granting admin privileges
// if (!admin.apps.length) {
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // The database URL depends on the location of the database
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
});

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//       privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
//     }),
//     databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//   })
// }

export default admin;
