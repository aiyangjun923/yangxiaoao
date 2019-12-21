var
    sar = document.querySelector('.box .sar'),
    txt = document.querySelector('.box .txt'),
    oBtn = document.querySelector('.box .searchBtn'),
    data = document.querySelector('.dataBody');

oBtn.onclick = function () {

    var
        sarVal = sar.value,
        txtVal = txt.value;
    ajax({
        type : 'post',
        url : 'http://127.0.0.1/xiangmu/php/search.php',
        data : {
            key : sarVal,
            where : txtVal
        },
        success : function (d) {
            d = JSON.parse(d);
            // console.log(d);
            if (d.state == 0){
                alert('没有查询到数据');
            }else{
                var count = 0;
                var str = '';
                for (var key in d){
                    count++;
                    str +=`
                <tr data-id="${d[key]['id']}">
                    <th scope="row">${zero(count)}</th>
                    <td>${d[key]['stuid']}</td>
                    <td>${d[key]['stuname']}</td>
                    <td>${d[key]['stuage']}</td>
                    <td>${d[key]['stusex']}</td>
                    <td>${d[key]['stumajor']}</td>
                    <td><button type="button" class="btn btn-success btn-sm btn-primary "  data-toggle="modal" data-target="#exampleModal1">修改</button>
                    <button type="button" class="btn btn-danger btn-sm btn-primary">删除</button></td>
                </tr>`
                }
                data.innerHTML = str;
            }
        }
    })

    function zero(num) {
        return num < 10 ? '0' + num: num;
    }
}