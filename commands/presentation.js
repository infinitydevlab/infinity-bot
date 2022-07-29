module.exports = {
    name: 'apresentar',
    adminRule: false,
    description: 'apresentação do usuário',
    execute(message){
		message.reply("Diga seu nome: ");

		const filter = (m) => {
			return m.author.id === message.author.id; // filtra para responder apenas o usuário que convocou o comando
		}

		const collector = message.channel.createMessageCollector({ //cria o message collector e seta as configurações
			filter, //filtro
			max: 1, //máximo de mensagens que o usuário deve responder
			time: 1000 * 5 // tempo limite que o bot vai esperar a resposta (1000 * segundos)
		});
				
		collector.on("end", collected => {
			if(collected.size === 0){
				message.reply("você não digitou seu nome"); //verifica se a mensagem contém caracteres
				return;
			}

			let text = `Olá `;

			collected.forEach((message) => {
				text += `${message.content} \n` //adiciona a resposta
			});
	
			message.reply(text); //responde o usuário
		});



	}
}