<?php
    header('content-type:text/html;charset=utf-8');

    include './public.php';



    $sql = 'select * from student';
    $res = mysqli_query($connect,$sql);

    $a = array();
    while ($arr = mysqli_fetch_assoc($res)){
        array_push($a,$arr);

    }

        echo  json_encode($a);




?>