<?php
    header('content-type:text/html;charset=utf-8');
    include './public.php';
    
    $uName = $_POST['name'];
    $uPwd = $_POST['pwd'];

    $sql = "select * from user where uname ='$uName'";
    $res = mysqli_query($connect,$sql);
    $arr = mysqli_fetch_assoc($res);

    if ($arr){
        $pack = array(
            'state' => 0,
            'info' => '用户名已存在'
        );
        echo json_encode($pack);
    }else{
        $sql1 = "insert into user (uname,pwd) values ('$uName','$uPwd')";
        $res1 = mysqli_query($connect,$sql1);

        if($res1){
            $pack = array(
                'state' => 1,
                'info' => '注册成功'
            );
            echo json_encode($pack);
        }else{
            $pack = array(
                'state' => 2,
                'text' => $connect -> connect_error,
                'info' => '注册失败'
            );
            echo json_encode($pack);
        }
    }





?>