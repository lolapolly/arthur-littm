function logoScroll() {
  $('.logo-scroll').hover(
    function() {
      $( '#logo-target' ).html( "<i class='fa fa-angle-double-up'></i>" ).addClass("logo-icon");
    }, function() {
      $( '#logo-target' ).text( "a" ).removeClass("logo-icon");
    }
  );
}
