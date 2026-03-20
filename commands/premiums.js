export default {
  name: "premium",
  description: "premium command",
  async execute(sock, msg) {
    await sock.sendMessage(msg.key.remoteJid, {
      text: "Premium command active ✅"
    })
  }
}