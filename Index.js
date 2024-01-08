const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Conexion exitosa.... ✅');
});

client.on('message', message => {
	if(message.body === '.menu') {
		message.reply('error el menu ests en desarollo por favor intente mas tarde ✨');
	}
});


client.initialize();
