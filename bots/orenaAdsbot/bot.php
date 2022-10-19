<?php
require "config.php";
require "funcs.php";

$update = json_decode(file_get_contents('php://input'));
$message = $update->message;
$chat_id = $message->chat->id;
$type = $message->chat->type;
$miid =$message->message_id;
$name = $message->from->first_name;
$lname = $message->from->last_name;
$full_name = $name . " " . $lname;
$full_name = realstring(html($full_name));
$user = $message->from->username;
$fromid = $message->from->id;
$text = $message->text;
$title = $message->chat->title;
$chatuser = $message->chat->username;
$chatuser = $chatuser ? $chatuser : "Shaxsiy Guruh!";
$caption = $message->caption;
$text_link = $entities->type;
$left_chat_member = $message->left_chat_member;
$new_chat_member = $message->new_chat_member;
//editmessage
$callback = $update->callback_query;
$qid = $callback->id;
$mes = $callback->message;
$mid = $mes->message_id;
$cmtx = $mes->text;
$cid = $callback->message->chat->id;
$ctype = $callback->message->chat->type;
$cbid = $callback->from->id;
$cbuser = $callback->from->username;
$data = $callback->data;
// chat join request
$join_request = $update->chat_join_request;
$join_request_chatid = $update->chat_join_request->chat->id;
$join_request_fromid = $update->chat_join_request->from->id;
file_put_contents("log.json",file_get_contents('php://input'));


if($text == "/start"){
    bot("sendMessage", [
        'chat_id'=>$chat_id,
        'text'=>"Assalomu alaykum ". $full_name ." botga xush kelibsiz, bu bot faqat @orenauz adminlari uchun!!!",
        'parse_mode'=>"html"
    ]);
} 
if($join_request){
    // check for user id
    $slt = "SELECT * FROM `orenaAdsBot` WHERE chat_id = '{$join_request_fromid}'";
    $query = mysqli_query($conn, $slt);
    if(mysqli_num_rows($query)>0){
        bot("approveChatJoinRequest",[
            'chat_id'=>$join_request_chatid,
            'user_id'=>$join_request_fromid
        ]);
    } else {
        // user not found let's write it
        $id = realstring(trim($chat_id));
        $ins = "INSERT INTO orenaAdsBot(chat_id) VALUES('{$join_request_fromid}')";
        $query = mysqli_query($conn, $ins);
        if($query){
            bot("approveChatJoinRequest",[
                'chat_id'=>$join_request_chatid,
                'user_id'=>$join_request_fromid
            ]);
        } else {
            bot("approveChatJoinRequest",[
                'chat_id'=>$join_request_chatid,
                'user_id'=>$join_request_fromid
            ]); 
            bot("sendMessage", [
                'chat_id'=>$admin,
                'text'=>"Bit odam databasega yozilmadi, to'g'irla!"
            ]);
        }
    }
    
   
}




?>