import React from "react";
import Navigation from "../navigation";
import { useState } from "react";

const UpdateHotel = (props) => {
  const [NewHotelName, setNewHotelName] = useState("");
  const [NewHotelAddress, setNewHotelAddress] = useState("");

  const updateInfo = () => {
    {
      console.log(props.updateHotelData);

      props.updateHotelData[props.index].HotelName = NewHotelName;
      props.updateHotelData[props.index].HotelAddress = NewHotelAddress;
    }
  };

  return (
    <>
      <Navigation />

      <div className="container">
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
            <div
              style={{ marginTop: "30px" }}
              className="btn btn-primary"
              onClick={updateInfo}
            >
              update data
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateHotel;
