
function dieRe() {


    var dataBody = document.querySelector('.dataBody');

    dataBody.onclick = function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement;

        if (target.tagName == 'BUTTON' && target.className == 'btn btn-danger btn-sm btn-primary') {
            // console.log(11);
            var id = target.parentNode.parentNode.getAttribute('data-id');
            // console.log(id);
            ajax({
                type: 'post',
                url: 'http://127.0.0.1/xiangmu/php/die.php',
                data: {
                    id: id
                },
                success: function (d) {
                    d = JSON.parse(d);

                    // {state:1,info:'删除成功'}
                    // {state:0,info:'删除失败'}
                    switch (d.state) {
                        case 0 :
                            alert('删除失败');
                            break;
                        case 1 :
                            alert('删除成功');
                            target.parentNode.parentNode.remove();
                            break;
                    }

                }
            })
        }
    }
}