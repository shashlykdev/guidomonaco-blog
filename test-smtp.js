// Test SMTP connection for Guido Monaco B&B
// Run: node test-smtp.js

require('dotenv').config();
const nodemailer = require('nodemailer');

async function testSMTP() {
  console.log('Testing Outlook SMTP connection...\n');
  
  console.log('Configuration:');
  console.log(`Host: ${process.env.SMTP_HOST}`);
  console.log(`Port: ${process.env.SMTP_PORT}`);
  console.log(`User: ${process.env.SMTP_USER}`);
  console.log(`From: ${process.env.EMAIL_FROM}\n`);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', // false for port 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    // Verify connection
    console.log('Verifying connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful!\n');

    // Send test email
    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.SMTP_USER, // Send to yourself as test
      subject: 'Test Email - Guido Monaco B&B',
      text: 'This is a test email from your Guido Monaco B&B blog SMTP setup.',
      html: '<p>This is a test email from your <strong>Guido Monaco B&B</strong> blog SMTP setup.</p>',
    });

    console.log('✅ Test email sent!');
    console.log(`Message ID: ${info.messageId}`);
    console.log('\nCheck your inbox at:', process.env.SMTP_USER);
    
  } catch (error) {
    console.error('❌ SMTP Error:', error.message);
    
    if (error.code === 'EAUTH') {
      console.error('\nAuthentication failed. Check:');
      console.error('1. Email address is correct');
      console.error('2. Password is correct');
      console.error('3. If using 2FA, you need an App Password (not your regular password)');
      console.error('   Visit: https://account.microsoft.com/security');
    }
  }
}

testSMTP();
