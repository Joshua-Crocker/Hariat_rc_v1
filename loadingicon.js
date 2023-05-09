window.addEventListener('load', function() {
  var loadingElements = document.querySelectorAll('.loading');
  for (var i = 0; i < loadingElements.length; i++) {
    loadingElements[i].style.display = 'none';
  }
});

// nice detail, I noticed the the loading screen is not centered though. Let's fix that. And add a message that says " your message has been sent. A member of our team will be in touch"
