<?php
    include('360_user_db.php');

    $phone = $_POST['phone'];
    $password = $_POST['psd'];

    $sql = "select * from my360_users where phone='$phone' and password='$password'";
    
    $result = $mysqli->query($sql);
    if($result->num_rows>0){
        echo "true";
    }
?>