<?php
    include('360_user_db.php');
    $phone = $_REQUEST['phone'];
    $sql = "select * from my360_users where phone='$phone'";

    $res = $mysqli->query($sql);
    if($res->num_rows>0){
        echo '{"msg":"用户名已存在","has":true,"status":200}';
    }else{
        echo '{"msg":"用户名可以使用","has":false,"status":200}';
    }
?>