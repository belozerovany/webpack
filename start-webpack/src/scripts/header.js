const builder = require('./elementBuilder');
const $         = require('jquery');


module.exports = () => {
    //const content = '<a href="/">Logo</a>';
    let content = $('<a href="/">Logo</a>');
    
    return builder('header', content, 'header');

 };
 