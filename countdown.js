var countDownDate = new Date("May 1, 2023 00:59:00").getTime(); 

var interval = setInterval(function(){
    var now = new Date().getTime(); 
    var distance = countDownDate - now; 

    //if distance is less than 24 hours then display the countdown 
    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 86400000){
    document.getElementById("countdown").innerHTML = hours + "h " + minutes + "m " +seconds + "s "; 
    }

},1000); 