const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'owner', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "PrinceRudh.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭──────────────────╮
   Prince Rudh
╭──────────────────╯
│
│
│
│
│
│ ▢ *ᴏᴡɴᴇʀ* : Prince Rudh
│
│ ▢ *ɴᴜᴍʙᴇʀ* : wa.me/919895339960
│
│ ▢ *ɪɴsᴛᴀɢʀᴀᴍ* :https://instagram.com/princerudh
│
│ ▢ *ʏᴛ* :https://youtube.com/c/PrinceRudh
│
│ ▢ *ɢɪᴛʜᴜʙ* :https://github.com/Princerudh/PrinceRudhV2
│
│ ▢ *ᴀᴜᴅɪᴏ ᴄᴏᴍɴᴅs* :https://github.com/Princerudh/PrinceRudhV2/tree/master/uploads
│
│ ▢ *sᴛɪᴄᴋᴇʀ ᴄᴏᴍɴᴅs* :https://github.com/Princerudh/PrinceRudhV2/tree/master/uploads
│
│
│
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│       ©919895339960
│
╰──────────────────╮
│ 
│
│   ❏ 𝘤𝘰𝘥𝘦𝘥 𝘣𝘺 *Prince Rudh* ❏
╰──────────────────╯
`}) 

}));
