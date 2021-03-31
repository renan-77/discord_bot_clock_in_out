const Discord = require('discord.js')
const config = require('./config.json')
const alarm = require('alarm')
const fetch = require('node-fetch')

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

<<<<<<< HEAD
    if (command == 'test') {
        // notifyClock(lucas_id)
        message.author.send(`Your user: ${message.author}`)
=======
    if(command == 'test'){
        renan_manual_id = '237070442043539456'
        user_obj = client.users.cache.get(renan_manual_id)
        console.log(user_obj)
        notifyClock(user_obj)
        // message.author.send(`Your user: ${message.author}`)
        // notifyClock(user_obj)
>>>>>>> parent of 9a53107... Implemeneted send message to user by id using user obj from fetch
    }
});

//////////////////////////TEST//////////////////////////
// Criando tempo de execucao 2 segundos apos o tempo de inicio

var timeForExec = new Date()
console.log(timeForExec)
if (timeForExec.getDate() == 0 || timeForExec.getDate() == 6) {
    timeForExec.setHours(13, 0, 0)

<<<<<<< HEAD
    alarm(timeForExec, function () {
        notifyClock(renan_id)
    });
}


//alarm.recurring(3000, function() {
//    notifyClock(yan_id)
//})
=======
// renan_id = '237070442043539456'

// renan_obj =  {
//     id: '237070442043539456',
//     system: null,
//     locale: null,
//     flags: 0,
//     username: 'Renanzin',
//     bot: false,
//     discriminator: '0626',
//     avatar: 'b04b60a0df52e6d1344a0effe8e95a2c',
//     lastMessageChannelID: '822599649151942719',
//     createdTimestamp: 1476592397939,
//     defaultAvatarURL: 'https://cdn.discordapp.com/embed/avatars/1.png',
//     tag: 'Renanzin#0626',
//     avatarURL: 'https://cdn.discordapp.com/avatars/237070442043539456/b04b60a0df52e6d1344a0effe8e95a2c.webp',
//     displayAvatarURL: 'https://cdn.discordapp.com/avatars/237070442043539456/b04b60a0df52e6d1344a0effe8e95a2c.webp'
// }

// console.log(renan_obj)

// const user_obj_promise = client.users.fetch(renan_id)
//     .then((response) => response.toJSON())
//     .then((user) => {
//         return user
// })

// const get_user_obj = () => {
//     user_obj_promise.then((a) => {
//         // console.log(a)
//     }).catch((error) => {
//         // console.log(`This is our error: ${error}`)
//     })
// }
// alarm(timeForExec, notifyClock(renan_obj))
>>>>>>> parent of 9a53107... Implemeneted send message to user by id using user obj from fetch


/**
 * Funcao para enviar DM's para notificar os usuarios para bater ponto.
 * @param {*} dc_user 
 */
<<<<<<< HEAD
function notifyClock(user_id) {
    try {
        client.users.fetch(user_id)
            .then((user) => {
                console.log(user)
                user.send('salve')
                return user
            })
    } catch (error) {
=======
function notifyClock(dc_user){
    try{
        console.log(dc_user)
        dc_user.send('Time to clock in!') 
    }catch(error){
>>>>>>> parent of 9a53107... Implemeneted send message to user by id using user obj from fetch
        console.error(error);
    }
    // Getting ID of user and sending message.
    // client.channels.cache.get(dc_user).send("Hi ${tag_user}, time to clock in!") // Getting ID of channel and sending a message.
}