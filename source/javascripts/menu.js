
$("#menu-link").on("click", function(e) {
  e.preventDefault();
  $(".menu-container").toggleClass('is-menu-open')
  $(".menu-content").toggleClass('is-content-open')
});
