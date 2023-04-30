// inspiration for this was taking from this gitpost https://gist.github.com/DavidWells/10708a5be3e5b5e29f13



const fixtureDiv = document.getElementById("fixture__text").style.textAlign = "center"; 


checkMatchDate() 

function checkMatchDate() {
    if (liverpoolMatch()) {
        document.getElementById("fixture__text").textContent = "Arsenal are playing Liverpool (A) today at 16:30 BST / 17:30 CEST #COYG"; 
        document.getElementById("notplaying").style.display='none'; 
    }
        
    if(westhamMatch()){
      document.getElementById("westham").textContent ='Arsenal are playing West Ham (A) today at 14:00 BST / 15:00 CEST #COYG'; 
      document.getElementById("notplaying").style.display='none'; 

    }  

    if(southamptonMatch()){
      document.getElementById("southampton").textContent ='Arsenal are playing Southampton (H) today at20:00 BST / 21:00 CEST';
      document.getElementById("notplaying").style.display='none'; 
    }

    if(mancityMatch()){
        document.getElementById("fixture__text").textContent = "Arsenal are playing Man City (A) today at 20:00 BST / 21:00  CEST"; 
        document.getElementById("notplaying").style.display='none'; 
    }

    if(chelseaMatch()){
        document.getElementById("chelsea").textContent =' Arsenal are playing Chelsea  (H) today at17:30 BST / 18:30 CEST #COYG';
        document.getElementById("notplaying").style.display='none'; 
    }

    if(newcastleMatch()){
        document.getElementById("newcastle").textContent ='Arsenal are playing Newcastle (A) today at16:30 BST / 17:30 CEST #COYG';
        document.getElementById("notplaying").style.display='none'; 
    }
  
    if(brightonMatch()){
        document.getElementById("brighton").textContent ='Arsenal are playing Brighton (H) today at15:00 BST / 16:00 CEST';
        document.getElementById("notplaying").style.display='none'; 
    }
      

    if(forrestMatch()){
        document.getElementById("forrest").textContent ='Forest (A) today at 15:00 BST / 16:00 CEST #COYG';
        document.getElementById("notplaying").style.display='none'; 
    }

    if(wolvesMatch()){
        document.getElementById("wolves").textContent ='Wolves (H) today at 16:30 BST / 17:30 CEST #COYG';
        document.getElementById("notplaying").style.display='none'; 
    }
}

function liverpoolMatch() {
  let liverpoolFixtureDate = {
    month: 3,
    date: 9
  };
  let now = new Date();
  return (now.getMonth() == liverpoolFixtureDate.month && now.getDate() == liverpoolFixtureDate.date);
}


function westhamMatch() {
  let westham ={
      month: 3,
      date: 16
  };    
  let now = new Date();
  return (now.getMonth() == westham.month && now.getDate() == westham.date);
  }


  function southamptonMatch() {
    let southampton ={
        month: 3,
        date: 21
    }    
    let now = new Date();
    return (now.getMonth() == southampton.month && now.getDate() == southampton.date);
  }

  function mancityMatch() {
    let mancity ={
        month: 3,
        date: 26
    }    
    let now = new Date();
    return (now.getMonth() == mancity.month && now.getDate() == mancity.date);
  }

  function chelseaMatch() {
    let chelsea ={
        month: 3,
        date: 29
    }    
    let now = new Date();
    return (now.getMonth() == chelsea.month && now.getDate() == chelsea.date);
  }

  function newcastleMatch() {
    let newcastle ={
        month: 4,
        date: 7
    }    
    let now = new Date();
    return (now.getMonth() == newcastle.month && now.getDate() == newcastle.date);
  }

  function brightonMatch() {
    let brighton ={
        month: 4,
        date: 14
    }    
    let now = new Date();
    return (now.getMonth() == brighton.month && now.getDate() == brighton.date);
  }

  function forrestMatch() {
    let forrest ={
        month: 4,
        date: 20
    }    
    let now = new Date();
    return (now.getMonth() == forrest.month && now.getDate() == forrest.date);
  }

  function wolvesMatch() {
    let wolves ={
        month: 4,
        date: 28
    }    
    let now = new Date();
    return (now.getMonth() == wolves.month && now.getDate() == wolves.date);
  }
