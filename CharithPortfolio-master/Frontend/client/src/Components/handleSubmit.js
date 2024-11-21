

const handleSubmit = async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const message = document.getElementById("message").value;
  // DOM element to display messages
  const formMessageElement = document.getElementById("form-message");
  try {
    // Send the POST request with the form data
    const response = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, mobile, message }),
    });

    const result = await response.json();
    console.log(result);
    // Handle the response from the server
    if (response.ok) {
      formMessageElement.textContent = "Form submitted successfully!";
      formMessageElement.style.color = "green";
      // Clear form fields after successful submission
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mobile").value = "";
      document.getElementById("message").value = "";
    } else {
      formMessageElement.textContent = result.error || "Failed to submit form.";
      formMessageElement.style.color = "red";
    }
  } catch (error) {
    console.error("Error submitting the contact form:", error);
    formMessageElement.textContent = "An error occurred. Please try again later.";
    formMessageElement.style.color = "red";
  }
};

 module.exports = handleSubmit;