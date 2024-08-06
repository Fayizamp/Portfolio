

function sendMail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('emailid').value;
    var message = document.getElementById('msg').value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return; 
    }

    var params = {
        name: name,
        email: email,
        message: message
    };

    const serviceID = "service_khd2maq";
    const templateID = "template_3hps30t";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("emailid").value = "";
                document.getElementById("msg").value = "";
                console.log(res);
                alert("Your message was sent successfully");
            }
        )
        .catch((err) => {
            console.log(err);
            alert("There was an error sending your message. Please try again later.");
        });
}

document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');

    // Remove any existing event listener to prevent multiple alerts
    contactForm.removeEventListener('submit', submitFormHandler);

    // Define the form submission handler
    function submitFormHandler(event) {
        event.preventDefault();
        sendMail();
    }

    // Attach the event listener
    contactForm.addEventListener('submit', submitFormHandler);
});


