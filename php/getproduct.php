<?php
    include('360_product_db.php');
    $id=$_REQUEST['id'];
    $sql = "select * from my360_product where id=$id";
    $res = $mysqli->query($sql);

    $arr=array();
    while($row=$res->fetch_assoc()){
        array_push($arr,$row);
    }
    $json = json_encode($arr);
    echo $json;
?>