/* ==========================================================
   contact-form.js  -  checks the enquiry form and sends it
   using the free Web3Forms service.
   The form stays switched OFF until you paste your Web3Forms
   Access Key into js/config.js (formAccessKey).
   ========================================================== */

(function () {
  var S = window.SITE || {};
  var form = document.getElementById("enquiry-form");
  if (!form) { return; }

  var notice = document.getElementById("form-notice");
  var status = document.getElementById("form-status");
  var button = form.querySelector('button[type="submit"]');

  // No Access Key yet: leave the form switched off and keep the notice visible.
  if (!S.formAccessKey) { return; }

  // Access Key found: switch the form on.
  if (notice) { notice.hidden = true; }
  button.disabled = false;

  var fields = [
    { id: "name",           message: "Please enter your name." },
    { id: "email",          message: "Please enter your email address." },
    { id: "country",        message: "Please enter your country." },
    { id: "contact-method", message: "Please choose how you would like us to contact you." },
    { id: "message",        message: "Please write a short message." }
  ];
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function clearError(input) {
    input.removeAttribute("aria-invalid");
    input.removeAttribute("aria-describedby");
    var old = document.getElementById(input.id + "-error");
    if (old) { old.parentNode.removeChild(old); }
  }

  function showError(input, text) {
    clearError(input);
    var p = document.createElement("p");
    p.className = "error-text";
    p.id = input.id + "-error";
    p.textContent = text;
    input.parentNode.appendChild(p);
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-describedby", p.id);
  }

  function showStatus(kind, text) {
    status.className = "form-message form-" + kind;
    status.textContent = text;
    status.focus();
  }

  // Returns the first field with a problem, or null if all fields are fine.
  function validate() {
    var firstBad = null;
    fields.forEach(function (f) {
      var input = document.getElementById(f.id);
      var value = input.value.trim();
      clearError(input);
      if (!value) {
        showError(input, f.message);
        if (!firstBad) { firstBad = input; }
      } else if (f.id === "email" && !emailPattern.test(value)) {
        showError(input, "Please enter a valid email address, such as name@example.com.");
        if (!firstBad) { firstBad = input; }
      }
    });
    return firstBad;
  }

  // Clear a field's error as soon as the visitor edits it
  fields.forEach(function (f) {
    var input = document.getElementById(f.id);
    input.addEventListener("input", function () { clearError(input); });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    status.className = "";
    status.textContent = "";

    var bad = validate();
    if (bad) { bad.focus(); return; }

    // Hidden spam trap: real visitors never tick this box
    if (form.elements.botcheck && form.elements.botcheck.checked) { return; }

    var data = {
      access_key: S.formAccessKey,
      subject: "New enquiry from " + (S.domain || "the website"),
      from_name: S.businessName || "Website",
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      country: form.elements.country.value.trim(),
      contact_method: form.elements.contact_method.value,
      message: form.elements.message.value.trim()
    };

    button.disabled = true;
    button.textContent = "Sending...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(data)
    })
      .then(function (response) { return response.json(); })
      .then(function (result) {
        if (result.success) {
          form.reset();
          showStatus("success", "Thank you. Your enquiry has been sent. We will reply using your preferred contact method.");
        } else {
          showStatus("error", "Sorry, your enquiry could not be sent. Please try again, or contact us on WhatsApp or by email.");
        }
      })
      .catch(function () {
        showStatus("error", "Sorry, we could not reach the form service. Please check your internet connection and try again, or contact us on WhatsApp or by email.");
      })
      .then(function () {
        button.disabled = false;
        button.textContent = "Send enquiry";
      });
  });
})();
