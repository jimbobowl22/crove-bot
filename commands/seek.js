
exports.run = (client, message, args) => {
  if (!message.member.voice.channel) return
  if (!servers[message.guild.id]) return
  if (!servers[message.guild.id].player) return
  const server = servers[message.guild.id]
  let time = args[0].split(':')
  let ms = (+time[time.length - 1] + (+time[time.length - 2] * 60) + (time.length === 3 ? +time[0] * 3600 : 0)) * 1000
  console.log(ms)
  server.player.seek(ms)
}

exports.help = {
  name: '`seek`',
  description: 'Seek to video time',
  usage: 'seek `time`'
}