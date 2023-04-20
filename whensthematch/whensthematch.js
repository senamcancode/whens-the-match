// inspiration for this was taking from this gitpost https://gist.github.com/DavidWells/10708a5be3e5b5e29f13


checkMatchDate() 

function checkMatchDate() {
    function liverpoolMatchDay() {
      let liverpoolFixtureDate = {
        month: 3,
        date: 9
      };
      let now = new Date();
      return (now.getMonth() == liverpoolFixtureDate.month && now.getDate() == liverpoolFixtureDate.date);
    }
  
    if (liverpoolMatchDay()) {
        document.getElementById("liverpool").style.display ='block'; 
        document.getElementById("notplaying").style.display='none'; 
    }

    function westhamMatch() {
        let westham ={
            month: 3,
            date: 16
        };    
        let now = new Date();
        return (now.getMonth() == westham.month && now.getDate() == westham.date);
        }
        
        if(westhamMatch()){
            document.getElementById("westham").style.display ='block'; 
            document.getElementById("notplaying").style.display='none'; 

    }  

    
  function southamptonMatch() {
        let southampton ={
            month: 3,
            date: 21
        }    
        let now = new Date();
        return (now.getMonth() == southampton.month && now.getDate() == southampton.date);
      }

      if(southamptonMatch()){
        document.getElementById("southampton").style.display ='block';
        document.getElementById("notplaying").style.display='none'; 
      }


  function mancityMatch() {
        let mancity ={
            month: 3,
            date: 26
        }    
        let now = new Date();
        return (now.getMonth() == mancity.month && now.getDate() == mancity.date);
      }

      if(mancityMatch()){
        document.getElementById("mancity").style.display ='block';
        document.getElementById("notplaying").style.display='none'; 
      }
  function chelseaMatch() {
        let chelsea ={
            month: 3,
            date: 29
        }    
        let now = new Date();
        return (now.getMonth() == chelsea.month && now.getDate() == chelsea.date);
      }

      if(chelseaMatch()){
        document.getElementById("chelsea").style.display ='block';
        document.getElementById("notplaying").style.display='none'; 
      }
  function newcastleMatch() {
        let newcastle ={
            month: 4,
            date: 7
        }    
        let now = new Date();
        return (now.getMonth() == newcastle.month && now.getDate() == newcastle.date);
      }

      if(newcastleMatch()){
        document.getElementById("newcastle").style.display ='block';
        document.getElementById("notplaying").style.display='none'; 
      }
  function brightonMatch() {
        let brighton ={
            month: 4,
            date: 14
        }    
        let now = new Date();
        return (now.getMonth() == brighton.month && now.getDate() == brighton.date);
      }

      if(brightonMatch()){
        document.getElementById("brighton").style.display ='block';
        document.getElementById("notplaying").style.display='none'; 
      
  function forrestMatch() {
        let forrest ={
            month: 4,
            date: 20
        }    
        let now = new Date();
        return (now.getMonth() == forrest.month && now.getDate() == forrest.date);
      }

      if(forrestMatch()){
        document.getElementById("forrest").style.display ='block';
        document.getElementById("notplaying").style.display='none'; 
      }
  function wolvesMatch() {
        let wolves ={
            month: 4,
            date: 28
        }    
        let now = new Date();
        return (now.getMonth() == wolves.month && now.getDate() == wolves.date);
      }

      if(wolvesMatch()){
        document.getElementById("wolves").style.display ='block';
        document.getElementById("notplaying").style.display='none'; 
      }
    }
}





