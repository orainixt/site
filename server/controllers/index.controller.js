const { sendFile } = require('../utils/utils.js');

const home = (_, res) => sendFile(res, 'index.html');
const music = (_,res) => sendFile(res, 'html/musique.html');

module.exports = {home, music}; 