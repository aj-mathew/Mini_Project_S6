import { useState } from "react"


function Create_Spot(){
    const[spotName,setSpotName]=useState("")
    const[description,setDescription]=useState("")

    return(
        <>
        <div className="car-booking-form mb-4" >
      <h2>Book a Spot</h2>
      <form onSubmit={handleSubmit}>
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