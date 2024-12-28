const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "263714183261"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUtIdk42bWNhLzhvR2ZRMmgyVXhWL3E1WE4rK1NCWU1iVHBiMHhOZGFtTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUFBSUJtdFNSOXQ1UlZscU1vb25IMXhaazVoa2RRc1orR2FLZ2ZiYXhoaz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RjY0L3dhdHhzVWlFZW1LZFB3akxPMjh1UW41eFVZVlZqMEdOOEkwb2tzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUblNGcTY3VEl5WSs2RGVEbS8yL1crOXYvcEd4dVduaTZRbks1ZmtGTUVvPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNNemZqdWE2K3NjMy9VOEUwOThvaXhabSt2YVB0YmpvSTRZdjBHTHJ6bDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY2NXAvRk9NZFJnRXFaWTFpdTd3MHloZUNSaTZURnE1blIrK3dBR051MFE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDVFg5U3h3ODNFQzBOSU5GTWRtYUd4bksrczdYUzgzZ2lub2RlVVFnOHNGYTRaZ2JxMjdxU1JrMDZ2MTN5djhadDdrNmNYb3FKeURBQlRZZXhaUUxoUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE1MiwiYWR2U2VjcmV0S2V5IjoiUWF2SjJFTCtndmpSR2R1QXVneXgwUG1zWTdqUEVoWGF1UXFqV0xseGZpOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiT3ZZTDFGcUhRaFNxMm9OdDM2UUQyUSIsInBob25lSWQiOiI2NDQ4NmZmMS00ZmRmLTRhNDQtODEzOS1jNDY4ZGFlNDMyODIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMjZ4cElJOE5PMWk3L1hwUG1KQjdPVmtNRGh3PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxdit3Y1B6NklPOGl5dGMxTlhiU05wbW02UE09In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNeThyK2NFRVBXdndMc0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5bCtKZ3k3Ym1NZ1BCRWVEbW14cEJMWjcwYnp6bTZ3cHViUkZpK2RSQTA4PSIsImFjY291bnRTaWduYXR1cmUiOiJBTVVQQ1hGWUVxRWs2MjI0Z1AyRCs1djl6TmJ4R2tBMUt0UHI5Vm8zZzZZNUNUby9CVnFRS1JxempkYk1VaFU5SWpnWlBHVnV4THJGVGt5MVNpQWhEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMEV0Nnd1cGFaRDU3bzJwODRHOExPaGpOQkNDaEpJb1prU1haQk5yT0hlYS9KRE5DQXZUcjVXUlJRZnp2U1NQeW9NRFAvTDR0T2pOZDRCcU1ubHFZZ3c9PSJ9LCJtZSI6eyJpZCI6IjI2MzcxNDE4MzI2MToxOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTSEFET1dXQUxLRVIgVjIifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE0MTgzMjYxOjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZaZmlZTXUyNWpJRHdSSGc1cHNhUVMyZTlHODg1dXNLYm0wUll2blVRTlAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzUzOTk0MTh9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'SHADOWWALER V2',
  packname:  process.env.PACK_NAME || 'SHADOWWALKER',
   
  botname:   process.env.BOT_NAME === undefined ? "SHADOW WALKER V2 BOT" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Mandishona Innocent' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'im alive baby' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SHADOW',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
