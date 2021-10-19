const menu = document.getElementById("open-menu");
const butao = document.getElementById('buu');

const openii = () =>{
    menu.style.transform = "translateX(0px)";
    butao.setAttribute('onclick', 'fecha()')
}

const fecha = () => {
    menu.style.transform = "translateX(-400px)";
    butao.setAttribute('onclick', 'openii()')
}