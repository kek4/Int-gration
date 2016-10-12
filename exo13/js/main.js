$(document).ready(function() {
   $( '#burgerButton' ).click(function(){
      if ($('#burgerButton').hasClass('is-active')) {
         $('#burgerButton').removeClass('is-active')
         $('.responsiveMenu').removeClass('expand')
      }else {
         $('#burgerButton').addClass('is-active')
         $('.responsiveMenu').addClass('expand')
      }
   })
})
