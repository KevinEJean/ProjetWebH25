import Container from '../Container';
import './Fifa.css';

export default function Fifa() {

    if (sessionStorage.getItem("onlineStatus") != "true") {
        alert("You need an account to gain access to this page !");
        location.href = "/";
    } else {

        function refresh() {
            if (sessionStorage.getItem("MatchStage4") != null && window.location.hash != "#loaded") {
                window.location.hash = "#loaded";
                window.location.reload();
            }
        }

        setTimeout(refresh, 1000);
    }

    return (
        <div className='fifa-root'>
            <div className='title'>
                <div className='title-bg'>Sport</div>
                <div className='title-fg'>Sport</div>
            </div>
            <h1 style={{ color: localStorage.getItem("Title-Colors") }}>UEFA Champions League</h1>
            <div className='container-grid'>
                {/* <Container className='fifa-cl' /> */}
                <Container className='fifa-cl-test' />
            </div>
        </div>
    )
} 