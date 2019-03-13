
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
{
    $(function(){
        $.ajax({
            url: "http://94.191.30.171:8080/Homework/teacheradmin/gethomeworklist?homeworkId=1",
            type: 'GET',
            dataType:'json',
            data: {},
            beforeSend: function () {

            },
            success:function(data){
                // if(data['isSucceed']==1){
                //     console.log(data['liuyan']);
                //     for (var i = 0; i < 7; i++) {
                //         $(".practiseTop a").eq(i).text(data['liuyan'][i].content);
                //         $(".rDate").eq(i).text(data['liuyan'][i].name);
                //     }
                // }
                console.log(data);
            },
             error : function() {
                alert("异常！");
            }
        });
    })
        

}
