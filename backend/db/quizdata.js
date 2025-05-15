const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the quiz schema
const QuizSchema = new Schema({
  scamType: { type: String, required: true },
  questions: [
    {
      question: String,
      options: [String],
      answer: String,
      explanation: String
    }
  ]
});

// Create the Quiz model
const Quiz = mongoose.model('Quiz', QuizSchema);

// Data for seeding
const quizData = [
  {
    scamType: 'Phishing Email',
    questions: [
      {
        question: 'What is a common sign of a phishing email?',
        options: [
          'A greeting using your full name',
          'A message from your friend',
          'An urgent request to click a suspicious link',
          'An email from your workplace'
        ],
        answer: 'An urgent request to click a suspicious link',
        explanation: 'Phishing emails often create urgency to trick you into clicking malicious links.'
      },
      {
        question: 'What should you do before clicking a link in an email?',
        options: [
          'Click it immediately to check',
          'Forward it to friends',
          'Hover over the link to verify the URL',
          'Reply asking for details'
        ],
        answer: 'Hover over the link to verify the URL',
        explanation: 'Hovering reveals the real destination URL and helps detect phishing.'
      },
      {
        question: 'What is a common phishing tactic used in emails?',
        options: [
          'Asking for login credentials from trusted sources',
          'Promising free rewards without any reason',
          'Providing a URL that looks similar to a legitimate website',
          'None of the above'
        ],
        answer: 'Providing a URL that looks similar to a legitimate website',
        explanation: 'Phishers often use domain names that look similar to trusted sites to deceive you.'
      },
      {
        question: 'How can you verify the legitimacy of an email asking for sensitive information?',
        options: [
          'Call the sender using the contact information in the email',
          'Check the email signature',
          'Ignore the email if it asks for your personal information',
          'Reply and provide your information if asked'
        ],
        answer: 'Ignore the email if it asks for your personal information',
        explanation: 'Legitimate organizations do not ask for personal information via email.'
      },
      {
        question: 'What should you do if you accidentally clicked on a phishing link?',
        options: [
          'Immediately share your personal details',
          'Contact your bank and change passwords',
          'Ignore it, nothing will happen',
          'Tell your friends so they don’t click too'
        ],
        answer: 'Contact your bank and change passwords',
        explanation: 'If you’ve clicked on a phishing link, it’s important to secure your accounts immediately.'
      }
    ]
  },
  {
    scamType: 'Fake Tech Support',
    questions: [
      {
        question: 'What is a red flag of a tech support scam?',
        options: [
          'You call a number listed on a company\'s official website',
          'You get an unsolicited call claiming your computer has a virus',
          'You visit a verified help forum',
          'You contact support from a purchased software'
        ],
        answer: 'You get an unsolicited call claiming your computer has a virus',
        explanation: 'Legitimate companies don’t call you without you reaching out first.'
      },
      {
        question: 'What should you do if someone asks for remote access to your device?',
        options: [
          'Give it immediately',
          'Install software they recommend',
          'Only allow if they prove they are your ISP',
          'Refuse and verify their identity through official channels'
        ],
        answer: 'Refuse and verify their identity through official channels',
        explanation: 'Never give remote access unless you’ve contacted the company directly.'
      },
      {
        question: 'What should you avoid doing when handling tech support requests?',
        options: [
          'Install third-party software from unknown sources',
          'Request a call back from the official support number',
          'Verify their identity before giving remote access',
          'Ask for a detailed invoice for repairs'
        ],
        answer: 'Install third-party software from unknown sources',
        explanation: 'Installing unverified software can give scammers access to your system.'
      },
      {
        question: 'How can you spot a fake tech support number?',
        options: [
          'It’s available on the company’s website',
          'It’s posted on social media',
          'It’s given in an unsolicited call or email',
          'It’s advertised by an official repair partner'
        ],
        answer: 'It’s given in an unsolicited call or email',
        explanation: 'Fake tech support scammers typically call or email with urgent threats.'
      },
      {
        question: 'Which of the following is true about legitimate tech support?',
        options: [
          'They call you out of the blue to fix your computer',
          'They always ask for payment upfront before solving any issue',
          'They ask you to install software to fix an issue without you requesting help',
          'They provide assistance only when you contact them directly'
        ],
        answer: 'They provide assistance only when you contact them directly',
        explanation: 'Legitimate tech support only reaches out to customers when they’ve initiated contact.'
      }
    ]
  },
  {
    scamType: 'Investment Scam',
    questions: [
      {
        question: 'Which of the following is a red flag in investment opportunities?',
        options: [
          'Regulatory registration',
          'High returns with no risk',
          'Financial advisor’s credentials',
          'Company’s public audit report'
        ],
        answer: 'High returns with no risk',
        explanation: 'No investment is risk-free. Guaranteed high returns are a red flag.'
      },
      {
        question: 'How can you verify a legitimate investment firm?',
        options: [
          'Check their social media pages',
          'See if friends have invested',
          'Verify with SEBI or regulatory authority',
          'Trust testimonials on their website'
        ],
        answer: 'Verify with SEBI or regulatory authority',
        explanation: 'Always verify with certified regulatory bodies before investing.'
      },
      {
        question: 'What is a common tactic used in investment scams?',
        options: [
          'Offering detailed reports on investment trends',
          'Providing guaranteed returns',
          'Showing historical data of reputable companies',
          'Offering a government-backed investment scheme'
        ],
        answer: 'Providing guaranteed returns',
        explanation: 'Scammers promise high returns with little risk to lure investors.'
      },
      {
        question: 'What should you do if you suspect an investment opportunity is a scam?',
        options: [
          'Invest a small amount and wait for results',
          'Report it to a financial regulatory body',
          'Tell your friends to invest too',
          'Ignore the warning signs and proceed with caution'
        ],
        answer: 'Report it to a financial regulatory body',
        explanation: 'Reporting suspicious schemes helps authorities take action against fraud.'
      },
      {
        question: 'What is the best way to research an investment opportunity?',
        options: [
          'Ask for a testimonial from the person offering it',
          'Look for external reviews and verify with trusted sources',
          'Trust your instincts and invest quickly',
          'Invest in every opportunity that seems profitable'
        ],
        answer: 'Look for external reviews and verify with trusted sources',
        explanation: 'Doing thorough research from multiple trusted sources can prevent investment fraud.'
      }
    ]
  },
  {
    scamType: 'Online Scam',
    questions: [
      {
        question: 'What is a safe way to shop online?',
        options: [
          'Click ads offering huge discounts',
          'Use secure websites with HTTPS',
          'Pay via bank transfer to unknown sellers',
          'Buy from pop-up links'
        ],
        answer: 'Use secure websites with HTTPS',
        explanation: 'HTTPS and padlock icons indicate a secure and trustworthy connection.'
      },
      {
        question: 'Which of the following is a common online scam tactic?',
        options: [
          'Two-factor authentication',
          'Product reviews',
          'Fake job or prize offers',
          'Encryption'
        ],
        answer: 'Fake job or prize offers',
        explanation: 'Scammers often use fake offers to lure victims into revealing information or paying money.'
      },
      {
        question: 'How can you avoid being scammed while shopping online?',
        options: [
          'Always pay through unsecured platforms',
          'Ignore the return policy details',
          'Use trusted websites with proper security certificates',
          'Don’t check the website’s reputation'
        ],
        answer: 'Use trusted websites with proper security certificates',
        explanation: 'Secure sites are less likely to engage in fraud and offer buyer protection.'
      },
      {
        question: 'What should you do if you come across a suspicious online offer?',
        options: [
          'Immediately claim the offer',
          'Investigate and verify the legitimacy of the website',
          'Share it with friends to spread the word',
          'Give personal information to claim rewards'
        ],
        answer: 'Investigate and verify the legitimacy of the website',
        explanation: 'Research and confirm that the website is genuine before providing any personal information.'
      },
      {
        question: 'What’s the most secure method for making online purchases?',
        options: [
          'Paying with credit cards that offer fraud protection',
          'Using debit cards that are linked to your bank account',
          'Sending money via bank transfer',
          'Using public Wi-Fi to complete purchases'
        ],
        answer: 'Paying with credit cards that offer fraud protection',
        explanation: 'Credit cards often provide fraud protection, unlike other payment methods.'
      }
    ]
  }
];

// Insert quiz data into the database
mongoose.connect('mongodb://localhost:27017/scam-alert', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    return Quiz.insertMany(quizData);
  })
  .then(() => {
    console.log('Quiz data seeded successfully');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error seeding quiz data:', err);
    mongoose.disconnect();
  });
