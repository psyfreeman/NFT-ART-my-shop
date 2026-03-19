<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["success" => false, "error" => "No data"]);
    exit;
}

$customer = $data['customer'] ?? [];
$items = $data['items'] ?? [];
$total = $data['total'] ?? 0;

$message = "🛒 НОВЫЙ ЗАКАЗ\n\n";
$message .= "👤 Покупатель:\n";
$message .= "{$customer['firstName']} {$customer['lastName']}\n";
$message .= "Email: {$customer['email']}\n";
$message .= "Телефон: {$customer['phone']}\n\n";

$message .= "🚚 Доставка:\n";
$message .= "Страна: {$customer['country']}\n";
$message .= "Город: {$customer['city']}\n";
$message .= "Адрес: {$customer['address']}\n";
$message .= "Индекс: {$customer['postalCode']}\n\n";

$message .= "📦 Товары:\n";
foreach ($items as $item) {
    $message .= "- {$item['name']} × {$item['quantity']} = $" . ($item['price'] * $item['quantity']) . "\n";
}

$message .= "\n💰 Итого: $" . $total;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.dreamhost.com';
    $mail->SMTPAuth = true;

    $mail->Username = 'orders@strongandpowerfulgenetics.com'; // SMTP-ящик
    $mail->Password = 'ПАРОЛЬ_ОТ_ПОЧТЫ'; // пароль от этого ящика

    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->CharSet = 'UTF-8';

    $mail->setFrom(
        'orders@strongandpowerfulgenetics.com',
        'Strong And Powerful Genetics'
    );

    $mail->addAddress('Strongandpowerfulgenetics@gmail.com');

    $mail->Subject = 'Новый заказ с сайта';
    $mail->Body = $message;

    $mail->send();

    echo json_encode(["success" => true]);

} catch (Exception $e) {
    echo json_encode([
        "success" => false,
        "error" => $mail->ErrorInfo
    ]);
}
