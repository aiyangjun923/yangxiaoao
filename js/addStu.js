function addStu() {


var
    addStu = document.querySelector('.addStu'),
    addId = document.querySelector('.addId'),
    addName = document.querySelector('.addName'),
    addAge = document.querySelector('.addAge'),
    addSex = document.querySelector('.addSex'),
    addMajor = document.querySelector('.addMajor');

addStu.onclick = function () {

    var
        addIdVal = addId.value,
        addNameVal = addName.value,
        addAgeVal = addAge.value,
        addSexVal = addSex.value,
        addMajorVal = addMajor.value;
    if (addIdVal && addNameVal && addAgeVal && addSexVal && addMajorVal){

        ajax({
            type : 'post',
            url : 'http://127.0.0.1/xiangmu/php/addStu.php',
            data : {
                stuId :addIdVal,
                stuName:addNameVal,
                stuAge:addAgeVal,
                stuSex:addSexVal,
                stuMajor:addMajorVal
            },
            success : function (d) {
                d = JSON.parse(d);
                // console.log(d);

                switch (d.state) {
                    case 0 : alert('添加失败');
                    break;
                    case 1 : alert('添加成功');
                    ranDer();
                    break;
                    case 2 : alert('添加失败,学号重复');
                    break;
                }

            }
        })
    }


}
}