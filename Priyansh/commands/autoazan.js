const axios = require('axios');

module.exports.config = {
  name: "autoazan",
  version: "1.0.0",
  hasPermission: 0,
  credits: "SHIFAT",
  description: "Automatically sends Azan notifications with audio.",
  commandCategory: "religious",
  usages: "",
  cooldowns: 5
};

module.exports.onLoad = function () {
  const azanTimes = {
    "05:35 AM": {
      message: "🕌 ফজরের আজান হয়েছে! সবাই নামাজের জন্য প্রস্তুত হোন।",
      audioUrl: "https://drive.google.com/uc?export=download&id=YOUR_FAJR_AUDIO_ID"
    },
    "01:00 PM": {
      message: "☀️ জোহরের আজান হয়েছে! নামাজ আদায় করুন।",
      audioUrl: "https://drive.google.com/uc?export=download&id=YOUR_DHUHR_AUDIO_ID"
    },
    "04:30 PM": {
      message: "🌤️ আসরের আজান হয়েছে! নামাজ আদায় করুন।",
      audioUrl: "https://drive.google.com/uc?export=download&id=YOUR_ASR_AUDIO_ID"
    },
    "07:05 PM": {
      message: "🌇 মাগরিবের আজান হয়েছে! দয়া করে নামাজ আদায় করুন।",
      audioUrl: "https://drive.google.com/uc?export=download&id=YOUR_MAGHRIB_AUDIO_ID"
    },
    "08:15 PM": {
      message: "🌌 ইশার আজান হয়েছে! সবাই নামাজ আদায় করুন।",
      audioUrl: "https://drive.google.com/uc?export=download&id=YOUR_ISHA_AUDIO_ID"
    }
  };

  async function checkAzanTime() {
    const now = new Date();
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Dhaka"
    };

    const currentTime = now.toLocaleTimeString("en-US", options);

    if (azanTimes[currentTime]) {
      const { message, audioUrl } = azanTimes[currentTime];

      try {
        const response = await axios.get(audioUrl, { responseType: "stream" });

        const allThreadID = global.data.allThreadID || [];

        for (const threadID of allThreadID) {
          global.api.sendMessage(
            {
              body: message,
              attachment: response.data
            },
            threadID
          );
        }

        console.log(`[✅] Azan sent at ${currentTime}`);
      } catch (error) {
        console.error("[❌] Error sending Azan:", error.message);
      }
    }

    // Repeat after 60 seconds
    setTimeout(checkAzanTime, 60 * 1000);
  }

  checkAzanTime();
};

module.exports.run = () => {};
