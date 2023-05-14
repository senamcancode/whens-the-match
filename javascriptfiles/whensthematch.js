// inspiration for this was taken from this gitpost https://gist.github.com/DavidWells/10708a5be3e5b5e29f13


const fixtureDiv = document.getElementById("fixture__text").style.textAlign = "center";
const countdownDiv = document.getElementById("countdown__container").style.textAlign = "center";


function liverpoolMatch() {
  let liverpoolFixtureDate = {
    month: 3,
    date: 9,
    timeBST: "16:30"
  };
  let now = new Date();
  return (now.getMonth() == liverpoolFixtureDate.month && now.getDate() == liverpoolFixtureDate.date);
}


function westhamMatch() {
  let westham = {
    month: 3,
    date: 16,
    timeBST: "14:00"
  };
  let now = new Date();
  return (now.getMonth() == westham.month && now.getDate() == westham.date);
}


function southamptonMatch() {
  let southampton = {
    month: 3,
    date: 21,
    timeBST: "20:00"
  }
  let now = new Date();
  return (now.getMonth() == southampton.month && now.getDate() == southampton.date);
}

function mancityMatch() {
  let mancity = {
    month: 3,
    date: 26,
    timeBST: "20:00"
  }
  let now = new Date();
  return (now.getMonth() == mancity.month && now.getDate() == mancity.date);
}

function chelseaMatch() {
  let chelsea = {
    month: 4,
    date: 2,
    timeBST: "20:00"
  }
  let now = new Date();
  return (now.getMonth() == chelsea.month && now.getDate() == chelsea.date);
}

function newcastleMatch() {
  let newcastle = {
    month: 4,
    date: 7,
    timeBST: "16:30"
  }
  let now = new Date();
  return (now.getMonth() == newcastle.month && now.getDate() == newcastle.date);
}

function brightonMatch() {
  let brighton = {
    month: 4,
    date: 14,
    timeBST: "16:30"
  }
  let now = new Date();
  return (now.getMonth() == brighton.month && now.getDate() == brighton.date);
}

function forrestMatch() {
  let forrest = {
    month: 4,
    date: 20,
    timeBST: "17:30"
  }
  let now = new Date();
  return (now.getMonth() == forrest.month && now.getDate() == forrest.date);
}

function wolvesMatch() {
  let wolves = {
    month: 4,
    date: 28,
    timeBST: "16:30"
  }
  let now = new Date();
  return (now.getMonth() == wolves.month && now.getDate() == wolves.date);
}



function displayFixture(teamName, hours, minutes) {
  document.getElementById("fixture__text").innerHTML = `Arsenal are playing ${teamName} today at ${hours}:${minutes} BST / ${hours + 1}:${minutes} CEST`;
  document.getElementById("countdown__container").style.display = "block";
}

function notPlaying() {
  document.getElementById("fixture__text").innerHTML = ` Arsenal are not playing any teams today <br> Click <span><a href="https://www.arsenal.com/fixtures?field_arsenal_team_target_id=1&field_competition_target_id=3958&field_home_away_or_neutral_value=All&field_tv_channel_target_id=All&revision_information= 
    " target=”_blank”>
    here </a></span> for a full fixture list`
}



function checkMatchDate() {
  if (liverpoolMatch()) {
    displayFixture("Liverpool (A)", 16, "30");
  }

  else if (westhamMatch()) {
    displayFixture("West Ham (A)", 14, "00");
  }

  else if (southamptonMatch()) {
    displayFixture("Southampton (H)", 20, "00");
  }

  else if (mancityMatch()) {
    displayFixture("Man City (A)", 20, "00");
  }

  else if (chelseaMatch()) {
    displayFixture("Chelsea (H)", 20, "00");
  }

  else if (newcastleMatch()) {
    displayFixture("Newcastle (A)", 16, "30");
  }

  else if (brightonMatch()) {
    displayFixture("Brighton (H)", 16, "30");

  }

  else if (forrestMatch()) {
    displayFixture("Nott' Forrest (A)", 17, "30");
  }

  else if (wolvesMatch()) {
    displayFixture("Wolves (H)", 16, "30");
  }

  else {
    notPlaying();
  }
}



//currently matchCountdown is only for the last 5 Arsenal matches 

function displayGamePlayed(teamName, hours, minutes) {
  document.getElementById("fixture__text").innerHTML = `Arsenal played ${teamName} today at ${hours}:${minutes} BST / ${hours + 1}:${minutes} CEST`;
}


function matchCountdown() {

  if (chelseaMatch()) {
    var countDownDate = new Date("May 4, 2023 21:24:00").getTime();

    var interval = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance >= 0) {
        document.getElementById("countdown").style.color = "rgb(204, 53, 53)"
        document.getElementById("countdown").innerHTML = `${hours}h ${minutes}m ${seconds}s`;

      } else if (distance < 0 && distance >= -6300000) {
        document.getElementById("countdown").style.color = "rgb(204, 53, 53)"
        document.getElementById("countdown").innerHTML = "#COYG";
        document.getElementById("countdown__container").style.border = "thin solid rgb(204, 53, 53)";

      } else if (distance < -6300000 && distance > -840000000) {
        document.getElementById("countdown__container").style.display = "none";
        displayGamePlayed("Chelsea (H)", 20, "00")
      }


    }, 1000);
  };



  if (newcastleMatch()) {
    var countDownDate = new Date("May 7, 2023 16:30:00").getTime();

    var interval = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);


      if (distance >= 0) {
        document.getElementById("countdown").style.color = "rgb(204, 53, 53)"
        document.getElementById("countdown").innerHTML = `${hours}h ${minutes}m ${seconds}s`;

      } else if (distance < 0 && distance > -6300000) {
        document.getElementById("countdown").style.color = "rgb(204, 53, 53)"
        document.getElementById("countdown").innerHTML = "#COYG";
        document.getElementById("countdown__container").style.border = "thin solid rgb(204, 53, 53)";

      } else if (distance < -6300000 && distance > -840000000) {
        document.getElementById("countdown__container").style.display = "none";
        displayGamePlayed("Newcastle (A)", 16, "30")
      }

    }, 1000);
  };

  if (brightonMatch()) {
    var countDownDate = new Date("May 14, 2023 16:30:00").getTime();

    var interval = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);


      if (distance >= 0) {
        document.getElementById("countdown").style.color = "rgb(204, 53, 53)"
        document.getElementById("countdown").innerHTML = `${hours}h ${minutes}m ${seconds}s`;

      } else if (distance < 0 && distance > -6300000) {
        document.getElementById("countdown").style.color = "rgb(204, 53, 53)"
        document.getElementById("countdown").innerHTML = "#COYG";
        document.getElementById("countdown__container").style.border = "thin solid rgb(204, 53, 53)";

      } else if (distance < -6300000 && distance > -840000000) {
        document.getElementById("countdown__container").style.display = "none";
        displayGamePlayed("Brighton (H)", 16, "30")
      }
    }, 1000);
  };

  if (forrestMatch()) {
    var countDownDate = new Date("May 20, 2023 16:30:00").getTime();

    var interval = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);


      if (distance >= 0) {
        document.getElementById("countdown").style.color = "rgb(204, 53, 53)"
        document.getElementById("countdown").innerHTML = `${hours}h ${minutes}m ${seconds}s`;

      } else if (distance < 0 && distance > -6300000) {
        document.getElementById("countdown").style.color = "rgb(204, 53, 53)"
        document.getElementById("countdown").innerHTML = "#COYG";
        document.getElementById("countdown__container").style.border = "thin solid rgb(204, 53, 53)";

      } else if (distance < -6300000 && distance > 840000000) {
        document.getElementById("countdown__container").style.display = "none";
        displayGamePlayed("Nott' Forrest (A)", 17, "30")
      }

    }, 1000);
  };

  if (wolvesMatch()) {
    var countDownDate = new Date("May 28, 2023 16:30:00").getTime();

    var interval = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);


      if (distance >= 0) {
        document.getElementById("countdown").style.color = "rgb(204, 53, 53)"
        document.getElementById("countdown").innerHTML = `${hours}h ${minutes}m ${seconds}s`;

      } else if (distance < 0 && distance > -6300000) {
        document.getElementById("countdown").style.color = "rgb(204, 53, 53)"
        document.getElementById("countdown").innerHTML = "#COYG";
        document.getElementById("countdown__container").style.border = "thin solid rgb(204, 53, 53)";

      } else if (distance < -6300000 && distance > -840000000) {
        document.getElementById("countdown__container").style.display = "none";
        displayGamePlayed("Wolves (H)", 16, "30")
      }

    }, 1000);
  };
};


checkMatchDate()
matchCountdown()



