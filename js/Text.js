/**
 * Created by user on 2017/1/12.
 */
(function(){
    function Text(){
        var $text = $("<p>文本</p>");
        $(".wrap").append($text);
        this.$text = $text;
    }
    Text.prototype.setName = function (val) {
        if(val.trim().length == 0){
            this.$text.text("请输入");
        }else{
            this.$text.text("输入："+ val);
        }
    };
    window.Text = Text;
})()