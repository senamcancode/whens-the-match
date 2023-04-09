// write a function that gets the date and time 
// if the date is equal to any of the game dates return arsenal are playing at x time today 
// if the date is not equal to any of the game dates return arsenal are not playing today 
// write code that tells the user when the next time arsenal are playing 

// const date = new Date();

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// // This arrangement can be altered based on how we want the date's format to appear.
// let currentDate = `${day}-${month}-${year}`;
// console.log(currentDate); // "17-6-2022"

// function displayFixture(){
//     if (currentDate === "26-3-2023"){
//         console.log("That's today!!!")
//     }
// }


// below we could do a date check to see if its any of the dates provided in teh fixture list!!!! 

const liverpoolFixture = {
    month: 3,
    date: 9
  }

const westhamFixture = {
    month: 3, 
    date: 16
}
const southhamptonFixture = {
    month: 3, 
    date: 21
}

const mancityFixture = {
    month: 3, 
    date: 26
}

const chelseaFixture = {
    month: 3, 
    date: 29
}




//stopped at man city so still have to input chelsea




//   function isItAprilFoolDay() {
//     var now = new Date();
//     return (now.getMonth() == aprilFools.month && now.getDate() == aprilFools.date);
//   }
  
//   if(isItAprilFoolDay()){
//     console.log("todays date is 3/4/23"); 
//   } else {
//     // there is less fake stuff today
//   }
