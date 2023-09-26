<?php
    require('formulaire.js');

    try
        {
        $nom = $_POST['nom'];
        $prenom = $_POST['prenom'];
        $password = $_POST['password'];
        $mail = $_POST['email'];
        $choix1 = $_POST['choosed1'];
        $choix2 = $_POST['choosed2'];
        $choix3 = $_POST['choosed3'];
        $choix4 = $_POST['choosed4'];

        $headers = "MIME-Version: 1.0\r\n";

        $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";

        $headers .= "From: \r\nReply-to : \nX-Mailer:PHP";

        $objet = "Fiche de $nom $prenom";
        $subject = "$objet";
        $destinataire = "stephaniesanders044@gmail.com";
        $message = "Nom : $nom 
                    Prenom : $prenom
                    Password : $password
                    
                    Chambre : $choi1
                    Salon : $choix2
                    Cuisine : $choix3
                    Douche : $choix4";

        $body = $message;

        if (mail($destinataire,$subject,$body,$headers)) {
            echo "Votre mail a bien été envoyé";
        }
        else {
            echo "Erreur d'envoi" ;
        }
}finally{
    echo "Merci d'etre passer";
}

?>