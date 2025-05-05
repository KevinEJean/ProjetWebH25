import axios from "axios";
import "./Container.css";

export default function Container({ className = "" }) {

    var date = new Date();
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    var today = `${year}-${month}-${day}`;


    if (sessionStorage.getItem("AwayTeamNameCL") == undefined) {
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

                    sessionStorage.setItem("AwayTeamScoreCL", response.data.matches[i].score.fullTime.away);
                    sessionStorage.setItem("HomeTeamScoreCL", response.data.matches[i].score.fullTime.home);

                    sessionStorage.setItem("MatchStatusCL", response.data.matches[i].status);
                    sessionStorage.setItem("MatchStageCL", response.data.matches[i].stage);

                    if (awayTeamScore > homeTeamScore) {
                        document.getElementById("awayTeamScore").style.textDecoration = "underline";
                    } else if (awayTeamScore < homeTeamScore) {
                        document.getElementById("homeTeamScore").style.textDecoration = "underline";
                    }
                    break;
                } else {
                    if (sessionStorage.getItem("AwayTeamName1") == undefined) {
                        let index = 1;
                        for (let n = 168; n < 172; n++) {
                            sessionStorage.setItem(`AwayTeamName${index}`, response.data.matches[n].awayTeam.tla);
                            sessionStorage.setItem(`HomeTeamName${index}`, response.data.matches[n].homeTeam.tla);

                            sessionStorage.setItem(`AwayTeamCrest${index}`, response.data.matches[n].awayTeam.crest);
                            sessionStorage.setItem(`HomeTeamCrest${index}`, response.data.matches[n].homeTeam.crest);

                            sessionStorage.setItem(`AwayTeamScore${index}`, response.data.matches[n].score.fullTime.away);
                            sessionStorage.setItem(`HomeTeamScore${index}`, response.data.matches[n].score.fullTime.home);

                            sessionStorage.setItem(`MatchStatus${index}`, response.data.matches[n].status);
                            sessionStorage.setItem(`MatchStage${index++}`, response.data.matches[n].stage);
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
                    <h2 id="nullChecker">{sessionStorage.getItem("AwayTeamNameCL")}</h2>
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

    if (className == "fifa-cl-test") {
        return (


            <>
                <div className="sport-container-root">
                    <div className="sport-container">
                        <h2>{sessionStorage.getItem("AwayTeamName1")}</h2>
                        <p>{sessionStorage.getItem("MatchStage1")}</p>
                        <h2>{sessionStorage.getItem("HomeTeamName1")}</h2>

                        <img alt={sessionStorage.getItem("AwayTeamName1")} src={sessionStorage.getItem("AwayTeamCrest1")} />
                        <h2>VS</h2>
                        <img alt={sessionStorage.getItem("HomeTeamName1")} src={sessionStorage.getItem("HomeTeamCrest1")} />

                        <h2 id="awayTeamScore">{sessionStorage.getItem("AwayTeamScore1")}</h2>
                        <p style={{ color: "yellow" }}>{sessionStorage.getItem("MatchStatus1")}</p>
                        <h2 id="homeTeamScore">{sessionStorage.getItem("HomeTeamScore1")}</h2>
                    </div>
                </div>






                <div className="sport-container-root">
                    <div className="sport-container">
                        <h2>{sessionStorage.getItem("AwayTeamName2")}</h2>
                        <p>{sessionStorage.getItem("MatchStage2")}</p>
                        <h2>{sessionStorage.getItem("HomeTeamName2")}</h2>

                        <img alt={sessionStorage.getItem("AwayTeamName2")} src={sessionStorage.getItem("AwayTeamCrest2")} />
                        <h2>VS</h2>
                        <img alt={sessionStorage.getItem("HomeTeamName2")} src={sessionStorage.getItem("HomeTeamCrest2")} />

                        <h2 id="awayTeamScore">{sessionStorage.getItem("AwayTeamScore2")}</h2>
                        <p style={{ color: "yellow" }}>{sessionStorage.getItem("MatchStatus2")}</p>
                        <h2 id="homeTeamScore">{sessionStorage.getItem("HomeTeamScore2")}</h2>
                    </div>
                </div>





                <div className="sport-container-root">
                    <div className="sport-container">
                        <h2>{sessionStorage.getItem("AwayTeamName3")}</h2>
                        <p>{sessionStorage.getItem("MatchStage3")}</p>
                        <h2>{sessionStorage.getItem("HomeTeamName3")}</h2>

                        <img alt={sessionStorage.getItem("AwayTeamName3")} src={sessionStorage.getItem("AwayTeamCrest3")} />
                        <h2>VS</h2>
                        <img alt={sessionStorage.getItem("HomeTeamName3")} src={sessionStorage.getItem("HomeTeamCrest3")} />

                        <h2 id="awayTeamScore">{sessionStorage.getItem("AwayTeamScore3")}</h2>
                        <p style={{ color: "yellow" }}>{sessionStorage.getItem("MatchStatus3")}</p>
                        <h2 id="homeTeamScore">{sessionStorage.getItem("HomeTeamScore3")}</h2>
                    </div>
                </div>





                <div className="sport-container-root">
                    <div className="sport-container">
                        <h2>{sessionStorage.getItem("AwayTeamName4")}</h2>
                        <p>{sessionStorage.getItem("MatchStage4")}</p>
                        <h2>{sessionStorage.getItem("HomeTeamName4")}</h2>

                        <img alt={sessionStorage.getItem("AwayTeamName4")} src={sessionStorage.getItem("AwayTeamCrest4")} />
                        <h2>VS</h2>
                        <img alt={sessionStorage.getItem("HomeTeamName4")} src={sessionStorage.getItem("HomeTeamCrest4")} />

                        <h2 id="awayTeamScore">{sessionStorage.getItem("AwayTeamScore4")}</h2>
                        <p style={{ color: "yellow" }}>{sessionStorage.getItem("MatchStatus4")}</p>
                        <h2 id="homeTeamScore">{sessionStorage.getItem("HomeTeamScore4")}</h2>
                    </div>
                </div>
            </>
        );
    }
}