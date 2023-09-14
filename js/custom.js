// get current year
(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();

    document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting in the default way

    // Get form data
    var name = document.getElementsByName("full_name").value;
    var email = document.getElementsByName("email").value;
    var message = document.getElementsByName("phone_number").value;
    var message = document.getElementsByName("message").value;

    // Compose the email subject and body
    var subject = "Contact Form Submission from " + full_name;
    var body = "Name: " + full_name + "\nEmail: " + email + "\nPhone Number: " + phone_number "\nMessage " + message;

    // Create a "mailto" link to open the user's email client
    var mailtoLink = "mailto:lubegam054@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    // Open the user's email client
    window.location.href ="mailto:lubegm054@gmail.com";
});