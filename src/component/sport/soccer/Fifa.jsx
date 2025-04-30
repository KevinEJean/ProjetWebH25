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
                <Container className='fifa' />
            </div>
        </div>
    )
} 