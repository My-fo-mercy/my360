<?php
    include('360_user_db.php');
    $password = $_POST['pwd'];
    $phone = $_POST['phone'];
    $selectSql = "select * from my360_users where phone='$phone'";
    $result = $mysqli->query($selectSql);
    $insertSql = "insert into my360_users (password,phone) values ('$password',$phone)";
    $res = $mysqli->query($insertSql);
    if($res){
        echo "<script>alert('注册成功');location.href='http://10.31.164.47/my360/src';</script>";
    }
?> 