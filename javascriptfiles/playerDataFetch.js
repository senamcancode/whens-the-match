fetch('/playerData.json')
    .then(response => response.json())
    .then(data => {
        const players = data.players;
        const playersContainer = document.getElementById("player__lineup");
        for (let i = 0; i < players.length; i++) {
            playersContainer.innerHTML += `${players[i].name}`;
        }
    })
    .catch(error => console.error(error));




