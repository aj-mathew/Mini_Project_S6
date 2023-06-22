import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AXIOS from "axios";


function Create_Spot(){
    const[spotName,setSpotName]=useState("")
    const[description,setDescription]=useState("")
    const navigate=useNavigate()

    const createSpot=async(e)=>{
      e.preventDefault()
      try{
        const response = await AXIOS.post('http://localhost:9000/createspot', {spotName,description});
        console.log(response.data)
        if(response.data.message==="Success"){
          alert("Spot Created")
          navigate("/ownerloadout")
        }

      }catch(err){
        alert("Duplicate")
      }
    }

    return(
        <>
        <div className="car-booking-form mb-4" >
      <h2>Create Spot</h2>
      <form onSubmit={createSpot}>
        <div className="form-group">
          <label htmlFor="carRegistration">Spot Name</label>
          <input
            type="text"
            id="carRegistration"
            value={spotName}
            onChange={(e) =>setSpotName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ownerName">Description</label>
          <input
            type="text"
            id="ownerName"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>

        </>
    )
}

export default Create_Spot