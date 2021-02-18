
let video = document.getElementById("video1");
/* onmouseover passar mouse por cima 
 onover tirar o mouse*/
function retroceder(){

    video.currentTime -= 10;
}
function avancar(){

    video.currentTime += 10;
}
function played(){

    video.play()

    pausar = Document.getElementById("playPause")
    pausar =  'img class="boton" id="pausePlay" onclick="pause()" src="./imagens/pause.svg"'
    Document.getElementById("playPause") = pausar;
    
}
function paused(){
    
    video.pause()

    let player = Document.getElementById("pausePlay")
    player =  '<img class="boton" id="playPause" onclick="play()" src="./imagens/play.svg"/>'
    Document.getElementById("pausePlay") = player;
}
function aumentarVel(){

   video.playbackRate += 0.3;
}
function diminuirVel(){

    video.playbackRate -= 0.3;
}
function pause(){
    video.pause()
}