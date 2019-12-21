<?php

    header('content-type:text/html;charset=utf-8');
    $server = '127.0.0.1';
    $db_user = 'root';
    $db_pwd = 'root';
    $db_name = '1+x';

    $connect = new mysqli($server,$db_user,$db_pwd,$db_name);

    if($connect -> connect_errno){
        die('连接失败'.$connect->connect_errno);
    }


    $connect -> query('set names utf8');

?>
