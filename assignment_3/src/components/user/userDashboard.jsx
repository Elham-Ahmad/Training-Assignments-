import React from "react";
import "./userDashboard.css";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <h2><Link class="navbar-brand" to="/dashboard">
          Hotel Reservation
        </Link></h2> 
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
             <h3><Link class="nav-link" to="/userLogin">
                Login <span class="sr-only">(current)</span>
              </Link></h3> 
            </li>
           <h3><li class="nav-item">
              <Link class="nav-link" to="/userRegister">
                Registration
              </Link></li></h3> 
            
          
          </ul>
        </div>
      </nav>

      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col">
           
          </div>

          <div className="col-6">
            <h1>User Register</h1>
            <div>
              {/* register form  component */}

              <form>
                <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                  <input
                    type="name"
                    class="form-control"
                    id="exampleInputName1"
                    aria-describedby="emailHelp"
                  />
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">Re-Enter Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword2"
                  />
                </div>

                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>


          <div className="col">
            {/* <h1>col</h1> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
