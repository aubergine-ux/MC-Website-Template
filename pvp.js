fetch('https://api.mcsrvstat.us/3/play.blank.pvp')
    .then(res => res.json())
    .then(data => {
        document.getElementByID('count').textContent = data.players.online;
    });