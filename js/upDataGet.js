var dataBody = document.querySelector('.dataBody');
var upId = document.querySelector('.upId');
var upName = document.querySelector('.upName');
var upAge = document.querySelector('.upAge');
var upSex = document.querySelector('.upSex');
var upMajor = document.querySelector('.upMajor');
var getId = document.querySelector('.getId');

dataBody.onclick = function (e) {
    e = e|| window.event;
    var  target = e.target || e.srcElement;

    if (target.tagName == 'BUTTON' && target.className == 'btn btn-success btn-warning btn-sm btn-primary'){

        var aTd = target.parentNode.parentNode.children;
        upId.value = aTd[1].innerHTML;
        upName.value = aTd[2].innerHTML;
        upAge.value = aTd[3].innerHTML;
        upSex.value = aTd[4].innerHTML;
        upMajor.value = aTd[5].innerHTML;
        getId.value =  aTd[1].parentNode.getAttribute('data-id');
    }

}

// function upData() {
//
//     var upId = document.querySelector('.upId');
//     var upName = document.querySelector('.upName');
//     var upAge = document.querySelector('.upAge');
//     var upSex = document.querySelector('.upSex');
//     var upMajor = document.querySelector('.upMajor');
//     var getId = document.querySelector('.getId');
//     var upBtn = document.querySelector('.upBtn');
//
//     upBtn.onclick = function () {
//         ajax({
//             type : 'post',
//             url : 'http://127.0.0.1/xiangmu/php/updata.php',
//             data : {
//                 id : getId.value,
//                 stuid : upId.value,
//                 stuname : upName.value,
//                 stuage : upAge.value,
//                 stusex : upSex.value,
//                 stumajor : upMajor.value
//
//             },
//             success : function (d) {
//                 d = JSON.parse(d);
//                 console.log(d);
//
//                 switch (d.state) {
//                     case 0 : alert('修改失败');
//                     break;
//                     case 1 : alert('修改成功');
//                     ranDer();
//                     break;
//
//                 }
//
//             }
//         })
//
//     }
//
// }



