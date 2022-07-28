const discord = require('discord.js');
module.exports= {
    name: 'sugerir',
    adminRule: false,
    description: 'cria um pedido de sugestão',
    execute(client,message,args){

      let embed = new discord.MessageEmbed()
      .setAuthor(`${message.author.tag} sugeriu:`,message.author.displayAvatarURL({format: "png"}))
      .setDescription(args.join(' '))
      .setColor(`BLUE`)
      client.channels.cache.get("1001854812037595186").send({embeds: [embed]}).then(msg => {
      msg.react("⬆️");
      msg.react("⬇️");
  });

    }
}