<?php
    header('content-type:text/html;charset=utf-8');

    $uName = $_POST['name'];
    $uPwd = $_POST['pwd'];


    include 'public.php';


    $sql = "select * from user where uname ='$uName'";
    $res = mysqli_query($connect,$sql);
    $arr = mysqli_fetch_assoc($res);
//    print_r($arr);
    if(!$arr){
        $pack = array(
            'state' => 2,
            'info' => '用户名不存在',
        );
        echo json_encode($pack);
    }else{
        if ($uPwd == $arr['pwd']){
            $pack = array(
                'state' => 1,
                'info' => '登陆成功'
            );
            echo json_encode($pack);
        }else{
            $pack = array(
                'state' => 0,
                'info' => '密码错误'
            );
            echo json_encode($pack);
        }
    }






?>