let login = document.getElementById("login"); 
let registro = document.getElementById("registro");
let formLogin = document.getElementById("form-login"); 
let formRegistro = document.getElementById("form-registro");
let imagenRegistro = document.getElementById("imagen");
let blurRegistro = document.getElementById("blur");
let tituloBarReg = document.getElementById("titulo");

document.getElementById("cambiar-registro").addEventListener("click", function(event) {
    event.preventDefault(); // Esto previene el comportamiento predeterminado del enlace
    mostrarRegistro();
});

document.getElementById("cambiar-login").addEventListener("click", function(event) {
    event.preventDefault(); // Esto previene el comportamiento predeterminado del enlace
    mostrarLogin();
});

function mostrarLogin(){
    if (window.innerWidth <= 320){
        registro.style.transform = "translateY(-400%)";
        blurRegistro.style.transform = "translateX(50%)";
    }
    formRegistro.style.visibility="hidden";
    registro.style.visibility="hidden";
    formLogin.style.visibility="visible";
    login.style.visibility="visible";
    formLogin.style.transform = "translateX(0%)";
    login.style.transform = "translateX(0%)";
    imagenRegistro.style.transform = "translateX(0%)";
    blurRegistro.style.transform = "translateX(0%)";
    tituloBarReg.style.transform = "translateX(0%)";
    formRegistro.style.transform = "translateX(-400%)";
    registro.style.transform = "translateX(-50%)";
}

function mostrarRegistro(){
    formLogin.style.visibility="hidden";
    login.style.visibility="hidden";
    registro.style.visibility="visible";
    formRegistro.style.visibility="visible";
    imagenRegistro.style.transform = "translateX(-61%)";
    blurRegistro.style.transform = "translateX(-150%)";
    tituloBarReg.style.transform = "translateX(-305%)";
    formLogin.style.transform = "translateX(50%)";
    login.style.transform = "translateX(50%)";
    formRegistro.style.transform = "translateX(20%)";
    registro.style.transform = "translateX(0%)";
}