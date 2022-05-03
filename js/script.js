const form = document.getElementById('formulaire');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const sujet = document.getElementById('sujet');
const message = document.getElementById('message');
const msgError = document.querySelectorAll('.error');
const btn = document.getElementById('btn');
const succes = document.querySelector('.succes')
console.log(btn);

// je detecte la validation du formulaire
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    // je recupere les valeurs de chacun des inputs
    const nomValue = nom.value.trim();
    console.log(nomValue);
    const emailValue = email.value.trim();
    console.log(emailValue);
    const sujetValue = sujet.value.trim();
    console.log(sujetValue);
    const messageValue = message.value.trim();
    console.log(messageValue);

    msgError.forEach(error => {
        error.classList.add('invisible');
    })

    if(nomValue.length < 3 || nomValue.length > 20){
        console.log('erreur');
        nom.nextElementSibling.classList.remove('invisible');
    }else if(sujetValue.length < 3 || sujetValue.length > 50){
        console.log('erreur');
        sujet.nextElementSibling.classList.remove('invisible');
    }else if(messageValue.length < 10 || messageValue.length > 150){
        console.log('erreur');
        message.nextElementSibling.classList.remove('invisible');
    }else {
        console.log('succes');
        btn.nextElementSibling.classList.remove('invisible');
        setTimeout(function(){
            succes.classList.add('invisible');
        },3000);
        form.reset(); 
    }
});