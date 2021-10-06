(function() {
const elem = document.querySelector('.products__info-item--list');


const controlls = document.querySelectorAll(".info-filter__btn");
const activeClass = "active";
controlls.forEach(function(control) {
control.addEventListener("click", function(e) {
e.preventDefault();
controlls.forEach(function(link) {
link.closest(".info-filter__list").classList.remove(activeClass);
})
control.closest(".info-filter__list").classList.add(activeClass);
})
})
})();