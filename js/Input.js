/**
 * Created by user on 2017/1/12.
 */
(function () {
    function Input(){
        var $input = $("<input type='text' class='input_model' placeholder='文本框'/>");
        $(".wrap").append($input);
        this.$input = $input;
    }
    Input.prototype.getValue = function(){
        var _val = this.$input.val();
        return _val;
    }
    window.Input = Input;
})();