(function($){
  $(function(){

    $('.button-collapse').sideNav();
    
    
    var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
    
    if(!iOS)
      $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
