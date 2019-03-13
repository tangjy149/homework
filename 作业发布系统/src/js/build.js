
import '../css/common.css';
import '../css/index.css';
import '../css/build.css';
import '../css/push.css';
import { textCount } from './textCount.js';



UM.getEditor('novel');
{
    $(function () {
        let textCount_inner = new textCount();
        textCount_inner.init({ id: '#build_title' }).render()
    })
}
{
    $(function () {
        $('#timeChoose').append($("#divDate"));
        $('#timeChoose').append($("#divDate_end"));
    })
}
{
    // $('#btnCancel').click(function () {
    //     $.ajax({
    //         url: "",
    //         type: 'POST',
    //         data: {},
    //         beforeSend: function () {

    //         },
    //         success: function (data) {
    //             location.href = "localhost:8190/html/pushPractise.html";
    //         }
    //     });
    // })
}
{
    
    
}