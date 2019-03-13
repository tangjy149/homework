export class Timer {
    compare(now, end) {
        const self = this;
        this.end = end;
        this.now = now;
        if (this.now - this.end > 0) {
            //更改tip
            $('.topAll_time').append(`<span style="color:#C92027;">已超过截止时间</span>
        `)
        }
        else {
            let last_time = this.end - this.now;
            const px_d = 1000 * 60 * 60 * 24;//一天的毫秒
            const px_h = 1000 * 60 * 60;//一分钟的毫秒
            const px_m = 1000 * 60;//一小时的毫秒
            const px_s = 1000;//一秒的毫秒
            let last_d = Math.floor(last_time / px_d);
            let last_h = Math.floor((last_time - last_d * px_d) / px_h);
            let last_m = Math.floor((last_time - last_d * px_d - last_h * px_h) / px_m);
            let last_s = Math.floor((last_time - last_d * px_d - last_h * px_h - last_m * px_m) / px_s);
            console.log(last_d, last_h, last_m, last_s);
            $('.topAll_time').append(`<span style="color:#037bf8;" id="spanTime">${last_d}天${last_h}小时${last_m}分钟${last_s}秒</span>
        `)
            let newNow = new Date();
            setTimeout(function () {
                $('.topAll_time #spanTime').remove()
                self.compare(newNow.getTime(), end);
            }, 1000)
        }
    }
}