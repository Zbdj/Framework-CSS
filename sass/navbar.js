(function($) {
    $(function() {
      $('nav ul li > a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      //Cacher menu click
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
    });
  })(jQuery);