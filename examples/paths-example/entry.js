const $ = require('jquery');
const tpl = require('child.njk');

$(function(){
    $('body')
        .html( tpl.render({ message: 'Hello!'}) )
    ;
});
