module.exports.config = {
  name: "autoazan",
  version: "1.0.1",
  hasPermission: 0,
  credits: "SHIFAT",
  description: "Automatically sends Azan notifications (text only).",
  commandCategory: "religious",
  usages: "",
  cooldowns: 5
};

module.exports.onLoad = function () {
  const azanTimes = {
    "05:35 AM": "🕌 ফজরের আজান হয়েছে! সবাই নামাজের জন্য প্রস্তুত হোন।",
    "01:00 PM": "☀️ জোহরের আজান হয়েছে! নামাজ আদায় করুন।",
    "04:30 PM": "🌤️ আসরের আজান হয়েছে! নামাজ আদায় করুন।",
    "07:05 PM": "🌇 মাগরিবের আজান হয়েছে! দয়া করে নামাজ আদায় করুন।",
    "08:15 PM": "🌌 ইশার আজান হয়েছে! সবাই নামাজ আদায় করুন।"
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
      const message = azanTimes[currentTime];

      try {
        const allThreadID = global.data.allThreadID || [];

        for (const threadID of allThreadID) {
          global.api.sendMessage(
            { body: message },
            threadID
          );
        }

        console.log(`[✅] Azan message sent at ${currentTime}`);
      } catch (error) {
        console.error("[❌] Error sending Azan message:", error.message);
      }
    }

    // Repeat after 60 seconds
    setTimeout(checkAzanTime, 60 * 1000);
  }

  checkAzanTime();
};

module.exports.run = () => {};
