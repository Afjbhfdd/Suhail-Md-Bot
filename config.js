const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "
    SUHAIL_16_19_10_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDg1LFxuICAgICAgICAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNixcbiAgICAgICAgMjE1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5LFxuICAgICAgICAxOCxcbiAgICAgICAgOTksXG4gICAgICAgIDU2LFxuICAgICAgICA5MSxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyLFxuICAgICAgICA1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyLFxuICAgICAgICA0LFxuICAgICAgICAwLFxuICAgICAgICAyMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMixcbiAgICAgICAgNDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI3LFxuICAgICAgICAyLFxuICAgICAgICA5MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDMwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3LFxuICAgICAgICA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYxLFxuICAgICAgICA1NixcbiAgICAgICAgMTYwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic1AxNDZHd3kvM1NkNmNkR1JMaDd2SHVDNUZ3RzkvM2J2ZURkd2JWMGxDUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieFlTM1NLYktTRHVWRG9aTVhDb2xpd1wiLFxuICBcInBob25lSWRcIjogXCI1ZDY3OWM5Mi1jYjRiLTRkMzYtYTViZi1iYjc5YmJhOGQzZWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMzYsXG4gICAgICAxMzQsXG4gICAgICA3NixcbiAgICAgIDI0MCxcbiAgICAgIDExLFxuICAgICAgMTkxLFxuICAgICAgMTk1LFxuICAgICAgMjU0LFxuICAgICAgMjA5LFxuICAgICAgMTI1LFxuICAgICAgMTQyLFxuICAgICAgMTg5LFxuICAgICAgNTksXG4gICAgICA1NCxcbiAgICAgIDI0OSxcbiAgICAgIDUyLFxuICAgICAgOTUsXG4gICAgICAxMjgsXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICAyNDAsXG4gICAgICAyNTIsXG4gICAgICAxOCxcbiAgICAgIDEzOSxcbiAgICAgIDIwOCxcbiAgICAgIDg0LFxuICAgICAgMTY0LFxuICAgICAgNjAsXG4gICAgICA2NyxcbiAgICAgIDExNSxcbiAgICAgIDM2LFxuICAgICAgNjQsXG4gICAgICA3OCxcbiAgICAgIDEzMyxcbiAgICAgIDIzMyxcbiAgICAgIDY5LFxuICAgICAgMTAsXG4gICAgICAxMDksXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSOU5RUUNBNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTM3MDIwNzU4MTM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA0NDg4NTM0ODAyNjY3OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEQ1dTlJREVLU0p0YmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKTTRteEQ1NDIwemNLUG5HRm5uSlNvN0Z0SVNYcnh6SE5MQnBhSFZ3a2tzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtPUFZxTE9qdG52Tnk4eW8vMDhHYzhLdEtPSnBlN1hndEZLOWt4Q0FpNHdXODJxbWU2aW0wNDdhWGhya0dmTnB1SFZyTTNqR1ljTmZncmtwTnp6WkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRTbEorY29JYTB6WTFTOUZSZjh4MUhUbGhyRldaNXlQNU5WbC83OVZNK2UyRktKZzhjNUdxZEZaNTRCT1ZTQjFjWU5wY1BRNVhQSUw4OGRtYk1RS0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkzNzAyMDc1ODEzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODkyMjc5MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxjUlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGNSLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
