$(document).ready(function () {
    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 70) {
            $('body').addClass('fixed-header');
        } else {
            $('body').removeClass('fixed-header');
        }
    });
});

const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const subject = document.querySelector('input[name="subject"]');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');

const phone_error = document.createElement('span');
phone_error.style.color = "red";
number.parentNode.appendChild(phone_error);

const subject_error = document.createElement('span');
subject_error.style.color = "red";
subject.parentNode.appendChild(subject_error);

form.addEventListener('submit', (e) => {
    let valid = true;

    // Clear previous errors
    name_error.innerHTML = "";
    email_error.innerHTML = "";
    phone_error.innerHTML = "";
    subject_error.innerHTML = "";

    if (name.value.trim() === '') {
        name_error.innerHTML = "Name is required";
        valid = false;
    }

    const email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!email.value.match(email_check)) {
        email_error.innerHTML = "Valid Email is required";
        valid = false;
    }

    const phone_check = /^[0-9]{10}$/;
    if (!number.value.match(phone_check)) {
        phone_error.innerHTML = "Valid 10-digit phone number is required";
        valid = false;
    }

    if (subject.value.trim() === '') {
        subject_error.innerHTML = "Reason (Subject) is required";
        valid = false;
    }

    if (!valid) {
        e.preventDefault(); // Stop form submission if there are errors
    }
});


function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        subject: document.getElementById("subject").value,
    };

const serviceID = "service_ij6vk8i";
const templateID = "template_20w0aac";

emailjs
.send(serviceID,templateID,params)
.then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        document.getElementById("subject").value = "";
        console.log(res);
        alert("Your message sent successfully");
    })

    .catch((err) => console.log(err));

}