import {one} from './try.js';
import '../css/common.css';
import '../css/index.css';
import './jquery.js';

{
    $('.button_outline').hover(function(){
        $(this).css({'background-color':'black','color':'white'})
    },function(){
        $(this).css({'background-color':'transparent','color':'#373a3c'})
    })

    $('#buttonUser').focus(function(){
        $('.dropdown_menu').css("display","inline").fadeIn();
    })
    $('#buttonUser').blur(function(){
        $('.dropdown_menu').css("display","inline").fadeOut(500);
    })

    $('#buttonMessage').focus(function(){
        $('.dropdown_message').css("display","inline").fadeIn();
    })
    $('#buttonMessage').blur(function(){
        $('.dropdown_message').css("display","inline").fadeOut(500);
    })

    $('.dropdown_item').hover(function(){
        $(this).css({'background-color':'#6db6e242'})
    },function(){
        $(this).css({'background-color':'transparent'})
    })
}
