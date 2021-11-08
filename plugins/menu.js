const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.postimg.cc/pdrqhgNd/Prince-Rudh.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭─➤ 𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎 »
│❖ *ᴀᴜᴛʜᴏʀ* : ᴘʀɪɴᴄᴇ ʀᴜᴅʜ
 | ❖ *ʙᴏᴛ* : ᴘʀɪɴᴄᴇʀᴜᴅʜ
│❖ *ᴋᴇʀɴᴇʟ* : ʟɪɴᴜx
│❖ *ɪɴꜱᴛᴀɢʀᴀᴍ* : https://instagram.com/princerudh
│❖ *ᴄᴏɴᴛᴀᴄᴛ* : wa.me/919895339960
╰────────────────❋ཻུ۪۪➹
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
          ©919895339960  
╭────────────────➤
│« *ᴀʟʟ ᴍᴇɴᴜ* »
╭────────────────╯
│
│[ *ᴍᴇᴅɪᴀ* ]
│
│ ❖ .sᴏɴɢ
│ ❖ .ᴠɪᴅᴇᴏ
│ ❖ .ɪɴsᴛᴀ
│ ❖ .ʏᴛ
│       
│[ *ᴄᴏɴᴠᴇʀᴛ* ]
│
│ ❖ .ɢɪғ
│ ❖ .ᴍᴘ3
│ ❖ .ᴛᴛs
│ ❖ .ɪᴍɢ
│ ❖ .sᴛɪᴄᴋᴇʀ
│ ❖ .ᴀᴛᴛᴘ
│ ❖ .ᴛᴛᴘ
│ ❖ .ᴘʜᴏᴛᴏ
│ ❖ .2ɪᴍɢ
│
│[ *ᴍᴀᴋᴇʀ* ]
│
│ ❖ .logo
│ ❖ .spack
│ ❖ .shpack
│ ❖ .makermenu
│ ❖ .txttoimg
│ ❖ .effectimge 
│ 
│[ *ғᴜɴ* ]
│
│ ❖ .ᴊᴏᴋᴇ
│ ❖ .ᴍᴇᴍᴇ
│ ❖ .ǫʀ
│ ❖ .ᴄʜᴀɴɢᴇsᴀʏ
│ ❖ .ᴛʀᴜᴍᴘsᴀʏ
│ ❖ .ᴄᴏᴍᴘʟɪᴍᴇɴᴛ
│
│[ *sᴇᴀʀᴄʜ* ]
│ 
│ ❖ .ᴡɪᴋɪ
│ ❖ .ʟʏʀɪᴄ
│ ❖ .sʜᴏᴡ
│ ❖ .ᴍᴏᴠɪᴇ
│ ❖ .ᴡᴇᴀᴛʜᴇʀ
│
│[ *ᴛᴀɢ* ]
│
│ ❖ .ᴛᴀɢᴀʟʟ
│ ❖ .ᴛᴀɢᴀᴅᴍɪɴ
│
│[ *ᴏᴛʜᴇʀ* ]
│ 
│ ❖ .ᴀɴɪᴍᴇ
│ ❖ .ᴡᴀʟʟᴘᴀᴘᴇʀ
│ ❖ .ss
│ ❖ .ᴅɪᴄᴛ
│ ❖ .sʜᴏʀᴛ
│ ❖ .ᴛʀᴛ
│ ❖ .ʀᴇᴍᴏᴠᴇʙɢ
│ 
│[ *ᴏᴡɴᴇʀ ᴄᴍɴᴅs* ]
│
│ ❖ .ғᴜʟʟᴇᴠᴀ 
│ ❖ .ᴀᴜᴛᴏʙɪᴏ
│ ❖ .ʙᴀɴ
│ ❖ .ᴀᴅᴅ
│ ❖ .ᴘʀᴏᴍᴏᴛᴇ
│ ❖ .ᴅᴇᴍᴏᴛᴇ
│ ❖ .ᴍᴜᴛᴇ
│ ❖ .ᴜɴᴍᴜᴛᴇ
│ ❖ .ɪɴᴠɪᴛᴇ
│ ❖ .sᴇᴛᴠᴀʀ
│ 
│
│   ❏ *ᴄᴏᴅᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ʀᴜᴅʜ* ❏
╰────────────────╯
`}) 

}));
