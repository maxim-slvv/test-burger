//бургер меню
$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__btn').toggleClass('active');
        // $('.header__logo').animate({height: '25%'}).slideRight('ease');
        // можно потом использовать что бы демонстрировать что то
        // $('.header__logo').show("slide", { direction: "left" }, 100);
        //при открытом меню блокируем прокрутку страницы
        $('body').toggleClass('lock');

        // //если с открытым меню увеличить окно то бургер скроектся
        // if(windowWidth > 767.9)$(".header__burger, .header__link, .header__burger-menu, .checking").toggleClass('active');
    })
}); 

// growing.onclick = function() {
//     this.style.width = '1px';
//   };

// growing.onclick = function() {
    // this.style.fontSize = '36px';
    // $( ".header__btn" ).style.width = '50px';

    // $('.header__btn').toggle( "slide" );
   
//   };
//! сначала прячет меню
$( ".slide" ).toggle( "slide" , { direction: "left" }, 0);

  $( document ).click(function() {
   
    $( ".slide" ).toggle( "slide" , { direction: "left" }, 1000);
  });