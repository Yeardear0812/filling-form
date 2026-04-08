const closeBtn = document.querySelector('#closeBtn');
const form = document.querySelector('.fixed-form');

closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    form.style.display = 'none';
});