
 const segundosEl = document.getElementById("segundos");
 const minutosEl = document.getElementById("minutos");
 const horasEl = document.getElementById("horas");
 const diasEl = document.getElementById("dias");

 const NovoAno = '1 Jan 2023';

 function countdown() {
     const NovoAnoData = new Date(NovoAno);
     const DataAtual = new Date();

     const tempo = (NovoAnoData - DataAtual) / 1000;

     const dias = Math.floor(tempo / 3600 / 24);
     const horas = Math.floor(tempo / 3600) % 24;
     const minutos = Math.floor(tempo / 60) % 60;
     const segundos = Math.floor(tempo) % 60;

     diasEl.innerHTML = dias;
     minutosEl.innerHTML = minutos;
     horasEl.innerHTML = horas;
     segundosEl.innerHTML = segundos;
 }

 //Pode ignorar
 function FormataTempo(tempo) {
     return tempo < 10 ? ('0${tempo}') : tempo; 
 }

 // Começo da call
 countdown();

setInterval(countdown, 1000)

