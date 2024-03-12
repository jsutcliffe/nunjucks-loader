const $ = require('jquery');
const helloTpl = require('./hello.njk');

$(function(){
    $('body')
        .html( helloTpl.render() )
        .append( helloTpl.render({ message: 'there!'}) )
    ;

});
