import axios from "axios";
import "./Container.css";
import { useState } from "react";

export default function Container({ className = "" }) {

    var date = new Date();
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    // var today = `${year}-${month}-${day}`;
    var today = "2025-05-08";
    
    // sessionStorage.getItem("AwayTeamNameCL") == undefined

    if (true) {
        // il y une limite de 100 call par jour, donc on call 1 fois puis on stock dans sessionStorage
        axios({
            method: "get",
            headers: { "X-Auth-Token": "93d6121a8813417785020f8bc7dfcdfa" },
            url: `https://api.football-data.org/v4/competitions/CL/matches`,
            responseType: "json"
        }).then(function (response) {
            for (let i = 0; i < 190; i++) {
                if (response.data.matches[i].utcDate.includes(today) && response.data.matches[i].awayTeam.shortName != undefined) {

                    sessionStorage.setItem("AwayTeamNameCL", response.data.matches[i].awayTeam.tla);
                    sessionStorage.setItem("HomeTeamNameCL", response.data.matches[i].homeTeam.tla);

                    sessionStorage.setItem("AwayTeamCrestCL", response.data.matches[i].awayTeam.crest);
                    sessionStorage.setItem("HomeTeamCrestCL", response.data.matches[i].homeTeam.crest);

                    sessionStorage.setItem("MatchStatusCL", response.data.matches[i].status);
                    sessionStorage.setItem("MatchStageCL", response.data.matches[i].stage);

                    sessionStorage.setItem("AwayTeamScoreCL", response.data.matches[i].score.fullTime.away);
                    sessionStorage.setItem("HomeTeamScoreCL", response.data.matches[i].score.fullTime.home);

                    if (awayTeamScore > homeTeamScore) {
                        document.getElementById("awayTeamScore").style.textDecoration = "underline";
                    } else if (awayTeamScore < homeTeamScore) {
                        document.getElementById("homeTeamScore").style.textDecoration = "underline";
                    }
                } else { // 168 - 171
                    console.log(response.data.matches[168]);
                }
            }
        })
    }

    if (className == "fifa-cl") {
        return (
            <div className="sport-container-root">
                <div className="sport-container">
                    <h2>{sessionStorage.getItem("AwayTeamNameCL")}</h2>
                    <p>{sessionStorage.getItem("MatchStageCL")}</p>
                    <h2>{sessionStorage.getItem("HomeTeamNameCL")}</h2>

                    <img alt={sessionStorage.getItem("AwayTeamNameCL")} src={sessionStorage.getItem("AwayTeamCrestCL")} />
                    <h2>VS</h2>
                    <img alt={sessionStorage.getItem("HomeTeamNameCL")} src={sessionStorage.getItem("HomeTeamCrestCL")} />

                    <h2 id="awayTeamScore">{sessionStorage.getItem("AwayTeamScoreCL")}</h2>
                    <p style={{ color: "yellow" }}>{sessionStorage.getItem("MatchStatusCL")}</p>
                    <h2 id="homeTeamScore">{sessionStorage.getItem("HomeTeamScoreCL")}</h2>
                </div>
            </div>
        );
    }
}