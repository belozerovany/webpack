const builder = require('./elementBuilder');
const $         = require('jquery');

module.exports = () => {
    //const content = '<p>Easycode 2017 (c)</p>';
    const content = $('<p>Easycode 2017 (c)</p>');

    return builder('footer', content, 'footer');

};




 