window.onload = function () {
    var oBtn = document.querySelector('.btn2');
    var userName = document.querySelector('.cn1');
    var userPwd = document.querySelector('.cn2');

    oBtn.onclick = function () {


    var u_name = userName.value;
    var u_pwd = userPwd.value;

    ajax({
        type: 'post',
        url: 'http://127.0.0.1/xiangmu/php/login.php',
        data : {
                name : u_name,
                pwd :  u_pwd
    },
       success : function (d) {
            d = JSON.parse(d);
            console.log(d)

            switch (d.state) {
                case 0 : alert('密码错误');
                break;
                case 1 : alert('登入成功') ;location.href='./index.html';
                break;
                case 2 : alert('用户名不存在');
                break;

            }

       }

})


}
}