
import express from 'express';
import db from '../firebaseAdmin.js';

const router = express.Router();

// 1. ROUTE FOR ENQUIRY COLLECTION
router.post('/submit-enquiry', async (req, res) => {
  try {
    const data = req.body;
    // This line creates the 'enquiries' collection if it doesn't exist
    const docRef = await db.collection('enquiries').add({
      ...data,
      source: 'EnquiryForm',
      createdAt: new Date().toISOString()
    });
    res.status(201).json({ success: true, message: "Enquiry saved!", id: docRef.id });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 2. ROUTE FOR CONTACT COLLECTION
router.post('/submit-contact', async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;
    // This line creates the 'contacts' collection if it doesn't exist
    const docRef = await db.collection('contacts').add({
      fullName: `${firstName} ${lastName}`,
      email,
      message,
      source: 'ContactPage',
      createdAt: new Date().toISOString()
    });
    res.status(201).json({ success: true, message: "Contact saved!", id: docRef.id });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;