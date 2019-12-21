<?php
    header('content-type:text/html;charset=utf-8');
    include './public.php';

    $key = $_POST['key'];
    $where = $_POST['where'];

    $sql = "select * from student where $key like '%$where%'";
    $res = mysqli_query($connect,$sql);

    $a = array();
    while ($arr = mysqli_fetch_assoc($res)){
        array_push($a,$arr);
    }

    if (!$a){
        $pack = array(
          'state' => 0,
          'info' => '未查询到数据'
        );
        echo json_encode($pack);
    }else{
        echo json_encode($a);
    }




?>
