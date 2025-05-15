// updatePreventionTips.js
const mongoose = require("mongoose");
const PreventionTip = require("../models/PreventionTip");
const ScamType = require("../models/ScamType");

const tipsData = {
    "Phishing Email": [
        "Always look for signs of urgency or threats in the email (e.g., 'Act now or your account will be suspended').",
        "Avoid opening attachments from unknown or suspicious senders.",
        "Hover over links to verify the destination URL before clicking.",
        "Be cautious with emails requesting personal or financial information.",
        "Report suspicious emails to your email provider or IT department.",
        "Check for spelling and grammatical errors in the email.",
        "Verify the email's sender address before trusting the message.",
        "Never provide personal details over email, especially if unsolicited."
    ],
    "Fake Tech Support": [
        "If you receive unsolicited calls claiming to be tech support, hang up and contact the company directly using a trusted phone number.",
        "Do not download software from unknown sources, even if the caller suggests it.",
        "Use strong passwords and enable two-factor authentication for added protection.",
        "If you’re unsure about a tech support call, research the company’s customer service procedures before proceeding.",
        "Never provide remote access to your computer unless you are absolutely sure of the caller’s identity.",
        "Verify the tech support number by checking the company's official website or documentation.",
        "Do not trust callers who claim they have detected issues with your computer remotely.",
        "Ask for details about the company’s policies before granting any access or paying any fees."
    ],
    "Investment Scam": [
        "Avoid unregistered investments and offers from companies with no track record.",
        "Research any investment opportunities thoroughly and seek advice from certified financial advisors.",
        "Be cautious of unsolicited investment advice from unknown sources.",
        "Beware of promises of guaranteed high returns with little or no risk.",
        "Check the credentials of investment firms with relevant regulatory authorities.",
        "Never provide personal or financial information to unknown or unverified entities.",
        "Diversify your investments and be cautious about investing all your funds in a single opportunity.",
        "Be wary of high-pressure sales tactics, such as claiming limited-time offers or forcing you to act quickly."
    ],
    "Online Scam": [
        "Always verify the legitimacy of websites before making online purchases.",
        "Use secure payment methods, like credit cards, which offer fraud protection.",
        "Look for website security indicators, such as 'HTTPS' and a padlock symbol in the browser address bar.",
        "Avoid sharing sensitive personal information on public or unsecured Wi-Fi networks.",
        "Be cautious when interacting with unfamiliar online ads or pop-ups, especially if they promise large rewards or prizes.",
        "Avoid clicking on unsolicited emails or social media messages that direct you to unfamiliar websites.",
        "Read product reviews and verify the legitimacy of the website or seller before making purchases.",
        "Look for clear and easy-to-find contact information on websites before providing payment details."
    ],

    "Lottery Scam": [
        "Be skeptical if you are told you've won a lottery or prize you didn’t enter.",
        "Verify the legitimacy of the lottery with the official organization or government agency.",
        "Never pay upfront fees to claim a prize.",
        "Look out for requests to share personal information or financial details.",
        "Be wary of messages claiming you won a foreign lottery.",
        "Check for unusual or generic greetings like 'Dear winner'.",
        "Avoid clicking links or downloading attachments from unsolicited messages.",
        "Verify the lottery’s legitimacy through official channels before taking any action."
    ]
};

async function updateTips() {
    await mongoose.connect("mongodb://localhost:27017/scam-alert");

    for (const [scamName, tips] of Object.entries(tipsData)) {
        const scamType = await ScamType.findOne({ name: scamName });

        if (!scamType) {
            console.warn(`Scam type "${scamName}" not found. Skipping...`);
            continue;
        }

        const result = await PreventionTip.findOneAndUpdate(
            { scamType: scamType._id },
            { tips },
            { new: true, upsert: true } // Creates document if it doesn't exist
        );

        console.log(`Updated tips for "${scamName}":`, result.tips.length, "tips");
    }

    await mongoose.disconnect();
    console.log("Done updating prevention tips.");
}

updateTips().catch(console.error);
