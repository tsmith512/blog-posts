(function(){
  'use strict';

  var form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", emailHandler);
  }

  function emailHandler(e) {
    e.preventDefault();

    var message = {
      from: document.getElementById("from").value,
      replyto: document.getElementById("replyto").value,
      message: document.getElementById("message").value
    };

    var xhr = new XMLHttpRequest();
    xhr.open('POST', form.getAttribute("action"));
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        document.querySelector('.form-wrapper').innerHTML =
          '<h2>Thank you!</h2><p>Your email has been sent, I\'ll get back to you as soon as I can.';
      }
    };
    xhr.send(JSON.stringify(message));
  }
})();
