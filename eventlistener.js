window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
  
      // Get the email input field
      const emailInput = form.querySelector('input[name="Email"]');
      const emailValue = emailInput.value;
  
      // Validate the email address
      const isValidEmail = validateEmail(emailValue);
      if (!isValidEmail) {
        alert("Please enter a valid email address.");
        return;
      }
  
      // Continue processing the form if the email address is valid
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!");
        form.reset();
      })
    });
  });
  
  function validateEmail(email) {
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return pattern.test(email);
  }
  