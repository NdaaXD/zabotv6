let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • 6288220118685
╰────

╭─「 Donasi • Non Pulsa 」
│ • Note:Kalo Mau Tambahin Bot Ke Group Bilang Ke Owner ya + kasih link group!!
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
