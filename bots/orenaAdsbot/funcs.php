<?php
require "config.php";
function bot($method, $datas=[]){
    $url = "https://api.telegram.org/bot".API_KEY."/".$method;

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $datas);

    $res = curl_exec($ch);

    if (curl_error($ch)) {
        var_dump(curl_error($ch));
    }else{
        return json_decode($res);
    }
}
function html($tx){
    return str_replace(['<','>'],['&#60;','&#62;'],$tx);
}
function translate($source,$target,$text) {
    $url = "https://translate.google.com/translate_a/single?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1&hl=es-ES&ie=UTF-8&oe=UTF-8&inputm=2&otf=2&iid=1dd3b944-fa62-4b55-b330-74909a99969e";
    $fields = array(
        'sl'=>urlencode($source),
        'tl'=>urlencode($target),
        'q'=>urlencode($text)
    );
    $fields_string = "";
    foreach ($fields as $key => $value) {
        $fields_string .= $key . '=' . $value . '&';
    }
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, count($fields));
    curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_ENCODING, 'UTF-8');
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_USERAGENT, 'AndroidTranslate/5.3.0.RC02.130475354-53000263 5.1 phone TRANSLATE_OPM5_TEST_1');
    $result = curl_exec($ch);
    curl_close($ch);
    return json_decode($result);
}

$host = 'localhost';
$username = 'orenauz';
$password = "Orena2022";
$dbname = "orena";

$conn = mysqli_connect($host,$username,$password,$dbname);

function realstring($text){
    global $conn;
    $res = mysqli_real_escape_string($conn,$text);
    return $res;
}
// insert to orenaAdsBot table in DB
function insert__($chat_id){
    global $conn;
    $id = realstring(trim($chat_id));
    $ins = "INSERT INTO orenaAdsBot(chat_id) VALUES('{$id}')";
    $query = mysqli_query($conn, $ins);
}
?>
