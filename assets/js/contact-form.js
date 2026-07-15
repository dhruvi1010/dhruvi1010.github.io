/**
* Contact form submission via FormSubmit (https://formsubmit.co)
* Replaces the template's php-email-form/validate.js, which required a PHP backend.
*/
(function () {
  "use strict";

  const form = document.querySelector('.php-email-form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const loading = form.querySelector('.loading');
    const errorMessage = form.querySelector('.error-message');
    const sentMessage = form.querySelector('.sent-message');

    loading.classList.add('d-block');
    errorMessage.classList.remove('d-block');
    sentMessage.classList.remove('d-block');

    const formData = new FormData(form);
    // FormSubmit uses _subject as the email subject line
    const subject = formData.get('subject');
    if (subject) {
      formData.set('_subject', subject);
    }

    fetch(form.getAttribute('action'), {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
      .then(response => response.json().then(data => ({ ok: response.ok, data: data })))
      .then(result => {
        loading.classList.remove('d-block');
        if (result.ok && (result.data.success === "true" || result.data.success === true)) {
          sentMessage.classList.add('d-block');
          form.reset();
        } else {
          throw new Error(result.data.message || 'Form submission failed');
        }
      })
      .catch(error => {
        loading.classList.remove('d-block');
        errorMessage.innerHTML = error.message || error;
        errorMessage.classList.add('d-block');
      });
  });
})();
