import React from "react";
import { Link } from "react-router-dom";

const Hotels = (props) => {
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

      <div className="container">
        <h2>All Hotels </h2>
      </div>

      {/* Table */}

      <div className="container">
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th>HotelId</th>
              <th>HotelName</th>
              <th>HotelAddress</th>
            </tr>
          </thead>
          <tbody>
            {props.hotelData.map((hotel) => {
              return (
                <tr key={hotel.HotelId}>
                  <td>{hotel.HotelId}</td>
                  <td>{hotel.HotelName}</td>
                  <td>{hotel.HotelAddress}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Hotels;
