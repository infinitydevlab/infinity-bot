module.exports = {
  name: 'say',
  description: 'Envia uma mensagem pelo bot contendo os argumentos do comando',
  execute(message, args) {
    message.delete();
    if (!args.join(' '))
      return message.channel.send(
        `${message.author}, verifique a forma de mandar o comando. Use: say <message>`
      );
    message.channel.send(args.join(' '));
  },
};
