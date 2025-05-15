// seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const ScamType = require('./models/ScamType');
const PreventionTip = require('./models/PreventionTip');
const Quiz = require('./models/Quiz');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/scam-alert';

const scamTypes = [
  'Phishing',
  'Lottery Scam',
  'Job Scam',
  'Tech Support Scam',
  'Investment Scam',
  'Online Shopping Scam'
];

const preventionTips = [
  // Phishing
  { scamType: 'Phishing', content: 'Verify the sender email before clicking on any links.' },
  { scamType: 'Phishing', content: 'Look for HTTPS in URLs before entering credentials.' },
  { scamType: 'Phishing', content: 'Avoid clicking suspicious links in unexpected emails.' },
  { scamType: 'Phishing', content: 'Enable multi-factor authentication where possible.' },
  
  // Lottery
  { scamType: 'Lottery Scam', content: 'Real lotteries don’t ask for payment to claim prizes.' },
  { scamType: 'Lottery Scam', content: 'Ignore emails claiming you won a contest you didn’t enter.' },
  { scamType: 'Lottery Scam', content: 'Be skeptical of urgent prize claims requiring personal info.' },
  { scamType: 'Lottery Scam', content: 'Verify lottery claims with official sources.' },

  // Job
  { scamType: 'Job Scam', content: 'Research companies before applying or responding.' },
  { scamType: 'Job Scam', content: 'Beware of job offers that ask for upfront payment.' },
  { scamType: 'Job Scam', content: 'Never share bank or ID info without verification.' },
  { scamType: 'Job Scam', content: 'Avoid interviews on messaging apps with no verification.' },

  // Tech Support
  { scamType: 'Tech Support Scam', content: 'Don’t trust unsolicited pop-ups asking to call support.' },
  { scamType: 'Tech Support Scam', content: 'Never give remote access to unknown persons.' },
  { scamType: 'Tech Support Scam', content: 'Official support will never ask for payment in gift cards.' },
  { scamType: 'Tech Support Scam', content: 'Keep antivirus software updated to prevent intrusions.' },

  // Investment
  { scamType: 'Investment Scam', content: 'Research any investment opportunity independently.' },
  { scamType: 'Investment Scam', content: 'Be wary of “guaranteed returns” or urgent timelines.' },
  { scamType: 'Investment Scam', content: 'Consult a licensed financial advisor before investing.' },
  { scamType: 'Investment Scam', content: 'Check credentials of investment firms via official sources.' },

  // Online Shopping
  { scamType: 'Online Shopping Scam', content: 'Shop only on trusted, well-reviewed sites.' },
  { scamType: 'Online Shopping Scam', content: 'Check for HTTPS and verified payment gateways.' },
  { scamType: 'Online Shopping Scam', content: 'Avoid deals that sound too good to be true.' },
  { scamType: 'Online Shopping Scam', content: 'Use credit cards or secure payment options for safety.' },
];

const quizzes = [
  // Phishing
  {
    scamType: 'Phishing',
    question: 'What’s a common sign of a phishing email?',
    options: ['Spelling mistakes', 'Clear sender address', 'Secure URL', 'Official domain'],
    correctAnswer: 'Spelling mistakes'
  },
  {
    scamType: 'Phishing',
    question: 'What should you do before clicking a link in an email?',
    options: ['Click immediately', 'Call the sender', 'Verify the link', 'Forward to friends'],
    correctAnswer: 'Verify the link'
  },
  // Lottery
  {
    scamType: 'Lottery Scam',
    question: 'What proves a lottery is fake?',
    options: ['They ask for money to claim', 'You recognize the logo', 'It’s online only', 'No name given'],
    correctAnswer: 'They ask for money to claim'
  },
  {
    scamType: 'Lottery Scam',
    question: 'How do real lotteries contact winners?',
    options: ['With requests for bank info', 'With surprise calls', 'Through official communication', 'They don’t contact'],
    correctAnswer: 'Through official communication'
  },
  // Job
  {
    scamType: 'Job Scam',
    question: 'What’s a red flag in job offers?',
    options: ['Salary listed', 'Upfront payment requested', 'Company logo shown', 'Position title given'],
    correctAnswer: 'Upfront payment requested'
  },
  {
    scamType: 'Job Scam',
    question: 'What’s the safest platform to apply for jobs?',
    options: ['Random WhatsApp', 'Unverified emails', 'Official websites', 'Facebook groups'],
    correctAnswer: 'Official websites'
  },
  // Tech Support
  {
    scamType: 'Tech Support Scam',
    question: 'What should you avoid during a tech support scam?',
    options: ['Remote access', 'Reading error code', 'Restarting PC', 'Running antivirus'],
    correctAnswer: 'Remote access'
  },
  {
    scamType: 'Tech Support Scam',
    question: 'What’s a secure support contact method?',
    options: ['Unknown pop-up', 'Phone number from ad', 'Official website support page', 'Random call'],
    correctAnswer: 'Official website support page'
  },
  // Investment
  {
    scamType: 'Investment Scam',
    question: 'What is a warning sign in investments?',
    options: ['Low risk', 'Guaranteed high returns', 'Professional site', 'Advisor call'],
    correctAnswer: 'Guaranteed high returns'
  },
  {
    scamType: 'Investment Scam',
    question: 'Who should verify investment schemes?',
    options: ['Friends', 'Internet forums', 'Financial advisor', 'Colleague'],
    correctAnswer: 'Financial advisor'
  },
  // Online Shopping
  {
    scamType: 'Online Shopping Scam',
    question: 'What site is best to shop from?',
    options: ['Pop-up ad site', 'Unverified social seller', 'Trusted e-commerce platform', 'Unknown app'],
    correctAnswer: 'Trusted e-commerce platform'
  },
  {
    scamType: 'Online Shopping Scam',
    question: 'How can you verify a shopping site?',
    options: ['Check for HTTPS & reviews', 'Look at price', 'Trust your gut', 'Ask friends'],
    correctAnswer: 'Check for HTTPS & reviews'
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    await ScamType.deleteMany();
    await PreventionTip.deleteMany();
    await Quiz.deleteMany();

    const scamTypeDocs = await ScamType.insertMany(scamTypes.map(name => ({ name })));
    const typeIdMap = Object.fromEntries(scamTypeDocs.map(doc => [doc.name, doc._id]));

    const tipsWithIds = preventionTips.map(tip => ({ ...tip, scamType: typeIdMap[tip.scamType] }));
    await PreventionTip.insertMany(tipsWithIds);

    const quizWithIds = quizzes.map(q => ({ ...q, scamType: typeIdMap[q.scamType] }));
    await Quiz.insertMany(quizWithIds);

    console.log('✅ Database seeded with scam types, tips, and quizzes!');
    mongoose.disconnect();
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
}

seedDatabase();
