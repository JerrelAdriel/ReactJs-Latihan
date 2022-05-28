import { Col, Container, Row } from 'react-bootstrap';
import Card from '../components/Card';


function Home() {
    return (
        <div>
            <div>
                <h2 style={{textAlign: "center"}}> Store</h2>
            </div>
            <Container className='mt-5 mb-5 ' >
                <Row className='justify-content-md-center'>
                    <Col md="auto">
                        <Card />
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default Home;