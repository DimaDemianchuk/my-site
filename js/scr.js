(function($) {
  $(function() {
    $("ul.info-filter").on("click", "li:not(.active)", function() {
       event.preventDefault();
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.products__info")
        .find("div.products__info-item")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);