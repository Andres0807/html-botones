var IDHome = document.getElementById("Home");
var ClassComputadora = document.querySelector(".computadora");
var IDComputer = document.getElementById("Computer");
var ClassTele = document.querySelector(".tele");
var ID_TV = document.getElementById("TV");
var ClassApps1 = document.querySelector(".apps1");
var ClassApps2 = document.querySelector(".apps2");
var ClassApps3 = document.querySelector(".apps3");
var ClassProgramasDeTV1 = document.querySelector(".programasDeTV1");
var ClassProgramasDeTV2 = document.querySelector(".programasDeTV2");
var ClassProgramasDeTV3 = document.querySelector(".programasDeTV3");
var IDNetflix = document.getElementById("Netflix");
var ID_TVCable = document.getElementById("TV-Cable");
var IDYoutube = document.getElementById("Youtube");
var IDesktop = document.getElementById("Desktop");
var IDGames = document.getElementById("Games");
var IDeveloper = document.getElementById("Developer");

IDHome.addEventListener("click", function(){
    IDHome.classList.add("rotarYChau");
    setTimeout(function(){IDHome.classList.remove("rotarYChau")}, 850);

    
    ClassComputadora.classList.toggle("compuCorre");
    ClassComputadora.classList.toggle("compu");
    IDComputer.classList.add("animacionCasa");

    ClassTele.classList.toggle("mostrarTV");
    ClassTele.classList.toggle("televisa");
    ID_TV.classList.add("animacionCasa");
    /*Cerrar de una*/
    ClassApps1.classList.remove("gamer");
    ClassApps1.classList.add("apli1");
    ClassApps1.classList.add("aplicasao1");
    setTimeout(function(){ClassApps1.classList.remove("aplicasao1")}, 500);

    ClassApps2.classList.remove("dev");
    ClassApps2.classList.add("apli2");
    ClassApps2.classList.add("aplicasao1");
    setTimeout(function(){ClassApps2.classList.remove("aplicasao1")}, 500);

    ClassApps3.classList.remove("escritorio");
    ClassApps3.classList.add("apli3");
    ClassApps3.classList.add("aplicasao1");
    setTimeout(function(){ClassApps3.classList.remove("aplicasao1")}, 500);
    
    ClassProgramasDeTV1.classList.remove("seriesYPeliculas");
    ClassProgramasDeTV1.classList.add("program1");
    ClassProgramasDeTV1.classList.add("programao1");
    setTimeout(function(){ClassProgramasDeTV1.classList.remove("programao1");}, 500);

    ClassProgramasDeTV2.classList.remove("cableTV");
    ClassProgramasDeTV2.classList.add("program2");
    ClassProgramasDeTV2.classList.add("programao1");
    setTimeout(function(){ClassProgramasDeTV2.classList.remove("programao1");}, 500);

    ClassProgramasDeTV3.classList.remove("plataformaRoja");
    ClassProgramasDeTV3.classList.add("program3");
    ClassProgramasDeTV3.classList.add("programao1");
    setTimeout(function(){ClassProgramasDeTV3.classList.remove("programao1");}, 500);
});


IDComputer.addEventListener("click", function(){
    IDComputer.classList.add("rotarYChau");
    setTimeout(function(){IDComputer.classList.remove("rotarYChau")}, 850);
    

    ClassApps1.classList.toggle("gamer");
    ClassApps1.classList.toggle("apli1");

    ClassApps2.classList.toggle("dev");
    ClassApps2.classList.toggle("apli2");

    ClassApps3.classList.toggle("escritorio");
    ClassApps3.classList.toggle("apli3");
});

ID_TV.addEventListener("click", function(){
    ID_TV.classList.add("rotarYChau");
    setTimeout(function(){ID_TV.classList.remove("rotarYChau")}, 850);
    
    ClassProgramasDeTV1.classList.toggle("seriesYPeliculas");
    ClassProgramasDeTV1.classList.toggle("program1");

    ClassProgramasDeTV2.classList.toggle("cableTV");
    ClassProgramasDeTV2.classList.toggle("program2");

    ClassProgramasDeTV3.classList.toggle("plataformaRoja");
    ClassProgramasDeTV3.classList.toggle("program3");
});

IDNetflix.addEventListener("mouseover", function(){
    IDNetflix.classList.add("fondoNefli");
    document.querySelector(".nefi").classList.add("Escriti2");
    IDNetflix.classList.add("animacionCasa");
});
IDNetflix.addEventListener("mouseout", function (){
    IDNetflix.classList.remove("fondoNefli");
    document.querySelector(".nefi").classList.remove("Escriti2");
    IDNetflix.classList.remove("animacionCasa");
});

ID_TVCable.addEventListener("mouseover", function(){
    ID_TVCable.classList.add("fondoTV");
    document.querySelector(".cabli").classList.add("Escriti2");
    ID_TVCable.classList.add("animacionCasa");
});
ID_TVCable.addEventListener("mouseout", function (){
    ID_TVCable.classList.remove("fondoTV");
    document.querySelector(".cabli").classList.remove("Escriti2");
    ID_TVCable.classList.remove("animacionCasa");
});

IDYoutube.addEventListener("mouseover", function(){
    IDYoutube.classList.add("fondoYotube");
    document.querySelector(".Yotube").classList.add("Escriti2");
    IDYoutube.classList.add("animacionCasa");
});
IDYoutube.addEventListener("mouseout", function (){
    IDYoutube.classList.remove("fondoYotube");
    document.querySelector(".Yotube").classList.remove("Escriti2");
    IDYoutube.classList.remove("animacionCasa");
});

IDesktop.addEventListener("mouseover", function(){
    IDesktop.classList.add("fondoDesk");
    document.querySelector(".Escriti").classList.add("Escriti2");
    IDesktop.classList.add("animacionCasa");
});
IDesktop.addEventListener("mouseout", function (){
    IDesktop.classList.remove("fondoDesk");
    document.querySelector(".Escriti").classList.remove("Escriti2");
    IDesktop.classList.remove("animacionCasa");
});

IDGames.addEventListener("mouseover", function(){
    IDGames.classList.add("gamesFondo");
    document.querySelector(".Gaming").classList.add("gameBooming");
    IDGames.classList.add("animacionCasa");
});
IDGames.addEventListener("mouseout", function(){
    IDGames.classList.remove("gamesFondo");
    document.querySelector(".Gaming").classList.remove("gameBooming");
    IDGames.classList.remove("animacionCasa");
});

IDeveloper.addEventListener("mouseover", function(){
    IDeveloper.classList.add("fondoDev");
    document.querySelector(".Developing").classList.add("apareceDevFondo");
    IDeveloper.classList.add("animacionCasa");
});
IDeveloper.addEventListener("mouseout", function(){ 
    IDeveloper.classList.remove("fondoDev");
    document.querySelector(".Developing").classList.remove("apareceDevFondo");
    IDeveloper.classList.remove("animacionCasa");
});

