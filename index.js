const express = require("express");
const app = express();

app.listen(() => console.log("server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

const {prefix, mod, devs} = require('./config')

///////
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   var ms = 10000;
    var setGame = [`${prefix}help`, `${prefix}report للتبليغ على نصاب يبيع البوت`, `${prefix}contact للتواصل مع مطور البوت`, `${prefix}inv لاضافه البوت الى سيرفررك`, `${prefix}buy احصل على نسخت بريميوم`];
    var i = -1;
    var j = 0;
    setInterval(function() {
        if (i == -1) {
            j = 1;
        }
        if (i == (setGame.length) - 1) {
            j = -1;
        }
        i = i + j;
        client.user.setGame(setGame[i]);
    }, ms);
});
///////


////////member
client.on('message', message => {
     if (message.content === prefix + "help") {
           if (message.author.bot) return;
           if (!message.channel.guild) return;
if(devs.includes(message.author.id)) return;
     message.channel.send('**تم ارسال الاومر في الخاص**')
var help = new Discord.RichEmbed()
            .setColor(0xd3d0c4)
            .setFooter(`FO | Brodecast`)
            .setAuthor(client.user.username,client.user.avatarURL) 
            .setThumbnail(client.user.avatarURL)
            .setTitle(`
            الاوامر
            `)
            .setDescription(`**◊ ${prefix}bc <message> → رساله الى جميع اعضاء السيرفر

 ◊ ${prefix}obc <message> → رساله الى اعضاء الاونلاين فقط

 ◊ ${prefix}ebc <message>  → ارساله رساله للجميع على شكل امبد

 ◊ ${prefix}rbc <message> → ارسال رساله الى رتبه معينه

 ◊ ${prefix}bot → معلومات البوت

 ◊ ${prefix}ping → اختبار سرعه اتصال البوت

 ◊ ${prefix}contact → للتواصل مع صاحب البوت

 ◊ ${prefix}report → للتبليغ على مشكله في البوت

 ◊ ${prefix}buy → لشراء نسخه بريميوم من البوت
**`)
        message.author.sendEmbed(help)
        
             }
});


////owner
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
           if(!mod.includes(message.author.id)) 
               if (message.channel.guild) return;
                    message.channel.send('**تم ارسال الاومر في الخاص**')
var help = new Discord.RichEmbed()
            .setColor(0xd3d0c4)
            .setFooter(`FO | Brodecast`)
            .setAuthor(client.user.username,client.user.avatarURL) 
            .setThumbnail(client.user.avatarURL)
            .setTitle(`
            الاوامر
            `)
            .setDescription(`**◊ ${prefix}bc <message> → رساله الى جميع اعضاء السيرفر

 ◊ ${prefix}obc <message> → رساله الى اعضاء الاونلاين فقط

 ◊ ${prefix}ebc <message>  → ارساله رساله للجميع على شكل امبد

 ◊ ${prefix}rbc <message> → ارسال رساله الى رتبه معينه

 ◊ ${prefix}bot → معلومات البوت

 ◊ ${prefix}ping → اختبار سرعه اتصال البوت

 ◊ ${prefix}contact → للتواصل مع صاحب البوت

 ◊ ${prefix}report → للتبليغ عن مشكله في البوت

 ◊ ${prefix}buy → لشراء نسخه بريميوم من البوت

 ◊ ${prefix}setname → لتغير اسم البوت

 ◊ ${prefix}setavatar → لتغبر صورت البوت

 ◊ ${prefix}setprefix → قريبا
**`)
 message.author.sendEmbed(help)
        
             }
});



client.on("message", message => {
            if (message.content.startsWith(prefix + "bc")) {
              if(!message.channel.guild) return;
              let args22 = message.content
            .split(" ")
            .slice(1)
            .join(" ");
        if (!args22)return message.reply('**يرجى إرسال رسالة بعد الأمر لإرسالها**');
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => { 
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});



client.on("message", message => {
            if (message.content.startsWith(prefix + "obc")) {
              if(!message.channel.guild) return;
              let args2 = message.content
            .split(" ")
            .slice(1)
            .join(" ");
        if (!args2)return message.reply('**يرجى إرسال رسالة بعد الأمر لإرسالها**');
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on('message', message => {
if (message.content.startsWith(prefix + "ping")) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms 📶 ")
.addField('**Discord API:**',api + " ms 📶 ")
message.channel.send({embed:embed});
}
});

client.on('message', message => { 
    if (message.content.startsWith(prefix + "bot")) { 
    if (!message.channel.guild) return;
    message.channel.send({ 
        embed: new Discord.RichEmbed() 
            .setAuthor(client.user.username,client.user.avatarURL) 
            .setThumbnail(client.user.avatarURL) 
            .setColor('RANDOM') 
            .setTitle('Info TheFO Bot.') 
            .addField('**My Ping**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true) 
            .addField('**RAM Usage**', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true) 
            .addField('**Servers**', [client.guilds.size], true) 
            .addField('**Channels**' , `[ ${client.channels.size} ]` , true) 
            .addField('**Users**' ,`[ ${client.users.size} ]` , true) 
            .addField('**My Name**' , `[ ${client.user.tag} ]` , true) 
            .addField('**My ID**' , `[ ${client.user.id} ]` , true) 
            .addField('**DiscordJS**' , `[ ${Discord.version} ]` , true) 
            .addField('**NodeJS**' , `[ ${process.version} ]` , true) 
            .addField('**Arch**' , `[ ${process.arch} ]` , true) 
            .addField('**Platform**' , `[ ${process.platform} ]` , true) 
                  .addField('**My Prefix**' , `[ ${prefix} ]` , true) 
                  .addField('**My Language**' , `[ Java Script ]` , true)
                  .setFooter(`${client.user.tag}`) 
    }) 
} 
}); 



client.on('message' , message => {
      if(message.content.startsWith(prefix + "rbc")) {
      if(message.author.bot) return;
     if (!message.channel.guild) return;
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
        if(!codes) {
          message.channel.send(`${prefix}rbc <الرساله> @role`)
            return;
        }
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لم استطيع العثور على هاذه الرتبه")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + "السيرفر :" + "\n" +
              `${message.guild.name}` + "\n" +
              "المرسل :" + "\n" +
              `${message.author.tag}` + "\n" +
              "الرسالة :" + "\n" +
              `${codes}` + "**"
              )
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو | ☑`)
        }
    });
	
	
	
	
    client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'ebc')) {
      let args111 = message.content
            .split(" ")
            .slice(1)
            .join(" ");
        if (!args111)return message.reply('**يرجى إرسال رسالة بعد الأمر لإرسالها**');
    if(!message.channel.guild) return;
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**ليس لديك الصلاحيه لارسال البردكاست`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Speed Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**اكتب بعض الأشياء لارسال البردكاست**');message.channel.send(`**انت الان على وشك \nارسال بردكاست: ** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**☑ | تم ... تم إرسال رسالة البردكاست إلى __${message.guild.members.size}__ اعضاء**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
  
  var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('رساله بردكاست')
       .addField('السيرفر المرسل', message.guild.name)
       .addField('المرسل', message.author.username)
       .addField('الرساله', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(`${client.user.tag}`, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**تم الغاء البردكاست بنجاح | ☑**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });

client.on('message', message => {
    if (message.content.startsWith(prefix + "contact")) {
          if (message.author.bot) return;
    if (!message.channel.guild) return;
      let args11 = message.content
            .split(" ")
            .slice(1)
            .join(" ");
        if (!args11)return message.reply('**يرجى إرسال رسالة بعد الأمر لإرسالها**');
        if (!message.channel.guild) return;
        let args = message.content.split(" ").slice(1).join(" ");
        client.users.get(`${devs}`).send(
            "\n" + "**" + "● السيرفر :" + "**" +
            "\n" + "**" + "» " + message.guild.name + "**" +
            "\n" + "**" + " ● المرسل : " + "**" +
            "\n" + "**" + "» " + message.author.tag + "**" +
            "\n" + "**" + " ● الرسالة : " + "**" +
            "\n" + "**" + args + "**")

        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
            .setThumbnail(message.author.avatarURL)
            .setFooter("fo | brodecast")
        message.channel.send(embed);
    }
});

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
        .setColor(0x5500ff)
        .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
    guild.owner.send(embed)
    guild.owner.send(`رابط السيرفر المنتج لهاذ البوت 
 https://discord.gg/jyKqshn `)
});

client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
      if (message.author.bot) return;
       if (!message.channel.guild) return;
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply(`Usage : ${prefix}report <user> <Reason>`);
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`بلاغ جديد`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - تم الإبلاغ عن مشكبه:**",mUser,true)
    .addField("**# - معرّف السبب في المشكلهه:**",mUser.id,true)
    .addField("**# - السبب:**",messageReason,true)
    .addField("**# - الشات:**",message.channel,true)
    .addField("**# - الوقت:**",message.createdAt,true)
    .setFooter("ملاحضه يجيب ان يكون البلاغ حقيقي لاعادة النظر فيه")
message.channel.send(Rembed)
message.channel.send("__هل أنت متأكد أنك تريد إرسال هذا إلى مالك البوت??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
         client.users.get(`${devs}`).send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});



client.on("message", message => {
      if(message.content.startsWith(prefix + "setname")) {
        if (message.author.bot) return;
      if (!message.channel.guild) return;
       if(!mod.includes(message.author.id)) return message.channel.send("**ليس لديك الصلاحيه لتغير اسم البوت**");
      let args11111 = message.content
            .split(" ")
            .slice(1)
            .join(" ");
        if (!args11111)return message.channel.send('**يرجى ارسال الاسم مع الرساله لتغير اسم البوت**');
        let www = message.content
            .split(" ")
            .slice(1)
            .join(" ");
        
        client.user.setUsername(www);
        message.channel.send(`تم تغير اسم البوت الى**${www}**`);
    } 
    });


client.on("message", msg => {
    if(msg.content.startsWith(prefix + "setavatar")) {
      if (message.author.bot) return;
      if (!msg.channel.guild) return;
        if(!mod.includes(msg.author.id)) return msg.channel.send("**ليس لديك الصلاحيه لتغير صورة البوت**")

        let arg21 = msg.attachments.first().url
            .split(" ")
            .slice(1)
            .join(" ");
        if (!arg21)return msg.channel.send('**يرجى ارسال الصوره مع الرساله لتغير صورة البوت**');
        var img = msg.attachments.first().url;
        client.user.setAvatar(img);
        msg.channel.send(`تم تغير صوره البوت بنجاح`)
    }
});
client.on('message', message => {
  if (message.content === prefix + 'buy') {
    if (message.author.bot) return;
  if (!message.channel.guild) return;
    message.channel.send(`**لي شراء نسختك الخاصه من البوت اطلب بوت من سيرفر الدعم الفني**
    https://discord.gg/jyKqshn `);
  }
});





client.login(process.env.token);