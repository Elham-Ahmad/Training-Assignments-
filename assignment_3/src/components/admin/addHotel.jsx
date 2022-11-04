import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './addHotel.css'
import Hotels from "./hotels";


const AddHotel = (props) => {

//  const navigate = useNavigate()

  const [HotelId, setHotelId] = useState(0)
  const [HotelName, setHotelName] = useState('')
  const [HotelAddress, setHotelAddress] = useState('')
  const [AllHotels, setAllHotels] = useState([])

  const createHotel=()=>{
    
    const Hotel =  {
      HotelId,
      HotelName,
      HotelAddress,
    }
    props.userDataHandler(Hotel);

    // if (Hotel.HotelId ===0 &&Hotel.HotelName ==='' && Hotel.HotelAddress ==='')
    // {
    //   console.log(`yes`)
    // }
    // else console.log(`no`);

    setAllHotels([...AllHotels,Hotel])    
    console.log(AllHotels)
    // navigate('/hotels')

   
    
  }

  <Hotels allHotel = {AllHotels}/>
 

  return (
    <>
        {/* NAVIGATION BAR */}

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <h2>
          <Link class="navbar-brand" to="/adminPanel">
            Admin Panel
          </Link>
        </h2>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ml-4">
            <h4>
              <li class="nav-item">
                <Link class="nav-link" to="/addHotel">
                  Add Hotels
                </Link>
              </li>
            </h4>
            <h4>
              <li class="nav-item">
                <Link class="nav-link" to="/hotels">
                  Hotels
                </Link>
              </li>
            </h4>
            <h4>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/updateHotels"
                  tabindex="-1"
                  aria-disabled="false"
                >
                  update Hotels
                </Link>
              </li>
            </h4>
            <h4>
              <li class="nav-item">
                <Link class="nav-link" to="/canceledBooking">
                  Canceled Bookings
                </Link>
              </li>
            </h4>
            <h4>
              <li class="nav-item">
                <Link class="nav-link" to="/users">
                  Users
                </Link>
              </li>
            </h4>
          </div>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active"></li>

            <h3>
              <Link class="nav-link" to="/admin">
                Logout <span class="sr-only">(current)</span>
              </Link>
            </h3>
          </ul>
        </div>
        </nav>

        {/* TITLE ADD HOTELS */}
        <h1 className="mx-5 mt-3">Add Hotels</h1>

        {/* HOTEL PROPERTIES  */}
        <div className="row mx-2">

        <div className="col">Hotel Id
        <input type="text" className="form-control" onChange={(e)=>{setHotelId(e.target.value)}}/>
        </div>
        <div className="col">Hotel Name
        <input type="text" className="form-control" onChange={(e)=>{setHotelName(e.target.value)}} />
        </div>
        <div className="col">Address
        <input type="text" className="form-control" onChange={(e)=>{setHotelAddress(e.target.value)}}/>
        </div>
       
        </div>

        {/* SUBMIT BUTTON */}
        <button className="btn btn-success mx-4 mt-3" onClick={createHotel}>Add</button>
        
    </>
  );
};


export default AddHotel;

