AOS.init();

$(document).ready( function() {
    

    document.querySelector("#scroll-down").addEventListener("click", ()=>{
        document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
    })

    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    }

    /*document.querySelectorAll(".card-img-top").forEach(el => {
        el.addEventListener("click", () => {
            el.classList.remove("aos-init");
            el.classList.remove("aos-animate");
        })
        el.addEventListener("mouseleave", () => {
            el.classList.add("aos-init");
            el.classList.add("aos-animate");
        })
    });

    var regexIme = /^[A-ZĆČŠŽĐ][a-zćčšžđ]{2,15}(\s[A-ZĆČŠŽĐ][a-zćčšžđ]{2,15})?$/
    var regexEmail  = /^[a-z][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var regexPhone = /^[0-9]{6,12}$/
    var regexPoruka = /^(\w|\s){1,100}$/


    var ime = document.querySelector("#ime")
    var email = document.querySelector("#email")
    var telefon = document.querySelector("#telefon")
    var poruka = document.querySelector("#poruka")
    var subBtn = document.querySelector("#subBtn")
    var greska = document.querySelector("#greska")

    subBtn.addEventListener("click", () => {
        let nizGreska = []
        greska.innerHTML = '';
        if(!regexIme.test(ime.value))
        {
            nizGreska.push("Ime nije u dobrom formatu")
        }
        if(!regexEmail.test(email.value))
        {
            nizGreska.push("Email nije u dobrom formatu")
        }
        if(!regexPhone.test(telefon.value))
        {
            nizGreska.push("Telefon nije u dobrom formatu")
        }
        if(!regexPoruka.test(poruka.value))
        {
            nizGreska.push("Poruka nije u dobrom formatu")
        }
        if(nizGreska.length > 0)
        {
            nizGreska.forEach(el => {
                greska.innerHTML += `<p>${el}</p>`
            });
        }else{
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "php/sendemail.php", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // Obrada odgovora servera ako je potrebno
                    console.log(xhr.responseText);
                }
            };
            var data = "ime=" + encodeURIComponent(ime.value) + "&email=" + encodeURIComponent(email.value) + "&telefon=" + encodeURIComponent(telefon.value) + "&poruka=" + encodeURIComponent(poruka.value);
            xhr.send(data);
        }
    })
    */


})

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});