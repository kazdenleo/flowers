<?php
// Файлы phpmailer
require '../phpmailer/PHPMailer.php';
require '../phpmailer/SMTP.php';
require '../phpmailer/Exception.php';

$title = "Тема письма";
$file = $_FILES['file'];

$c = true;
// Формирование самого письма
$title = "Заявка с сайта";
if(trim(!empty($_POST['name']))){
	$body .= "    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Имя:</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>".$_POST['name']."</td>
    </tr>
    ";
}
if(trim(!empty($_POST['phone']))){
	$body .= "    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Телефон:</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>".$_POST['phone']."</td>
	</tr>
	";
}
if(trim(!empty($_POST['email']))){
	$body .= "    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>E-mail:</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>".$_POST['email']."</td>
    </tr>
    ";
}
if(trim(!empty($_POST['city']))){
	$body .= "    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Город:</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>".$_POST['city']."</td>
    </tr>
    ";
}
$body .= "    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
	<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Комментарий:</b></td>
	<td style='padding: 10px; border: #e9e9e9 1px solid;'>".$_POST['text']."</td>
</tr>";

$body = "<table style='width: 100%;'>$body</table>";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  // Настройки вашей почты
  $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
  $mail->Username   = 'kazakov-denis@list.ru'; // Логин на почте
  $mail->Password   = 'Ym9vJwa8WZaJawmUux5K'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('kazakov-denis@list.ru', 'Заявка с вашего сайта'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('kazakov-denis@list.ru'); 
  $mail->addAddress('a.sanovich@mail.ru');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();
  $status = "Сообщение не было отправлено. Причина ошибки";
} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}