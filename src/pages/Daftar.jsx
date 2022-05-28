import {Card, Container, Button} from 'react-bootstrap';
import '../assets/css/module.style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

 function Daftar() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        axios.get(`https://dog.ceo/api/breeds/image/random`)
        .then((response) => { console.log(response.data); return response.data; })
        .then((result) => { setData(result); })
        .catch((error) => {console.log(error)})
      }

    useEffect(() => fetchData(),[]);
      
    return (
             <Container style={{textAlign:"center"}} className='my-5 card text-center bg-light py-5'>   
             <h1>Dog</h1>    
                 <Card  style={{ width: '18rem' }}>
                 <Card.Img style={{height:'18rem',}} variant="top" src={data.message}  alt='gambar'/>
                 <Card.Body style={{textAlign:"center"}}>
                 </Card.Body>
                 <Button variant='dark' onClick={() => fetchData()} >Generate</Button>
             </Card>
             </Container>          
    );
}

export default Daftar;