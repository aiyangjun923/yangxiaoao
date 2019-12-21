 function ranDer() {

    var oBox = document.querySelector('tbody') ;


    ajax({
        type : 'post',
        url : './php/randedData.php?d=33',
        data : {},
        success : function (d) {
            d = JSON.parse(d)
            // console.log(d);
            var str = '';
            var count = 0;
            for (var key in d){

                count++;
                str += `
                <tr data-id="${d[key]['id']}">
                    <th scope="row">${zero(count)}</th>
                    <td>${d[key]['stuid']}</td>
                    <td>${d[key]['stuname']}</td>
                    <td>${d[key]['stuage']}</td>
                    <td>${d[key]['stusex']}</td>
                    <td>${d[key]['stumajor']}</td>
                    <td><button type="button" class="btn btn-success btn-warning btn-sm btn-primary"  data-toggle="modal" data-target="#exampleModal1">修改</button>
                    <button type="button" class="btn btn-danger btn-sm btn-primary">删除</button></td>
                </tr>`
        }
            oBox.innerHTML = str;
        }

    })

    function zero(num) {
        return num < 10 ? '0'+num : num;

    }
}