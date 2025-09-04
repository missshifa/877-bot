const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "jamai",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By Arun Kumar",
  description: "jamai",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);
  var tl = ["Shifat kothar jamai 🌚","shifat er Sathe kothar biye hoise Amader 2 ta baccha o ache Cheler nam ariyan efan Meyer nam sabiha akter ariya 💝🙈"];
  var rand = tl[Math.floor(Math.random() * tl.length)
  
   mess = "{name}"
  if (event.body.indexOf("shifat jamai","shifat i love u","@S H I F A T","jamai","zamai") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `<(｀^´)>${name},  \n\n✿✦\n ${rand} ✦✿\n\n❤️sʜɪғᴀᴛ✿ `
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
