const Main = require('../index.js');
const version = require('../package.json').version;

module.exports = {
  name: 'replyAjuda',
  description:
    'Esse evento respondera toda mensagem que conter a palavra ajuda',
  execute(client, message) {
  let palavrasAjuda = [
    "ajuda",
    "duvida",
    "help",
    "ajudinha",
    "duvidas",
    "ajudar"
  ]
  for(var i = 0; i < palavrasAjuda.length; i++) {
    if(message.content.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(palavrasAjuda[i])){
      if(message.author.id != client.user.id){
         let canaisAjuda =[
           "1001874493347733524",
           "1001877118382252192",
           "1001877331801026693",
           "1001877369394565170",
           "1001877399950073947",
           "1001877415091511336"
         ]
         
         if(!canaisAjuda.includes(message.channel.id)){
         message.reply("Hey! está precisando de ajuda? está com duvidas? bom a gente tem um canal especifico para isso de uma olhada!")
         }else{
          
         }
         }
       }
    
  }


  },
};
