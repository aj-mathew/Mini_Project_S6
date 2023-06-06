import { Container,Row,Col } from "react-bootstrap";
import './footer.css'

function Footer(){
    return(
        <>
        <div className="main-footer">
            
                <Row className="m-4 justify-content-center text-center ">

                    <Col lg='4'>
                        <h5>Connect with us</h5>
                        <ul className="list-unstyled">
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </Col>

                    <Col lg='4'>
                        <h5>Make Money with Us</h5>
                        <ul className="list-unstyled">
                            <li>Sell on mFash</li>
                            <li>Become an Affliate</li>
                            <li>Protect and Build Your Brand</li>
                            <li>Advertise your Products</li>
                            <li>Global Selling</li>
                        </ul>
                    </Col>

                    
                    <Col lg='4'>
                        <h5>Let Us Help You</h5>
                        <ul className="list-unstyled">
                            <li>Return Centre</li>
                            <li>100% Purchase Protection</li>
                            <li>App Download</li>
                            <li>Help</li>
                        </ul>
                    </Col>

                </Row>
            <div>
                <hr />
                <div className="row">
                    <p className="col-sm justify-content-center text-center">
                        &copy;{new Date().getFullYear}  mFash INC | All rights reserved | Terms of Service | Privacy 
                        
                    </p>

                </div>
            </div>
            

        </div>
       


        </>
    )
}
export default Footer;