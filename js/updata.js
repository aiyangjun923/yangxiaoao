function upData() {

    var upId = document.querySelector('.upId');
    var upName = document.querySelector('.upName');
    var upAge = document.querySelector('.upAge');
    var upSex = document.querySelector('.upSex');
    var upMajor = document.querySelector('.upMajor');
    var getId = document.querySelector('.getId');
    var upBtn = document.querySelector('.upBtn');

    upBtn.onclick = function () {

        ajax({
            type : 'post',
            url : 'http://127.0.0.1/xiangmu/php/updata.php',
            data : {
                id : getId.value,
                stuid : upId.value,
                stuname : upName.value,
                stuage : upAge.value,
                stusex : upSex.value,
                stumajor : upMajor.value

            },
            success : function (d) {
                d = JSON.parse(d);
                // console.log(d);

                switch (d.state) {
                    case 0 : alert('修改失败');
                        break;
                    case 1 : alert('修改成功');
                        ranDer();
                        break;

                }

            }
        })

    }

}