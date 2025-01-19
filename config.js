const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVa4+qSBT8L/1V5wryEpNJFhDFF6KoiJvNpoFGW3nZNCDe+N9v0JnMJPexs986TXd11Tl1iu8gSXGOpqgG/e8gI7iEFDVLWmcI9IFahCEioA0CSCHoA36Ahkqp60u9PiWJXWiXq29b1rWFs7Eh2kaXMbodJMDEyF/BvQ2ywouw/wdA0xosqlOClYnArXalJUx2gkqgI99uvTipsiWs52QO7fnJfwX3BhFigpODnh1RjAiMpqi2ICZfo6/ra9o9IvYcaJQT2WW6KiOPXc3Ki84oWA57i0FlTG7D87D6Gn09lgprPeJieWvJx8NsI5UsCYdnlZtjW9fKemhpmrVoIWXzpJ/jQ4KCcYASimn95bq7CxS37KUzysbaadBFe9OXgkWx1606ZitvXUm5uKv4K+csv0Z8E62nUBtxc37SU6YGK8pCaI7O7MQurxs4mhBTRLNrsb3GymfiFnn3yvl/1X3CsTdTczJ4WrnCRrSza2fbq9MzJvXgMMqnYnkieENDx/0a/dhj+EUcT5yOT9CgZ61dAw2uiouDuTg4q/a5vpibQeHP7eqDPqQF+RNLz2PKGSrmXtnZy/r5uNi6vM5ERXFAW6c1HhYee9tzJzWPEtMNaSAa2sAzzvzJ1Yk+nLtrZbAqkSA50+l4PrQyWci2mvL6UHRG9TgAffbeBgQdcE4JpDhNHntSG8CgtJFPEH1UFwy13RRNYN3tjne3RAi2Ngw6a3Ub8NsjUk77RutYRj66+K+gDTKS+ijPUWDgnKaknqM8hweUg/7fj0Y1mgmKU4omOAB9ILMyx3V5XmQ46a/8W3WENIdZ9i1BFLRBSNJ4jkCfkgK1weOCoqocw2gqN1SEgciqA10SBLbL6izXZYY82yiMn4+ucYxyCuOsEcZJXaHH8cz9nzZI0JU+7dOI5tg2CDHJ6SYpsiiFwbu33j9C30+LhNp14mvNAhHQZz62EaU4OeSNsiKBxD/iEmmNDtAPYZSjexsEqMQ+avBASE7X47++vVouqmu0iBxGqcqqqdwxTZ5HegHHMH5PfPF8gXvhg67w0oOQfZE8D7JeICAkSaApx3Nymzu/NZIjmCwTX73duJbMoJOT1aJT3XZJhp+x8nQAIih4r7IH/XORrdMzSv6AO59Rd2C0psepeFpMopJcoLIer7SCnj/hPp0F+t8/0lJLgwZP55SlMhBZ0HSreecnN/Q57mdDJLA5DQg+FR7OK5izvNg899aLBihAFOIoB32gmfHw4lW6bs4uuVeNRop+ULSDAj569z6KT6+P6HpcYnc7nBuc0TnhcHbcH4vQlEXZ97YdlcVuqURwX1TL11+AgD5gUluXDtc9Ur1EFoS8c8taG2mbBNC8miVxFolxXGpBDyV4vSfLkRSPWgeTOsOCrvhkBb2LeVlO8RaJsjvR9U3tMa3H3L576PNjEVnNVtCyR/5us+PoIeSiM7YWB6jdEEucvVEQM1RGt6llHG87pais2jm5xMzHqS4fLIfK9fiozRe5r156bJxDyd6pbyHxCKno7eeA3+b36bgQo0fWvvXiP3v2YX7m3v6E8ZbevzGYuiKbesbHw9Vala8dnk9q3nG95Baicjdiwypw41k1cWIv18G9meosgjRMSQz6II89CNoggjlVPob3F3nAifcfscOCQngIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "RIJU",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "+917364934516",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'RIJU',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/57jp54.mp4',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

