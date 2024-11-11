const hrs = document.getElementById('hrs');
const mins = document.getElementById('min');
const secs = document.getElementById('sec')

setInterval(setClock, 1000)
function setClock(){
    let currentTime = new Date();

    hrs.innerHTML = ( currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}
    

