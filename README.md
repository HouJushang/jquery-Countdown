# jquery-Countdown
按钮倒计时，防止多次提交后台
##运行demo
git clone https://github.com/HouJushang/jquery-Countdown.git
然后 打开 index.html 就可以了
##demo代码解析
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>按钮倒计时demo</title>
</head>
<body>
    <button>点击发送短信</button>
</body>
<script src="jquery.min.js"></script>
<script src="jquery.countdown.js"></script>
<script>
    $('button').countdown({
        time: 4,
        text: "重发",
        befor: function(){
            //可以执行表单验证
            if(confirm('表单验证是否成功')){
                return true; //表单验证执行成功 触发按钮事件
            }else{
                return false;
            }
        },
        after: function (star) {
            //按钮事件执行函数 例如ajax向后台发送数据
            if(confirm('ajax数据请求是否成功')){
                star(); //执行按钮事件
            }else{
                return false;
            }

        }
    })
</script>
</html>
```

