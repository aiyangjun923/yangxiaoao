function reR() {
    var
        oBtn = document.querySelector('.re1'),
        uName = document.querySelector('.cn'),
        uPwd = document.querySelector('.cn3') ,
        isPwd = document.querySelector('.cn4');


    oBtn.onclick = function () {

        if (uPwd.value == isPwd.value && uName.value.indexOf(' ') == -1 && uPwd.value.indexOf(' ') == -1){
            var u_name = uName.value;
            var u_pwd = uPwd.value;

            ajax({
                type : 'post',
                url : 'http://127.0.0.1/xiangmu/php/re.php',
                data : {
                    name : u_name,
                    pwd : u_pwd
                },
                success : function (d) {
                    d = JSON.parse(d);
                    console.log(d);
                    switch (d.state) {
                        case 1 : alert('注册成功');location.href='./login.html';
                        break;
                        case 0 : alert('用户名已存在');
                        break;
                        case 2 : alert('注册失败,请重新注册');
                        break;
                    }

                }

            })
        }else {
            alert('输入有误，请重新输入');
        }

    }
}