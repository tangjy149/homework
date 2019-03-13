
import '../css/common.css';
import '../css/index.css';
import '../css/build.css';
import '../css/push.css';
import '../css/answer.css';   
import {Timer} from './timer.js';
UM.getEditor('novel');

{
    
    let date = new Date();
    // class now{
    //     constructor(DD,HH,MM,SS){
    //         this.DD=date.getDay();
    //         this.HH=date.getHours();
    //         this.MM=date.getMinutes();
    //         this.SS=date.getSeconds();
    //     }
    // }
    let firstTime = new Date();
    let time1 = 1572789981327;
   
    let timer = new Timer();
    timer.compare(firstTime.getTime(),time1);
    console.log(timer);
    
}
