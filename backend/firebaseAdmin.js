import admin from 'firebase-admin';
import { readFile } from 'fs/promises';

// To import JSON in ES Modules safely:
const serviceAccount = JSON.parse(
  await readFile(new URL('./serviceAccountKey.json', import.meta.url))
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();
export default db;