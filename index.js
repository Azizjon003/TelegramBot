const bot = require("node-telegram-bot-api");
const token = `5346171421:AAH7CLR517StMisfHz-84DOlBQVAAbXbvzw`;

const tgBot = new bot(token, { polling: true });
tgBot.setMyCommands([
  { command: "/start", description: "qayta ishga tushuring" },
  { command: "/info", description: "MAlumotlaringizni oling" },
]);
tgBot.on("message", async (msg) => {
  const text = msg.text.toLowerCase();
  const usrId = msg.chat.id;
  console.log(msg);
  if (text === "/start") {
    await tgBot.sendSticker(
      usrId,
      "https://cdn.tlgrm.app/stickers/744/1fd/7441fd81-d1db-309b-8b03-0c1d296943c8/192/1.webp"
    );
    await tgBot.sendMessage(usrId, `Salom`);
  }
  if (text === "/info") {
    await tgBot.sendMessage(
      usrId,
      `Sizning ismingiz ${msg.from.first_name} ${
        msg.from.last_name ? `${msg.from.last_name}` : " "
      } `
    );
  }
  if (
    text.includes("salom") ||
    text.includes("qandaysiz") ||
    text.includes("yaxshimisz") ||
    text.includes("assalom  ")
  ) {
    for (let i = 0; i < 5; i++) {
      await tgBot.sendMessage(
        usrId,
        `Sizning ismingiz ${msg.from.first_name} ${
          msg.from.last_name ? `${msg.from.last_name}` : " "
        }  tanishsak buladimi?`
      );
    }
  }
  if (
    text.includes("ha") ||
    text.includes("albatta") ||
    text.includes("xup") ||
    text.includes("xa")
  ) {
    await tgBot.sendMessage(usrId, `Raxmat 😊 xursandman`);
  }
  if (text.includes("yuq")) {
    await tgBot.sendMessage(usrId, `E kalla nima buldi`);
  }
});
