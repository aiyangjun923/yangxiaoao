<?php
    header('content-type:text/html;charset=utf-8');

    include './public.php';

    $id = $_POST['id'];

    $sql = "delete from student where id ='$id'";
    $res = mysqli_query($connect,$sql);

    if ($res){
        $pack = array(
            'state' => 1,
            'info' => '删除成功'
        );
        echo json_encode($pack);
    }else{
        $pack = array(
            'state' => 0,
            'info' => '删除失败'
        );
        echo json_encode($pack);
    }







?>