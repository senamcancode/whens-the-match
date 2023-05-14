fetch('/gameResults.json')
    .then(response => response.json())
    .then(data => {
        const results = data.results;
        const opponentGoalsScored = document.getElementById("opponent__goals");
        for (let i = results.length - 1; i < results.length; i++) {
            opponentGoalsScored.innerHTML += `${results[i].opponent_goals}`;
        }

        const arsenalGoalsScored = document.getElementById("arsenal__goals");
        for (let i = results.length - 1; i < results.length; i++) {
            arsenalGoalsScored.innerHTML += `${results[i].arsenal_goals}`
        }

        const opponentImage = document.createElement('img')
        opponentImage.id = "opponent__score__logo";
        for (let i = results.length - 1; i < results.length; i++) {
            opponentImage.src = `${results[i].opponent_logo}`
            document.querySelector('#opponent').appendChild(opponentImage)
        }

    })
    .catch(error => console.error(error));