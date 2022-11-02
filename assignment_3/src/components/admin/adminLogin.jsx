import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const navigate = useNavigate();

  const readEmail = (e) => {
    setEmail(e.target.value);
  };

  const readPassword = (e) => {
    setPassword(e.target.value);
  };

  const checkAuth = (e) => {
    // e.preventDefault()

    const newEntry = { email: Email, password: Password };

    setAllEntry([...allEntry, newEntry]);
    console.log(newEntry);

    if (
      newEntry.email === "ahmedelham494@gmail.com" &&
      newEntry.password === "hello"
    ) {
      console.log(`welcome to the admin panel`);

      navigate("/adminPanel");
    } else console.log(`wrong login credential `);
  };

  return (
    <>
      {/* navbar component */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <h2>
          <Link class="navbar-brand" to="/dashboard">
            Hotel Reservation
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
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <h3>
                <Link class="nav-link" to="/admin">
                  Login <span class="sr-only">(current)</span>
                </Link>
              </h3>
            </li>
           
          </ul>
        </div>
      </nav>

      {/* UserLogin component */}
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col"></div>

          <div className="col-6">
            <h1>Admin Login</h1>

            <div>
              {/* Login form  component */}

              <form onSubmit={checkAuth}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    onChange={readEmail}
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="enter your email"
                    value={Email}
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    onChange={readPassword}
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="enter password"
                    value={Password}
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

          <div className="col">{/* <h1>col</h1> */}</div>
        </div>
      </div>

      <div>
        {allEntry.map((currElement) => {
          return (
            <div>
              <li>{currElement.email}</li>
              <li>{currElement.password}</li>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AdminLogin;
