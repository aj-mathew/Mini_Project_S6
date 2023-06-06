import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import AXIOS from "axios";
 
function Regis(){
    const [eml,setEml]=useState("")
    const[pss,setPss]=useState("")
    const Create=async()=>{
        await AXIOS.post('http://localhost:9000/reg',{eml:eml,pss:pss}).then((res)=>{
            console.log(res)
            console.log(res.data)
            console.log(res.data.msg)
        })
        alert("Registration Successful")
        setEml(" ")
        setPss(" ")

    }
    return(
        <>
        <Container>
            <Row className="mt-4 justify-content-center">
                <Col lg='6' className="border p-3">
                    <form>
                        <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="email" value={eml}  className="form-control" onChange={(e)=> setEml(e.target.value)} ></input>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" value={pss} className="form-control" onChange={(e)=> setPss(e.target.value)} name="" id="" />
                        </div>
                        <div className="form-group">
                            <button  className="btn btn-info mt-2" onClick={Create}>Login</button>
                        </div>
                    </form>
                
                </Col>
            </Row>

        </Container>



        </>
    )
}
export default Regis;