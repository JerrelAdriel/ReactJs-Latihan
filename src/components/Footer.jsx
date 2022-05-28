import { Container  } from 'react-bootstrap';
import '../assets/css/module.style.css';


const Footer = () =>{
    return (
            <div  style={{textAlign: "center"}} className='bg py-4 fixed-bottom'>
                <div class="copyright">&copy; Copyright <strong>Jerrel</strong>. All Rights Reserved</div>
                <div class="credits">Designed by Jerrel</div>
            </div>     
    )
}

export default Footer;