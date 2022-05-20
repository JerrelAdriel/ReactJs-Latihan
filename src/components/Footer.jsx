import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container  } from 'react-bootstrap';


const Footer = () =>{
    return (
        <Container style={{textAlign: "center"}}>
            <div class="copyright">&copy; Copyright <strong>Jstore</strong>. All Rights Reserved</div>
            <div class="credits">Designed by Jerrel</div>
        </Container>
    )
}

export default Footer;