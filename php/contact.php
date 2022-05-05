<?php

$name = $_POST['nom'];
$email = $_POST['email'];
$sujet = $_POST['sujet'];
$message = $_POST['message'];
$to = "ericoriez@gmail.com";

$message = wordwrap($message, 70, "\r\n");



if (isset($_POST["message"])){
    $messages = "Ce message vous a été envoyé via la page contact du site contact.fr
    Nom : ". $name . "
    Email : " . $email . "
    Message : " . $message; 
    $retour = mail($to, $sujet, $messages, "From:ericoriez@gmail.com" . "\r\n" . "Reply-to:" . $email);
    if ($retour) {
        echo "Envoyer";
    }
}

?>