const closeBtn = document.querySelector('#closeBtn');
const openBtn = document.querySelector('#openBtn');
const form = document.querySelector('.fixed-form');

closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    form.style.display = 'none';
});

openBtn.addEventListener('click', function() {
    form.style.display = 'block';
});