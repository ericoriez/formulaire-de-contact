const form = document.getElementById('formulaire');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const sujet = document.getElementById('sujet');
const message = document.getElementById('message');
const msgError = document.querySelectorAll('.error');
const btn = document.getElementById('btn');
const succes = document.querySelector('.succes')





nom.addEventListener('change', function(){
    console.log("ca change");
    // validNom(this);
});

const validNom = function(inputNom) {
    let nomRegExp = new RegExp()
}












form.addEventListener('submit', function(e){
    e.preventDefault();

    const nomValue = nom.value.trim();
    // console.log(nomValue);
    const emailValue = email.value.trim();
    // console.log(emailValue);
    const sujetValue = sujet.value.trim();
    // console.log(sujetValue);
    const messageValue = message.value.trim();
    // console.log(messageValue);
    
    msgError.forEach(error => {
        error.classList.add('invisible');
    })
    
    if(nomValue.length < 3 || nomValue.length > 20){
        // console.log('erreur nom');
        nom.nextElementSibling.classList.remove('invisible');
    }else if(sujetValue.length < 3 || sujetValue.length > 50){
        // console.log('erreur sujet');
        sujet.nextElementSibling.classList.remove('invisible');
    }else if(messageValue.length < 10 || messageValue.length > 150){
        // console.log('erreur message');
        message.nextElementSibling.classList.remove('invisible');
    }else {
        console.log('succes');
        btn.nextElementSibling.classList.remove('invisible');

        // envoie des donnés du formulaire au php
        let data = "nom="+ nom.value + "&email="+ email.value + "&sujet="+ sujet.value + "&message="+ message.value;
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "./php/contact.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }
})


// je detecte la validation du formulaire
// form.addEventListener('submit', function(e){
//     e.preventDefault();
    
//     // je recupere les valeurs de chacun des inputs
//     const nomValue = nom.value.trim();
//     console.log(nomValue);
//     const emailValue = email.value.trim();
//     console.log(emailValue);
//     const sujetValue = sujet.value.trim();
//     console.log(sujetValue);
//     const messageValue = message.value.trim();
//     console.log(messageValue);

//     msgError.forEach(error => {
//         error.classList.add('invisible');
//     })

//     if(nomValue.length < 3 || nomValue.length > 20){
//         console.log('erreur');
//         nom.nextElementSibling.classList.remove('invisible');
//     }else if(sujetValue.length < 3 || sujetValue.length > 50){
//         console.log('erreur');
//         sujet.nextElementSibling.classList.remove('invisible');
//     }else if(messageValue.length < 10 || messageValue.length > 150){
//         console.log('erreur');
//         message.nextElementSibling.classList.remove('invisible');
//     }else {
//         console.log('succes');
//         btn.nextElementSibling.classList.remove('invisible');

//         let formData = new FormData(form);
//         fetch('php/contact.php', {
//             method: "POST",
//             body: formData,
//         })
//         // form.reset();
        
        // let data = "nom="+ nom + "&email="+ email + "&sujet="+ sujet;
        // console.log(data);
        // let xhr = new XMLHttpRequest();

        // xhr.open("POST", "/contact.php", true);
        // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // xhr.send(data);

        

        // fetch('../php/contact.php', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded",
        //     },
        //     body:{
            
        //         "nom" : nomValue,
        //         "email" : emailValue,
        //         "sujet" : sujetValue,
        //         "message" : messageValue,
        //     },
        // })
        //     .then((res) => {
        //         console.log(res);
        //     })


        // let request = new XMLHttpRequest();
        // request.open("POST", "./php/contact.php");
        // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // request.send(formData);



        // fetch('./php/contact.php', {
        //     method: "POST",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         "nom" : nomValue,
        //         "email" : emailValue,
        //         "sujet" : sujetValue,
        //         "message" : messageValue
        //     }),
        // })
        //     .then((res) => {
        //         console.log(res);
        //     })
//     }
// });

