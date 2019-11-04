var interestBtn = document.querySelector('.interest-btn');
var searchForm = document.querySelector('.search-form');
var inDate = searchForm.querySelector('.in-checkin');
var outDate = searchForm.querySelector('.in-checkout');

searchForm.classList.add('search-form-hidden');

interestBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  searchForm.classList.toggle('search-form-hidden');
});

searchForm.addEventListener('submit', function (evt) {
  if (!inDate.value || !outDate.value) {
    evt.preventDefault();
    searchForm.classList.remove('search-form-error');
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add('search-form-error');
  }
});