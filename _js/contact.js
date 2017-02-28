(function(){
  'use strict';

  var form = document.getElementById("contact-form");
  if (form.length && form.addEventListener) {
    form.addEventListener("submit", tscEmailHandler, false); //Modern browsers
  } else if(form.length && form.attachEvent) {
    form.attachEvent('onsubmit', tscEmailHandler); //Old IE
  }

  function tscEmailHandler(e) {
    e.preventDefault(); // Overriding the form default action because JSON
    var message = {
      from: document.getElementById("from").value,
      replyto: document.getElementById("replyto").value,
      body: document.getElementById("body").value
    };

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://ye6vwj17zi.execute-api.us-east-1.amazonaws.com/tsc_email_endpoint');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        document.querySelectorAll('.form-wrapper')[0].innerHTML =
          '<h2>Thank you!</h2><p>Your email has been sent, I\'ll get back to you as soon as I can.';
      }
    };
    xhr.send(JSON.stringify(message));
  }
})();
