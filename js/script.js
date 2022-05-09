const form = document.getElementById("formulaire");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const sujet = document.getElementById("sujet");
const message = document.getElementById("message");
const btn = document.querySelector(".modal-btn");
const succes = document.querySelector(".succes");
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");


// récupère les valeurs du formulaire au click du boutton submit
form.addEventListener("submit", function (e) {

    e.preventDefault();

    // vérification de la valeur des inputs et attribution d'une valeur booleen
    let validName = Error.nom(nom);
    let validMail = Error.mail(email);
    let validSujet = Error.sujet(sujet);
    let validMessage = Error.message(message);

    // vérifie si booleen est true, si true envoie le formulaire
    if (
        validName == true &&
        validMail == true &&
        validSujet == true &&
        validMessage == true
    ) {
        console.log("succes");

        // envoie des donnés du formulaire au php
        let data = `nom=${nom.value}&email=${email.value}&sujet=${sujet.value}&message=${message.value}`;
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "./php/contact.php", true);
        xhr.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
            );
            xhr.send(data);

            // apparition de la fenêtre modal
            modalContainer.classList.toggle("active");
            modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

            function toggleModal(e){
                e.preventDefault()
                modalContainer.classList.toggle("active");
                form.reset();
            }
        }
    });
    
    // creation d'un objet avec differente methode pour attraper les erreurs
const Error = {
    /**
     * @param  { HTMLElement } input_nom
     */
    nom(input_nom) {
        let texteErreur = document.getElementById("pNom");
        // vérifie que la valeur de l'input match avec une regex
        let result = input_nom.value.match(/^[a-zA-Z]*(\s)?[a-zA-Z]*$/);
        let valide = false;
        console.log(result);
        if (result == null) {
            texteErreur.textContent = "Caractère speciaux interdits";
            texteErreur.style.color = "red";
            valide = false;
        } else if (input_nom.value.length < 3 || input_nom.value.length > 10) {
            texteErreur.textContent = "Doit contenir entre 3 et 10 caractère";
            texteErreur.style.color = "red";
            valide = false;
        } else {
            texteErreur.textContent = "";
            valide = true;
        }
        return valide;
    },

    mail(input_mail) {
        let texteErreur = document.getElementById("pMail");
        let result = input_mail.value.match(
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
        );
        let valide = false;

        if (result == null) {
            texteErreur.textContent = "Caractère speciaux interdits";
            texteErreur.style.color = "red";
            valide = false;
        } else if (
            input_mail.value.length < 5 ||
            input_mail.value.length > 50
        ) {
            texteErreur.textContent = "Doit contenir entre 5 et 50 caractère";
            texteErreur.style.color = "red";
            valide = false;
        } else {
            texteErreur.textContent = "";
            valide = true;
        }
        return valide;
    },

    sujet(input_sujet) {
        let texteErreur = document.getElementById("pSujet");
        let result = input_sujet.value.match(/^[a-zA-Z0-9]*$/i);
        let valide = false;

        if (result == null) {
            texteErreur.textContent = "Caractère speciaux interdits";
            texteErreur.style.color = "red";
            valide = false;
        } else if (
            input_sujet.value.length < 5 ||
            input_sujet.value.length > 50
        ) {
            texteErreur.textContent = "Doit contenir entre 5 et 50 caractère";
            texteErreur.style.color = "red";
            valide = false;
        } else {
            texteErreur.textContent = "";
            valide = true;
        }
        return valide;
    },

    message(input_message) {
        let texteErreur = document.getElementById("pMessage");
        let result = input_message.value.match(/^[a-zA-Z0-9]*$/i);
        let valide = false;

        if (result == null) {
            texteErreur.textContent = "Caractère speciaux interdits";
            texteErreur.style.color = "red";
            valide = false;
        } else if (
            input_message.value.length < 5 ||
            input_message.value.length > 256
        ) {
            texteErreur.textContent = "Doit contenir entre 5 et 256 caractère";
            texteErreur.style.color = "red";
            valide = false;
        } else {
            texteErreur.textContent = "";
            valide = true;
        }
        return valide;
    },
};
