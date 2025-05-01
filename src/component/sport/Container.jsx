import axios from "axios";
import "./Container.css";
import { useState } from "react";

export default function Container({ className = "" }) {

    var date = new Date();
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    var today = `${year}-${month}-${day}`;


    if (localStorage.getItem("AwayTeamNameCL") == undefined) {
        // il y une limite de 100 call par jour, donc on call 1 fois puis on stock dans localStorage
        axios({
            method: "get",
            headers: { "X-Auth-Token": "93d6121a8813417785020f8bc7dfcdfa" },
            url: `https://api.football-data.org/v4/competitions/CL/matches`,
            responseType: "json"
        }).then(function (response) {
            for (let i = 0; i < 190; i++) {
                if (response.data.matches[i].utcDate.includes(today) && response.data.matches[i].awayTeam.shortName != undefined) {

                    localStorage.setItem("AwayTeamNameCL", response.data.matches[i].awayTeam.tla);
                    localStorage.setItem("HomeTeamNameCL", response.data.matches[i].homeTeam.tla);

                    localStorage.setItem("AwayTeamCrestCL", response.data.matches[i].awayTeam.crest);
                    localStorage.setItem("HomeTeamCrestCL", response.data.matches[i].homeTeam.crest);

                    localStorage.setItem("AwayTeamScoreCL", response.data.matches[i].score.fullTime.away);
                    localStorage.setItem("HomeTeamScoreCL", response.data.matches[i].score.fullTime.home);

                    localStorage.setItem("MatchStatusCL", response.data.matches[i].status);
                    localStorage.setItem("MatchStageCL", response.data.matches[i].stage);

                    if (awayTeamScore > homeTeamScore) {
                        document.getElementById("awayTeamScore").style.textDecoration = "underline";
                    } else if (awayTeamScore < homeTeamScore) {
                        document.getElementById("homeTeamScore").style.textDecoration = "underline";
                    }
                    break;
                } else {
                    if (localStorage.getItem("AwayTeamName1") == undefined) {
                        let index = 1;
                        for (let n = 168; n < 172; n++) {
                            localStorage.setItem(`AwayTeamName${index}`, response.data.matches[n].awayTeam.tla);
                            localStorage.setItem(`HomeTeamName${index}`, response.data.matches[n].homeTeam.tla);

                            localStorage.setItem(`AwayTeamCrest${index}`, response.data.matches[n].awayTeam.crest);
                            localStorage.setItem(`HomeTeamCrest${index}`, response.data.matches[n].homeTeam.crest);

                            localStorage.setItem(`AwayTeamScore${index}`, response.data.matches[n].score.fullTime.away);
                            localStorage.setItem(`HomeTeamScore${index}`, response.data.matches[n].score.fullTime.home);

                            localStorage.setItem(`MatchStatus${index}`, response.data.matches[n].status);
                            localStorage.setItem(`MatchStage${index++}`, response.data.matches[n].stage);
                        }
                    }
                }
                break;
            }
        })
    }

    if (className == "fifa-cl") {
        return (
            <div className="sport-container-root">
                <div className="sport-container">
                    <h2>{localStorage.getItem("AwayTeamNameCL")}</h2>
                    <p>{localStorage.getItem("MatchStageCL")}</p>
                    <h2>{localStorage.getItem("HomeTeamNameCL")}</h2>

                    <img alt={localStorage.getItem("AwayTeamNameCL")} src={localStorage.getItem("AwayTeamCrestCL")} />
                    <h2>VS</h2>
                    <img alt={localStorage.getItem("HomeTeamNameCL")} src={localStorage.getItem("HomeTeamCrestCL")} />

                    <h2 id="awayTeamScore">{localStorage.getItem("AwayTeamScoreCL")}</h2>
                    <p style={{ color: "yellow" }}>{localStorage.getItem("MatchStatusCL")}</p>
                    <h2 id="homeTeamScore">{localStorage.getItem("HomeTeamScoreCL")}</h2>
                </div>
            </div>
        );
    }

    if (className == "fifa-cl-test") {
        return (


            <>
                <div className="sport-container-root">
                    <div className="sport-container">
                        <h2>{localStorage.getItem("AwayTeamName1")}</h2>
                        <p>{localStorage.getItem("MatchStage1")}</p>
                        <h2>{localStorage.getItem("HomeTeamName1")}</h2>

                        <img alt={localStorage.getItem("AwayTeamName1")} src={localStorage.getItem("AwayTeamCrest1")} />
                        <h2>VS</h2>
                        <img alt={localStorage.getItem("HomeTeamName1")} src={localStorage.getItem("HomeTeamCrest1")} />

                        <h2 id="awayTeamScore">{localStorage.getItem("AwayTeamScore1")}</h2>
                        <p style={{ color: "yellow" }}>{localStorage.getItem("MatchStatus1")}</p>
                        <h2 id="homeTeamScore">{localStorage.getItem("HomeTeamScore1")}</h2>
                    </div>
                </div>






                <div className="sport-container-root">
                    <div className="sport-container">
                        <h2>{localStorage.getItem("AwayTeamName2")}</h2>
                        <p>{localStorage.getItem("MatchStage2")}</p>
                        <h2>{localStorage.getItem("HomeTeamName2")}</h2>

                        <img alt={localStorage.getItem("AwayTeamName2")} src={localStorage.getItem("AwayTeamCrest2")} />
                        <h2>VS</h2>
                        <img alt={localStorage.getItem("HomeTeamName2")} src={localStorage.getItem("HomeTeamCrest2")} />

                        <h2 id="awayTeamScore">{localStorage.getItem("AwayTeamScore2")}</h2>
                        <p style={{ color: "yellow" }}>{localStorage.getItem("MatchStatus2")}</p>
                        <h2 id="homeTeamScore">{localStorage.getItem("HomeTeamScore2")}</h2>
                    </div>
                </div>





                <div className="sport-container-root">
                    <div className="sport-container">
                        <h2>{localStorage.getItem("AwayTeamName3")}</h2>
                        <p>{localStorage.getItem("MatchStage3")}</p>
                        <h2>{localStorage.getItem("HomeTeamName3")}</h2>

                        <img alt={localStorage.getItem("AwayTeamName3")} src={localStorage.getItem("AwayTeamCrest3")} />
                        <h2>VS</h2>
                        <img alt={localStorage.getItem("HomeTeamName3")} src={localStorage.getItem("HomeTeamCrest3")} />

                        <h2 id="awayTeamScore">{localStorage.getItem("AwayTeamScore3")}</h2>
                        <p style={{ color: "yellow" }}>{localStorage.getItem("MatchStatus3")}</p>
                        <h2 id="homeTeamScore">{localStorage.getItem("HomeTeamScore3")}</h2>
                    </div>
                </div>





                <div className="sport-container-root">
                    <div className="sport-container">
                        <h2>{localStorage.getItem("AwayTeamName4")}</h2>
                        <p>{localStorage.getItem("MatchStage4")}</p>
                        <h2>{localStorage.getItem("HomeTeamName4")}</h2>

                        <img alt={localStorage.getItem("AwayTeamName4")} src={localStorage.getItem("AwayTeamCrest4")} />
                        <h2>VS</h2>
                        <img alt={localStorage.getItem("HomeTeamName4")} src={localStorage.getItem("HomeTeamCrest4")} />

                        <h2 id="awayTeamScore">{localStorage.getItem("AwayTeamScore4")}</h2>
                        <p style={{ color: "yellow" }}>{localStorage.getItem("MatchStatus4")}</p>
                        <h2 id="homeTeamScore">{localStorage.getItem("HomeTeamScore4")}</h2>
                    </div>
                </div>
            </>
        );
    }
}