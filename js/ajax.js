/**
 * 调用的时候传递的参数
 * ajax({
 *      type:'post/get',
 *      url:'接口地址',
 *      data:{
 *          参数：值，
 *          参数：值
 *      },
 *      success : function(dataBack){
 *          //对数据做业务逻辑的扩展
 *          //说明：接口返回的数据，在该方法里面返回的是 字符串。
 *      }
 * })
*/
//options代表 调用时候 传递的对象。
function ajax(options){
    //实例化对象
    var xhr = new XMLHttpRequest();
    //对参数进行处理  name=ws&age=11&sex=nan
    var packDate = '';//&name=ws&age=11&sex=nan
    for(var key in options.data){
        packDate += '&' + key + '=' + options.data[key];
    }
    //判断get 或者是post
    if(options.type == 'get'){
        //packDate.slice(1)  把第一个& 去掉
        xhr.open('get',options.url + '?' + packDate.slice(1));
        xhr.send();
    }else{
        //post请求
        xhr.open('post',options.url);
        //设置请求头
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        //send传递参数
        xhr.send(packDate.slice(1));
    }
    //监测状态
    xhr.onreadystatechange = function(){
        if(xhr.status == 200 && xhr.readyState == 4){
            var dataBack = xhr.responseText;
            //判断是否有success 函数  , 如果有就执行
            if(options.success){
                options.success(dataBack);
            }
        }
    }
}