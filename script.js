let menuVisible = false
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //ocultar el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//funcion q aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss"); 
        habilidades[1].classList.add("git"); 
        habilidades[2].classList.add("javascript"); 
        habilidades[3].classList.add("python"); 
        habilidades[4].classList.add("java"); 
        habilidades[5].classList.add("comunicacion"); 
        habilidades[6].classList.add("trabajo"); 
        habilidades[7].classList.add("creatividad"); 
        habilidades[8].classList.add("dedicacion"); 
        habilidades[9].classList.add("conocimiento"); 
        }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
}