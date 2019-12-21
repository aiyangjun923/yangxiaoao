<?php
    header('content-type:text/html;charset=utf-8');
    include './public.php';

    $id = $_POST['id'];
    $stuId = $_POST['stuid'];
    $stuName = $_POST['stuname'];
    $stuAge = $_POST['stuage'];
    $stuSex = $_POST['stusex'];
    $stuMajor = $_POST['stumajor'];

    $sql = "update student set stuid = $stuId,stuname = '$stuName',stuage = '$stuAge',stusex = '$stuSex',stumajor = '$stuMajor' where id =$id";
    $res = mysqli_query($connect,$sql);

    if ($res){
        $pack = array(
            'state' => 1,
            'info' => '修改成功'

        );
        echo json_encode($pack);
    }else{
        $pack = array(
            'state' => 0,
            'info' => '修改失败'
        );
        echo json_encode($pack);
    }

    ?>