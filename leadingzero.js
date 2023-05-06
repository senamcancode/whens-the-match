// function padToTwo(minutes){
//     if(minutes <= 9) {minutes = (`0${minutes}`).slice(-2);}
//     return minutes; 
//   }

//   function displayFixture(teamName, hours, strMinutes){
//     console.log(`Arsenal are playing ${teamName} today at ${hours}:${strMinutes} BST / ${hours + 1}:${strMinutes} CEST`) 
//   }

// displayFixture("Liverpool (A)", 16, padToTwo(00)); 


// function displayPlayedFixture(teamName, hours, minutes){
//       document.getElementById("fixture__text").innerHTML = `Arsenal played ${teamName} today at ${hours}:${minutes} BST / ${hours + 1}:${minutes} CEST`; 
//     }
//     displayPlayedFixture("Chelsea (H)", 20, 00); 

//     // else if (distance < -300000){
//     //     document.getElementById("countdown__container").style.display = "none"; 
//     //   }


// var countDownDate = new Date("May 1, 2023 00:59:00").getTime(); 

//       var interval = setInterval(function(){
//           var now = new Date().getTime(); 
//           var distance = countDownDate - now; 
      
//           //if distance is less than 24 hours then display the countdown 
//           // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//           var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//           var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//           var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
//           if (distance < 86400000){
//           document.getElementById("countdown").innerHTML = hours + "h " + minutes + "m " +seconds + "s "; 
//           }
      
//       },1000); 

