import Container from '../Container';
import './Fifa.css';

export default function Fifa() {

    return (
        <div className='fifa-root'>
            <div className='title'>
                <div className='title-bg'>Sport</div>
                <div className='title-fg'>Sport</div>
            </div>
            <div className='container'>
                <h1 style={{ color: localStorage.getItem("Title-Colors") }}>UEFA Champions League</h1>
                <Container className='fifa-cl' />
            </div>
        </div>
    )
} 