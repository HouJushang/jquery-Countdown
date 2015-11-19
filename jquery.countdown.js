(function (jq) {
    jq.fn.countdown = function (parm) {
        var defaultParm = {
            time: 10,
            text: "重发",
            befor: function(){
            },
            after: function (e) {
                e();
            }
        }
        var countdown = jq.extend(defaultParm, parm);
        var isTrue = true;
        var _this = jq(this);
        var text = _this.text();
        var time = countdown.time;

        function doCountdown() {
            isTrue = false;
            var timer = setInterval(function () {
                time--;
                var font = countdown.text + "(" + time + ")";
                _this.text(font);
                if (time == 0) {
                    isTrue = true;
                    time = countdown.time;
                    _this.text(text);
                    clearInterval(timer)
                }
            }, 1000)
        }
        _this.click(function () {
            if (isTrue && countdown.befor()) {
                countdown.after(doCountdown)
            } else {
                return false
            }
        })
    }
})(jQuery)