import { React } from "react";
import { Nav, Navbar, Container, Carousel } from "react-bootstrap";
import "./dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
       <h2><div class="navbar-brand" href="#">
          Hotel Reservation
        </div></h2> 
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
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
             <h3><Link class="nav-link" to="/admin">
                Admin <span class="sr-only">(current)</span>
              </Link></h3> 
            </li>
           <h3><li class="nav-item">
              <Link class="nav-link" to="/user">
                User
              </Link></li></h3> 
            
          
          </ul>
        </div>
      </nav>

      <div className="midsection">
        <div className="container-mid">
          <Carousel>
            <Carousel.Item>
              <img
                className="img-fluid"
                src="./images/reservation-1.jpg"
                alt="First slide"
                height="400px"
                width="100%"
              />
              <Carousel.Caption>
                <h3>Experience Hospitality</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="./images/reservation-2.jpg"
                alt="Second slide"
                height="400px"
                width="100%"
              />

              <Carousel.Caption>
                <h3>World class Services</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img-fluid d-block w-100"
                src="./images/reservation-8.jpg"
                alt="Third slide"
                height="300px"
                width="100%"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
