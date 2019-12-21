<?php
    header('content-type:text/html;charset=utf-8');
    include './public.php';

    $id = $_POST['stuId'];
    $name = $_POST['stuName'];
    $age = $_POST['stuAge'];
    $sex = $_POST['stuSex'];
    $major =$_POST['stuMajor'];

    $sql = "select * from student where stuid = $id";
    $res = mysqli_query($connect,$sql);
    $arr = mysqli_fetch_assoc($res);
    if ($arr){
        $pack = array(
            'state' => 2,
            'info' => '学号重复'

        );
        echo json_encode($pack);
    }else{

        $sql1 = "insert into student (stuid,stuname,stuage,stusex,stumajor) values ('$id','$name','$age','$sex','$major')";
        $res1 = mysqli_query($connect,$sql1);
        if ($res1){
            $pack = array(
                'state' => 1,
                'info' => '添加成功'
            );
            echo json_encode($pack);
        }else{
            $pack = array(
                'state' => 0,
                'info' => '添加失败'
            );
            echo json_encode($pack);
        }
    }


?>
