import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import AXIOS from "axios";


function Userreg(){

    const[eml,setEmail]=useState("") //eml is the variable and setEmail is the function associated with it
    const[passw,setPss]=useState("") //the empty string in useState() indicates that the initial value will be blank
    const [phn,setPhn]=useState("")
    const [nam,setNam]=useState("")
    const [gen, setGen] = useState("");
    const[cose,setCose]=useState("")
    const handleChange = (val) => setGen(val);

    const Create =async()=> {
        await AXIOS.post('http://localhost:9000/stureg',{nam:nam,eml:eml,phn:phn,gen:gen,cose:cose}).then((res)=>{
            console.log(res)
            console.log(res.data)
            console.log(res.data.msg)
        })
        alert('Registration Successful!\n\n'+nam+'\n'+eml+'\n'+phn+'\n'+gen+'\n'+cose)
        setEmail(" ")
        setPss(" ")
        setPhn(" ") //this is used to clear values after entering them
        setNam(" ")
        setGen(" ")
    }
    return(
        <>  
            <Container>
                <Row className="mt-4 justify-content-center">
                    <Col lg='6' className="border p-4">
                        <form>
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input type="text" value={nam} className="form-control" onChange={(e)=>setNam(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" value={eml} className="form-control" onChange={(e)=>setEmail(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Phone</label>
                                <input type="tel" value={phn} className="form-control" onChange={(e)=>setPhn(e.target.value)} />
                            </div>

                            <div className="form-group ">
                                <label className="form-label">Gender</label>
                                 <ToggleButtonGroup type="checkbox" className="form-control" value={gen} onChange={handleChange}>
                                 <ToggleButton id="tbg-btn-1" value={"Male"}>
                                 Male
                                 </ToggleButton>
                                 <ToggleButton id="tbg-btn-2" value={"Female"}>
                                 Female
                                 </ToggleButton>
                                 </ToggleButtonGroup>                             
                            </div>

                            <div className="form-group">
                               <label className="form-label">Course</label>
                               <select className="form-control" onChange={(e)=>setCose(e.target.value)}>
                                <option>Select Course</option>
                                <option>Computer Science and Engineering</option>
                                <option>Electronics and Communication Engineering</option>
                                <option>Mechanical Engineering</option>
                               </select> 
                            </div>

                            <div className="form-group">
                                <button className="btn btn-info mt-3" onClick={Create}>Create</button>
                            </div>
                        </form>
                    </Col>
                </Row>

            </Container>
        
            
        

        </>
    )

}

export default Userreg;