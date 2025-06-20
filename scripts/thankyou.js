const x = new URLSearchParams(window.location.search);
document.getElementById('fname').textContent = x.get('fname');
document.getElementById('tel').textContent = x.get('tel');
document.getElementById('email').textContent = x.get('email');
document.getElementById('message').textContent = x.get('message');