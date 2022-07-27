module.exports= {
    name: 'hello',
    adminRule: false,
    description: 'simples hello world message',
    execute(message,args){
        message.channel.send(`Hello world!`)
    }
}