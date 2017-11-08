const header    = require('./scripts/header')();
const main      = require('./scripts/main')();
const footer    = require('./scripts/footer')();


const $         = require('jquery');

$('body').append(header);
$('body').append(main);
$('body').append(footer);

