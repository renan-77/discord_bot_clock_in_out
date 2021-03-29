const Discord = require('discord.js')
const config = require('./config.json')
const alarm =  require('alarm')
const fetch = require('node-fetch')

// Criando objeto de discord (client method)
const client = new Discord.Client();

// Declarando prefixo de comandos 
const prefix = '$'

// Declarando ID's de usuarios manualmente.
renan_id = '237070442043539456'
yan_id = '278249562127335424'
lucas_id = '331910249835397130'

//////////////////////////TEST//////////////////////////
// Criando um ponto de start para testes com alarm
const start = Date.now()

// Usando configuracao de arquivo 'config' (token do bot)
client.login(config.BOT_TOKEN)

// Client on como um listener para mensagens
client.on('message', function(message) {
    //Check se mensagem foi enviada por bot
    if (message.author.bot) return
    
    //Check se a mensagem nao comeca com o prefixo declarado
    if (!message.content.startsWith(prefix)) return

    /**
     * Limpando mensagem para pegar apenas comando
     */

    // Removendo o prefixo da mensagem
    const commandBody = message.content.slice(prefix.length)
    
    // Pegando argumentos passados para comando e adicionando a array
    const args = commandBody.split(' ')
    
    // Tirando primeiro elemento da array, botando em minusculo e retornando como "command" 
    const command = args.shift().toLowerCase()

    if(command == 'test'){
        // notifyClock(lucas_id)
        message.author.send(`Your user: ${message.author}`)
    }
});


//////////////////////////TEST//////////////////////////
// Criando tempo de execucao 2 segundos apos o tempo de inicio
timeForExec = new Date(+start + 2000)
console.log(timeForExec)

// alarm(timeForExec, function () {
//     notifyClock(yan_id)
// });


alarm.recurring(3000, function() {
    notifyClock(yan_id)
})


/**
 * Funcao para enviar DM's para notificar os usuarios para bater ponto.
 * @param {*} user_id
 */
function notifyClock(user_id){
    try{
        client.users.fetch(user_id)
        .then((user) => {
            console.log(user)
            user.send('Vem fazer o software krai')
            return user
        })
    }catch(error){
        console.error(error);
    }
}