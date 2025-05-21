function sendMail() {
  console.log("Send function triggered");

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  // Manual validation
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields before submitting.");
    return;
  }

  var params = {
    name: name,
    email: email,
    message: message,
  };

  const serviceID = "service_ij6vk8i";
  const templateID = "template_20w0aac";

  emailjs.send(serviceID, templateID, params)
    .then((res) => {
      console.log("Email sent!", res);
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      alert("Your message sent successfully");
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to send message: " + (err.text || err));
    });
}
