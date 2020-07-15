<?php
$con=new PDO('mysql:host=localhost;dbname=guan;port=3306;charset=utf8','root','');
$res=$con->query("select * from img");
$data=$res->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($data);

?>