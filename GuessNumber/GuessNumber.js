<script>
    //生成随机整数
    Rnum = Math.ceil(Math.random() * 50);
    //与输入的数字进行比较,并提示偏大或偏小
    function j() {
        Inum = document.getElementById("num").value;
        if (Rnum > Inum && i != 0) {
            document.getElementById("prompt").innerHTML = "你输入的数字小了,你还有" + i + "次机会";
        } else if (Rnum < Inum && i != 0) {
            document.getElementById("prompt").innerHTML = "你输入的数字大了,你还有" + i + "次机会";
        } else if (i == 0) {
            document.getElementById("prompt").innerHTML = "你未能猜到数字)-:";
            document.getElementById("confirm").disabled = true;//按钮禁用
        } else {
            document.getElementById("prompt").innerHTML = "恭喜你猜中了！！！(-:"
            document.getElementById("confirm").disabled = true;//按钮禁用
        }
    }
    //五次机会
    var i = 5;
    function anniu() {
        i = i - 1;
        while (i >= 0) {
            j();
            break;
        }

    }
    //再来一次
    function againx() {
        document.getElementById("confirm").disabled = false;//按钮启用
        document.getElementById("num").value = "";
        reset();
    }
    function reset() {
        Rnum = Math.ceil(Math.random() * 50);
        i = 6;
        anniu();
        document.getElementById("prompt").innerHTML = "已刷新随机数,请再次输入";
    }
</script>
