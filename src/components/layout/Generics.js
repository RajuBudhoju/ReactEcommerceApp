import Card from 'react-bootstrap/Card';
import Music from '../music/Music';

const Generics = () => {
    return (
        <div>
            <Card style={{backgroundColor: "grey", marginTop: "4%", color: 'white',font: 'bold', fontStyle:"italic",textAlign: "center", fontSize: '80px'}}>
                <Card.Body>The Generics</Card.Body>
            </Card>
            <Music/>
        </div>
    )
};

export default Generics;