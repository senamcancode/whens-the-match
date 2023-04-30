var end = new Date('30/04/2023 18:00 BST'); 
var second = 1000; 
var minute = second * 60; 
var hour = minute * 60; 
var day = hour * 24; 
var timer; 

function showRemaining(){
    var now = new Date(); 
    var distance = end - now; 

    if (distance < 0 ){
        clearInterval(timer); 
        document.getElementById('countdown').innerHTML = "finished"

        return; 
    }
}

var days = Math.floor(distance / day); 
var hours = Math.floor((distance % day) / hour); 
var minutes = Math.floor ((distance % hour) / minute); 
var seconds = Math.floor((distance % minute) / second)

if(distance < 86400000){
    document.gelElementById('countdown').innerHTML = days + ':'; 
    document.gelElementById('countdown').innerHTML = hours + ':'; 
    document.gelElementById('countdown').innerHTML = minutes + ':'; 
    document.gelElementById('countdown').innerHTML = seconds + ':'; 
}

timer = setInterval(showRemaining, 1000); 