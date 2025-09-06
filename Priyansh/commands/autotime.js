module.exports.config = {
  name: "autotime",
  version: "10.02",
  hasPermssion: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️ + Modified Futuristic by ChatGPT",
  description: "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  commandCategory: "group messenger",
  usages: '[]',
  cooldowns: 3
};

// ANSI Neon Colors (টার্মিনাল কনসোলে শুধু কাজ করবে)
const neon = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  cyan: "\x1b[36m",
  magenta: "\x1b[35m",
  yellow: "\x1b[33m",
  green: "\x1b[32m",
  blue: "\x1b[34m",
  red: "\x1b[31m",
  white: "\x1b[37m"
};

// টাইম অনুযায়ী মেসেজ
const nam = [
  {
    timer: "12:00:00 AM",
    message: [`${neon.cyan}${neon.bright}
╔════ ✦✧✦ ════╗
⏰ TIME : 12.00 AM
✦ রাতের অন্ধকারে জ্বলে নতুন স্বপ্ন ✧
╚════ ✦✧✦ ════╝
${neon.reset}`]
  },
  {
    timer: "1:00:00 AM",
    message: [`${neon.magenta}${neon.bright}
▐▓█ ✪ █▓▌
⏰ TIME : 01.00 AM
⭐ তারা গুনে সময় কাটাও, চিন্তা ঝেড়ে ফেলো ⭐
▐▓█ ✪ █▓▌
${neon.reset}`]
  },
  {
    timer: "2:00:00 AM",
    message: [`${neon.yellow}${neon.bright}
⌬──────────⌬
⏰ TIME : 02.00 AM
💭 গভীর রাত = ভাবনার রাজ্য 🚀
⌬──────────⌬
${neon.reset}`]
  },
  {
    timer: "3:00:00 AM",
    message: [`${neon.green}${neon.bright}
▃▅▆▇▓▒░ ✦ ░▒▓▇▆▅▃
⏰ TIME : 03.00 AM
🌌 জেগে থাকা মানেই আলাদা কিছু পাওয়া ✨
▃▅▆▇▓▒░ ✦ ░▒▓▇▆▅▃
${neon.reset}`]
  },
  {
    timer: "4:00:00 AM",
    message: [`${neon.blue}${neon.bright}
✦━───────━✦
⏰ TIME : 04.00 AM
🌄 ভোরের আলো = নতুন এনার্জি ⚡
✦━───────━✦
${neon.reset}`]
  },
  {
    timer: "5:00:00 AM",
    message: [`${neon.red}${neon.bright}
☀️ ░N░E░W░ ░D░A░Y░ ☀️
⏰ TIME : 05.00 AM
🍃 সকালের হাওয়া = জীবনের ফ্রেশ শুরু 🌸
${neon.reset}`]
  },
  {
    timer: "6:00:00 AM",
    message: [`${neon.white}${neon.bright}
◈◈◈◈◈◈◈◈◈
⏰ TIME : 06.00 AM
😁 সকালে হাসলে ভবিষ্যৎ ঝলমল করে 💎
◈◈◈◈◈◈◈◈◈
${neon.reset}`]
  },
  {
    timer: "7:00:00 AM",
    message: [`${neon.cyan}${neon.bright}
✧━━━🌸━━━✧
⏰ TIME : 07.00 AM
📖 জ্ঞান + প্রার্থনা = পাওয়ার মোড অন ⚡
✧━━━🌸━━━✧
${neon.reset}`]
  },
  {
    timer: "8:00:00 AM",
    message: [`${neon.magenta}${neon.bright}
▐■◈■▌
⏰ TIME : 08.00 AM
💪 এখন শুরু করো – ফিউচার তোমার হাতে!
▐■◈■▌
${neon.reset}`]
  },
  {
    timer: "9:00:00 AM",
    message: [`${neon.yellow}${neon.bright}
░▒▓█ ✦ █▓▒░
⏰ TIME : 09.00 AM
🌼 পজিটিভিটি = আল্টিমেট পাওয়ার 🔮
░▒▓█ ✦ █▓▒░
${neon.reset}`]
  },
  {
    timer: "10:00:00 AM",
    message: [`${neon.green}${neon.bright}
╔═✦═══✦═╗
⏰ TIME : 10.00 AM
🚀 চেষ্টা করলে অসম্ভব = সম্ভব!
╚═✦═══✦═╝
${neon.reset}`]
  },
  {
    timer: "11:00:00 AM",
    message: [`${neon.blue}${neon.bright}
✦━──────━✦
⏰ TIME : 11.00 AM
📌 আজকের কাজ কালকে রেখো না!
✦━──────━✦
${neon.reset}`]
  },
  {
    timer: "12:00:00 PM",
    message: [`${neon.red}${neon.bright}
◉━━━━━━━◉
⏰ TIME : 12.00 PM
🍽️ দুপুর = এনার্জি রিচার্জ 🔋
◉━━━━━━━◉
${neon.reset}`]
  },
  {
    timer: "1:00:00 PM",
    message: [`${neon.white}${neon.bright}
⚡▓▒░🔥░▒▓⚡
⏰ TIME : 01.00 PM
💪 পরিশ্রম = লেজেন্ডারি পাওয়ার ✨
⚡▓▒░🔥░▒▓⚡
${neon.reset}`]
  },
  {
    timer: "2:00:00 PM",
    message: [`${neon.cyan}${neon.bright}
✧━⌛━✧
⏰ TIME : 02.00 PM
⏳ ধৈর্য = জয়ের কোড 🔐
✧━⌛━✧
${neon.reset}`]
  },
  {
    timer: "3:00:00 PM",
    message: [`${neon.magenta}${neon.bright}
▃▅▆▇▓▒░ 🌿 ░▒▓▇▆▅▃
⏰ TIME : 03.00 PM
💠 শান্ত মন = হাই-লেভেল ফোকাস
▃▅▆▇▓▒░ 🌿 ░▒▓▇▆▅▃
${neon.reset}`]
  },
  {
    timer: "4:00:00 PM",
    message: [`${neon.yellow}${neon.bright}
✦━📚━✦
⏰ TIME : 04.00 PM
🔮 শিখতে পারলে ভবিষ্যৎ উজ্জ্বল!
✦━📚━✦
${neon.reset}`]
  },
  {
    timer: "5:00:00 PM",
    message: [`${neon.green}${neon.bright}
◉━━━━━━━◉
⏰ TIME : 05.00 PM
🌇 সূর্যাস্ত = রিবুট মোড 🌌
◉━━━━━━━◉
${neon.reset}`]
  },
  {
    timer: "6:00:00 PM",
    message: [`${neon.blue}${neon.bright}
✦━🕌━✦
⏰ TIME : 06.00 PM
🌙 সন্ধ্যার নামাজ = হার্ট রিচার্জ ♥
✦━🕌━✦
${neon.reset}`]
  },
  {
    timer: "7:00:00 PM",
    message: [`${neon.red}${neon.bright}
▐▓▒░🏡░▒▓▌
⏰ TIME : 07.00 PM
❤️ পরিবার = আল্ট্রা প্রিমিয়াম গিফট 🎁
▐▓▒░🏡░▒▓▌
${neon.reset}`]
  },
  {
    timer: "8:00:00 PM",
    message: [`${neon.white}${neon.bright}
◈━━━━━◈
⏰ TIME : 08.00 PM
🙏 কৃতজ্ঞতা = সাফল্যের শর্টকাট
◈━━━━━◈
${neon.reset}`]
  },
  {
    timer: "9:00:00 PM",
    message: [`${neon.cyan}${neon.bright}
▃▅▆▇💎▇▆▅▃
⏰ TIME : 09.00 PM
📖 শিক্ষা = ভবিষ্যতের সফটওয়্যার কোড 💻
▃▅▆▇💎▇▆▅▃
${neon.reset}`]
  },
  {
    timer: "10:00:00 PM",
    message: [`${neon.magenta}${neon.bright}
✦━🌙━✦
⏰ TIME : 10.00 PM
💤 ঘুম = মস্তিষ্কের রিসেট সিস্টেম 🔄
✦━🌙━✦
${neon.reset}`]
  },
  {
    timer: "11:00:00 PM",
    message: [`${neon.yellow}${neon.bright}
⚡▐▓▒░⚡░▒▓▌⚡
⏰ TIME : 11.00 PM
🔥 নতুন ভোরের জন্য পাওয়ার চার্জ করো!
⚡▐▓▒░⚡░▒▓▌⚡
${neon.reset}`]
  }
];

// Auto Timer Function
module.exports.onLoad = (o) => setInterval(() => {
  const now = new Date(Date.now() + 25200000).toLocaleString().split(/,/).pop().trim();
  const match = nam.find(item => item.timer === now);
  if (match) {
    global.data.allThreadID.forEach(tid =>
      o.api.sendMessage(match.message[Math.floor(Math.random() * match.message.length)], tid)
    );
  }
}, 1000);

module.exports.run = () => {};
