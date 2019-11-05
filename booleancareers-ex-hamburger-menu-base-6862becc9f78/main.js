$( document ).ready(function() {

  // Creare un hamburger menu con l’utilizzo di Html,
  // Css e JavaScript.

  // provo ad aggiungere una classe
  $( ".header-right > a" ).addClass("menu");

  // al click dell hamburger faccio aprire il menu

  $(".menu").on({
    click : function() {
      $(".hamburger-menu").show(1000);
    }
  })
  // al click dell x faccio chiudere il menu
  $(".close").click(function(){
    $(".hamburger-menu").hide(1000);
  })






});
