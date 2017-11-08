const $         = require('jquery');

module.exports = (tag = 'div', content = '', className = 'box') => $(`<${tag}>`).addClass(className).html(content);


// module.exports = (tag = 'div', content = '', className = 'box') =>{
//     const element = document.createElement(tag);
//     element.className = className;
//     element.innerHTML = content;
// }



