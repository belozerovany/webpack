const builder = require('./elementBuilder');
const $         = require('jquery');

module.exports = () => {
    //const content = `<h1>Headers h1</h1><p> ${new Date()} </p>`;
    const content = $(`<h1>Headers h1</h1><p> ${new Date()} </p>`);

    return builder('main', content, 'main');

};