import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button  } from "react-bootstrap";
import elderflame from "../assets/images/elderflame.jpg";

const card = () => {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={elderflame} />
        <Card.Body style={{textAlign:"center"}}>
            <Card.Title>Elderflame Bundle</Card.Title>
            <Card.Text>
            Elderflame Bundle adalah sebuah bundle yang berisi senjata-senjata bertema elderflame.
            </Card.Text>
            <Button variant="primary">Go Buy</Button>
        </Card.Body>
        </Card>

    );
}

export default card;