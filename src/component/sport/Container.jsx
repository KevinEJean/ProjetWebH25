import axios from "axios";
import "./Container.css";
import { useState } from "react";

export default function Container({ className = "" }) {

    const [awayTeamName, setAwayTeamName] = useState("N/A");
    const [awayTeamScore, setAwayTeamScore] = useState("N/A");
    const [awayTeamCrest, setAwayTeamCrest] = useState();

    const [matchStage, setMatchStage] = useState("This may take some time...");
    const [matchStatus, setMatchStatus] = useState("Please be patient...");

    const [homeTeamName, setHomeTeamName] = useState("N/A");
    const [homeTeamScore, setHomeTeamScore] = useState("N/A");
    const [homeTeamCrest, setHomeTeamCrest] = useState();

    var date = new Date();
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    var today = `${year}-${month}-${day}`;

    axios({
        method: "get",
        headers: { "X-Auth-Token": "93d6121a8813417785020f8bc7dfcdfa" },
        url: `https://api.football-data.org/v4/competitions/CL/matches`,
        responseType: "json"
    }).then(function (response) {
        for (let i = 0; i < 190; i++) {
            if (response.data.matches[i].utcDate.includes(today) && response.data.matches[i].awayTeam.shortName != undefined) {
                console.log(response.data.matches[i]); // test

                setAwayTeamName(response.data.matches[i].awayTeam.tla);
                setHomeTeamName(response.data.matches[i].homeTeam.tla);

                setAwayTeamCrest(response.data.matches[i].awayTeam.crest);
                setHomeTeamCrest(response.data.matches[i].homeTeam.crest);

                setMatchStatus(response.data.matches[i].status);
                setMatchStage(response.data.matches[i].stage);

                setAwayTeamScore(response.data.matches[i].score.fullTime.away);
                setHomeTeamScore(response.data.matches[i].score.fullTime.home);
                
                if (awayTeamScore > homeTeamScore) {
                    document.getElementById("awayTeamScore").style.textDecoration = "underline";
                } else if (awayTeamScore < homeTeamScore) {
                    document.getElementById("homeTeamScore").style.textDecoration = "underline";
                }
            }
        }
    })

    if (className == "fifa") {
        return (
            <div className="fifa-container-root">
                <div className="fifa-container">
                    <h2 style={{ color: localStorage.getItem("Title-Colors") }}>{awayTeamName}</h2>
                    <p>{matchStage}</p>
                    <h2 style={{ color: localStorage.getItem("Title-Colors") }}>{homeTeamName}</h2>

                    <img alt={awayTeamName} src={awayTeamCrest} />
                    <h2>VS</h2>
                    <img alt={homeTeamName} src={homeTeamCrest} />

                    <h2 id="awayTeamScore">{awayTeamScore}</h2>
                    <p style={{color: "yellow"}}>{matchStatus}</p>
                    <h2 id="homeTeamScore">{homeTeamScore}</h2>
                </div>
            </div>
        );
    } else if (className == "nba") {
        return (
            <div>
                <h1>NBA</h1>
            </div>
        );
    }
}