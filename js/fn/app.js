var score_inital = 1390;
var calculeScore = function (nbWin, nbKills) {
    return nbWin * 10 + nbKills;
}

document.getElementById('btn').addEventListener('click', function (e) {
    e.preventDefault();
    var nickname = document.getElementById('nickname').value;
    if (nickname) {
        var url = "https://fortnite.y3n.co/v2/player/" + nickname;
        ajaxGet(url, function (reponse) {
            if (reponse == 404) {
                console.log("Erreur réseau");
            }
            var br = JSON.parse(reponse);
            document.querySelector("#pseudo").innerHTML = br.displayName;

            var datas = br.br.stats.pc;
            /* PARTIE GENERALE */

            if (br.br.stats.ps4 && (br.br.stats.ps4.all.kills > datas.all.kills)) {
                datas = br.br.stats.ps4;
            } else if (br.br.stats.xb1 && (br.br.stats.xb1.all.kills > datas.pc.all.kills)) {
                datas = br.br.stats.xb1;
            }
            var kills = datas.all.kills;
            var wins = datas.all.wins;
           
            /* Partie HTML */
            document.querySelector("#nbmatch_general").innerHTML = datas.all.matchesPlayed;
            document.querySelector("#kills_general").innerHTML = kills;
            document.querySelector("#wins_general").innerHTML = wins;
            document.querySelector("#winrate_general").innerHTML = datas.all.winRate;
            document.querySelector("#kd_general").innerHTML = datas.all.kpd;
            document.querySelector("#score").innerHTML = calculeScore(wins, kills);
            document.querySelector("#temps").innerHTML = Math.floor(datas.all.minutesPlayed / 60) + ":" + Math.floor(datas.all.minutesPlayed % 60);

            /* SOLO */
            kills = datas.solo.kills;
            wins = datas.solo.wins;
            document.querySelector("#nbmatch_solo").innerHTML = datas.solo.matchesPlayed;
            document.querySelector("#kills_solo").innerHTML = kills;
            document.querySelector("#wins_solo").innerHTML = wins;
            document.querySelector("#winrate_solo").innerHTML = datas.solo.winRate;
            document.querySelector("#kd_solo").innerHTML = datas.solo.kpd;
            document.querySelector("#score_solo").innerHTML = calculeScore(wins, kills);

            /* DUO */
            kills = datas.duo.kills;
            wins = datas.duo.wins;
            document.querySelector("#nbmatch_duo").innerHTML = datas.duo.matchesPlayed;
            document.querySelector("#kills_duo").innerHTML = kills;
            document.querySelector("#wins_duo").innerHTML = wins;
            document.querySelector("#winrate_duo").innerHTML = datas.duo.winRate;
            document.querySelector("#kd_duo").innerHTML = datas.duo.kpd;
            document.querySelector("#score_duo").innerHTML = calculeScore(wins, kills);

            /* SQUAD */
            kills = datas.squad.kills;
            wins = datas.squad.wins;
            document.querySelector("#nbmatch_squad").innerHTML = datas.squad.matchesPlayed;
            document.querySelector("#kills_squad").innerHTML = kills;
            document.querySelector("#wins_squad").innerHTML = wins;
            document.querySelector("#winrate_squad").innerHTML = datas.squad.winRate;
            document.querySelector("#kd_squad").innerHTML = datas.squad.kpd;
            document.querySelector("#score_squad").innerHTML = calculeScore(wins, kills);
        });
    }
}); 