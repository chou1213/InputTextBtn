/**
 * Created by user on 2017/1/12.
 */
(function () {
    function Btn(){
        var $btn = $("<button>提交</button>");
        $(".wrap").append($btn);
        this.$btn = $btn;
        var that = this;
        $btn.on("click",function(){
            that.click();
        })
    }
    Btn.prototype.click = function () {

    }
    window.Btn = Btn;
})()