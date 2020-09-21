<?php
if (isset ($_POST['Email'])) {
  $to = "nire25@yandex.ru";
  $subject = "Заполнена контактная форма на сайте ".$_SERVER['HTTP_REFERER'];
  $message = "First name: ".$_POST['FirstName'].
  "\nLast name ".$_POST['LastName']."\nEmail ".$_POST['Email']."\nPhone ".$_POST['Phone']."\nLocation: ".$_POST['sellocation']."\n\nАдрес сайта: ".$_SERVER['HTTP_REFERER'];
 
  
// if ($filesize < 10000000) { // проверка на общий размер всех файлов. Многие почтовые сервисы не принимают вложения больше 10 МБ
//     mail($to, $subject);
//     echo $_POST['FirstName'].', Ваше сообщение отправлено, спасибо!';
//   } else {
//     echo 'Извините, письмо не отправлено. Размер всех файлов превышает 10 МБ.';
//   }
// }
?>