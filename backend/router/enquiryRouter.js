
import express from 'express';
import db from '../firebaseAdmin.js';
import { sendSlackMessage, formatEnquiryMessage, formatContactMessage } from '../utils/slackNotifier.js';

const router = express.Router();

// 1. ROUTE FOR ENQUIRY COLLECTION
router.post('/submit-enquiry', async (req, res) => {
  try {
    const data = req.body;
    
    // Save to Firebase
    const docRef = await db.collection('enquiries').add({
      ...data,
      source: 'EnquiryForm',
      createdAt: new Date().toISOString()
    });

    // Send Slack notification
    const slackMessage = formatEnquiryMessage(data);
    await sendSlackMessage(slackMessage);

    res.status(201).json({ success: true, message: "Enquiry saved!", id: docRef.id });
  } catch (error) {
    console.error('Error in submit-enquiry:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// 2. ROUTE FOR CONTACT COLLECTION
router.post('/submit-contact', async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;
    
    const contactData = {
      fullName: `${firstName} ${lastName}`,
      email,
      message,
      source: 'ContactPage',
      createdAt: new Date().toISOString()
    };

    // Save to Firebase
    const docRef = await db.collection('contacts').add(contactData);

    // Send Slack notification
    const slackMessage = formatContactMessage(contactData);
    await sendSlackMessage(slackMessage);

    res.status(201).json({ success: true, message: "Contact saved!", id: docRef.id });
  } catch (error) {
    console.error('Error in submit-contact:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;