const $ = require('jquery');
const formTpl = require('markdown-form.njk');
const resultTpl = require('markdown-result.njk');

$(function(){
    $('body').html(  formTpl.render() );

    const $input = $('#md-input');
    const $result = $('#result');

    $('#markdown-form')
        .on('submit', function(evt){
            evt.preventDefault();
            $result.html( resultTpl.render({ content: $input.val() }) )
        })
        .trigger('submit')
    ;
});
