const input = document.querySelector('#input');
const label = document.querySelector('#label');

input.addEventListener('input', function() {
  label.innerHTML = input.value;
});



