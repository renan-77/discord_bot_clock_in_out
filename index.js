const Discord = require('discord.js')
const config = require('./config//config.json')
const alarm = require('alarm')
const fetch = require('node-fetch')
const mongo = require('./mongo')
const variables = require('./config/variables')

// Criando objeto de discord (client method)
const client = new Discord.Client();

// Declarando prefixo de comandos 
const prefix = '$'

//////////////////////////TEST//////////////////////////
// Criando um ponto de start para testes com alarm
const start = Date.now()

// Usando configuracao de arquivo 'config' (token do bot)
client.login(config.BOT_TOKEN)

// Client on como um listener para mensagens
client.on('message', function (message) {
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

    if (command == 'test') {
        // notifyClock(lucas_id)
        message.author.send(`Your user: ${message.author}`)
    }
});


//////////////////////////TEST//////////////////////////
// Criando tempo de execucao 2 segundos apos o tempo de inicio

var timeForExec = new Date()
console.log(timeForExec)
console.log(timeForExec.getDay())
if (timeForExec.getDay() != 0 || timeForExec.getDay() != 6) {
    timeForExec.setHours(12, 35, 0)

    alarm(timeForExec, function () {
        notifyClock(variables.Ids.renan_id)
        notifyClock(variables.Ids.yan_id)
        notifyClock(variables.Ids.zerocal_id)
        notifyClock(variables.Ids.igor_id)
    });
}


//alarm.recurring(3000, function() {
//    notifyClock(yan_id)
//})


/**
 * Funcao para enviar DM's para notificar os usuarios para bater ponto.
 * @param {*} user_id
 */
function notifyClock(user_id) {
    try {
        client.users.fetch(user_id)
            .then((user) => {
                console.log(user)
                user.send('ponto')
                return user
            })
    } catch (error) {
        console.error(error);
    }
}