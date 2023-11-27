import { Card } from "react-bootstrap";

const Home = () => {
    return (
        <div>
            <Card style={{backgroundColor: "grey", marginTop: "4%", color: 'white',font: 'bold', fontStyle:"italic",textAlign: "center", fontSize: '80px'}}>
                <Card.Body>The Generics</Card.Body>
            </Card>
            <h1 style={{textAlign: "center"}}>Home</h1>
            <h1 style={{fontFamily: "cursive",marginTop: "8%", textAlign: "center", fontSize: "400%"}}>Welcome to Generics Home</h1>
        </div>
        
    );
}

export default Home;