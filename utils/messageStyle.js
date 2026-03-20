import fs from "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(text) {
  return {
    text: stylizedChar(text),
    contextInfo: {
      externalAdReply: {
        title: "𝐊𝐈𝐍𝐆 𝐂𝐄𝐋𝐄𝐒𝐓𝐈𝐀𝐋 𝐁𝐎𝐓",
        body: "𓆩 𝐊𝐈𝐍𝐆 𝐂𝐄𝐋𝐄𝐒𝐓𝐈𝐀𝐋𓆪",
        thumbnail: fs.readFileSync("./database/DigiX.jpg"),
        sourceUrl: "https://whatsapp.com",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }
}