window.onscroll = function() {scrollFunction()};
const logo = document.getElementById('logo');
const cop = document.body;
const burg = document.getElementById('burg');
const menu = document.getElementById('box-menu');
const sun = document.getElementById('sun');
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "50px";
    logo.style.fontSize = "2rem"
    burg.style.top = '27px'
    menu.style.marginTop = '50px'
  } else {
    document.getElementById("header").style.height = "100px";
    logo.style.fontSize = "3rem"
    burg.style.top = '50%'
    menu.style.marginTop = '100px'
  }
}
const open_menu = () =>{
  menu.style.transform = 'translateX(0%)';
  burg.setAttribute('onclick', 'close_menu()');
}
const close_menu = () =>{
  menu.style.transform = 'translateX(-100%)';
  burg.setAttribute('onclick', 'open_menu()');
}
function artes(){
  window.location.href = "https://www.instagram.com/voncolage/"
}
function web(){
  window.location.href = "https://google.com"
}
function extras(){
  window.location.href = "https://www.youtube.com/channel/UC-9Du8a1oMoORZT-bVbIPsQ"
}
function butt_more(){
  window.location.href = "https://github.com/LiLGui"
}
// function bg_color_black() {
//   cop.style.background = 'var(--color-bg_two)';
//   sun.setAttribute('onclick', 'bg_color_white()');
// }
// const bg_color_white = () => {
//   cop.style.background = 'var(--color-bg)';
//   sun.setAttribute('onclick', 'bg_color_black()');
// }