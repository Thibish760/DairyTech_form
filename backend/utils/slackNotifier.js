// Slack notification utility for enquiry and contact form submissions

const sendSlackMessage = async (message) => {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn('⚠️  SLACK_WEBHOOK_URL not set in environment variables. Slack notification skipped.');
    return false;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error(`Slack API returned status ${response.status}`);
    }

    console.log('✅ Slack notification sent successfully');
    return true;
  } catch (error) {
    console.error('❌ Error sending Slack notification:', error.message);
    return false;
  }
};

// Format enquiry message for Slack
const formatEnquiryMessage = (enquiry) => {
  const { name, phone1, phone2, location, state, city, pincode, message, selectedProduct } = enquiry;

  return {
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '📋 New Enquiry Received',
          emoji: true,
        },
      },
      {
        type: 'divider',
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Name:*\n${name}`,
          },
          {
            type: 'mrkdwn',
            text: `*Phone 1:*\n${phone1}`,
          },
          {
            type: 'mrkdwn',
            text: `*Phone 2:*\n${phone2 || 'N/A'}`,
          },
          {
            type: 'mrkdwn',
            text: `*State:*\n${state}`,
          },
          {
            type: 'mrkdwn',
            text: `*City:*\n${city}`,
          },
          {
            type: 'mrkdwn',
            text: `*Pincode:*\n${pincode}`,
          },
        ],
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Location:*\n${location}`,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Message:*\n${message}`,
        },
      },
      ...(selectedProduct
        ? [
            {
              type: 'divider',
            },
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*Selected Product/Service:*\n*Name:* ${selectedProduct.name}\n*Category:* ${selectedProduct.category}\n*Price:* ${selectedProduct.price}`,
              },
            },
          ]
        : []),
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `_Received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}_`,
          },
        ],
      },
    ],
  };
};

// Format contact message for Slack
const formatContactMessage = (contact) => {
  const { fullName, email, message } = contact;

  return {
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '📧 New Contact Form Submission',
          emoji: true,
        },
      },
      {
        type: 'divider',
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Name:*\n${fullName}`,
          },
          {
            type: 'mrkdwn',
            text: `*Email:*\n${email}`,
          },
        ],
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Message:*\n${message}`,
        },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `_Received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}_`,
          },
        ],
      },
    ],
  };
};

export { sendSlackMessage, formatEnquiryMessage, formatContactMessage };
