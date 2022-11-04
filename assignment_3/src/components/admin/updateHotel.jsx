import React from "react";
import Navigation from "../navigation";
import { useState } from "react";
import { Link } from "react-router-dom";

const UpdateHotel = (props) => {
  const [NewHotelName, setNewHotelName] = useState("");
  const [NewHotelAddress, setNewHotelAddress] = useState("");

  const updateInfo = () => {
    {
      //  console.log(props.index)

      

     
      props.updateHotelData[props.index].HotelName = NewHotelName;
      props.updateHotelData[props.index].HotelAddress = NewHotelAddress;
     
     

      props.sethotels([...props.updateHotelData]);
    }
  };

  return (
    <>
      {/* <Navigation /> */}

      <div className="container">
        <h2> Update Hotel Data</h2>
        <div className="row">
          <div className="col">
            <label htmlFor="">Enter new Hotel Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setNewHotelName(e.target.value)}
            />
          </div>
          <div className="col">
            <label htmlFor="">Enter new Hotel Address</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setNewHotelAddress(e.target.value)}
            />
          </div>
          <div className="col">
            {/* <Link to='/hotels'> */}
            <button
              style={{ marginTop: "30px" }}
              className="btn btn-primary"
              onClick={updateInfo}
            >
              update data
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateHotel;
