
export class textCount {
    init(config) {
        this.input = $(config.id);
        this.bind();
        return this;
    }
    bind() {
        let self = this;
        this.input.on('keyup', function () {
            self.render();
        });
    }
    getNum(){
        return this.input.val().length;
    }
    getStr(){
        return this.input.val();
    }
    setStr(newStr){
        this.input.val(newStr);
    }
    render(){
        let num=this.getNum();
        if($('#input_Count').length==0){
            this.input.after(`<span id="input_Count"></span>`);
        }
        $('#input_Count').html(num+'/30');
        if(num>=30){
            alert('字数超限');
            let surStr = this.getStr();
            let newStr=''.padStart(29, surStr);
            this.setStr(newStr);
            console.log(newStr);
        }
    }
}
