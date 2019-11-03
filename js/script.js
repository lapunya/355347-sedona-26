var interestBtn = document.querySelector('.interest-btn');
var searchForm = document.querySelector('.search-form');

interestBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  searchForm.classList.remove('search-form');
  searchForm.classList.add('search-form-hidden');
});