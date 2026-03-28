const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ZcUX1ajA#nlil4nLlEaMQdkJG1JaEIG1AqZZVbZRH7WeC_O7KHVQ",
ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/gaveshvimanshana101-sket/VIMA-MD/refs/heads/main/Image/file_00000000d22c71faade3c1e62f1313ae.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 VIMA-MD Is Alive Now😍*",
BOT_OWNER: '94789706579',  // Replace with the owner's phone number



};
