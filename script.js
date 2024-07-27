
document.addEventListener("DOMContentLoaded", function() {
var typed = new Typed('.text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Video Designer', 'Photographer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const header = document.querySelector("header");

window.addEventListener("scroll", function() {

header.classList.toggle("sticky", window.scrollY > 60)

});

let menu = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar');

menu.onclick = () => { 
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');

};


(function() {
            emailjs.init("k4eILDpZdqflcwwT_");
        })();

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            emailjs.sendForm('service_3hkznbd', 'template_uk9cmgz', this)
                .then(function(response) {
                    alert('Message sent successfully!');
                }, function(error) {
                    alert('Failed to send message. Please try again.');
                });
});
   
});