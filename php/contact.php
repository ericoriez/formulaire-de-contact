<?php

$retour = mail("ericoriez@live.fr", "Essai", "Coucou les amis !", "");
if ($retour){
    echo "<p> email a bien ete envoyer </p>";
}