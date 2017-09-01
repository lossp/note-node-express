require("less/toast.less");
function toast(message, time){
    this.message = message;
    this.dismissTime = time||1000;
    this.createNode();
    this.showToast();
}

toast.prototype = {
    createNode: function(){
        var html = "<div class = 'toast'>" + this.message + "</div>";
        this.$toast = $(html);
        $('body').append(this.$toast);
    },
    showToast: function(){
        var _this = this;
        this.$toast.fadeIn(400, function(){
            setTimeout(function(){
                _this.$toast.fadeOut(400, function(){
                    _this.$toast.remove();
                })
            }, _this.dismissTime)
        });
    }
}

function Toast(message, time){
    return new toast(message, time);
}

module.exports.Toast = Toast;
