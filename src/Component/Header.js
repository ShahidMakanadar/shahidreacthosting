import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Shahid.code</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Topics
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="">Technology</Link></li>
                  <li><Link className="dropdown-item" to="">Web development</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="">Write for us</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact us</Link>
              </li>
            </ul>
            <form className="d-flex ">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success btn-sm" type="submit">Search</button>
            </form>
            <br></br>
            <div className='mx-1'>
              <button className='btn btn-success btn-sm  mx-2' data-bs-toggle="modal" data-bs-target="#loginModal"> .  Login </button>
              <button className='btn btn-success btn-sm ' data-bs-toggle="modal" data-bs-target="#signUpModal">SignUp</button>
            </div>
          </div>
        </div>
      </nav>


      {/* Login modal */}


      <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="loginModalLabel">Get an shahid.code account</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <form>
                <div class="mb-3">
                  <label for="loginInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="loginInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="loginInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="loginInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="loginCheck1" />
                  <label class="form-check-label" for="loginCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>


      {/* SignUp modal */}


      <div class="modal fade" id="signUpModal" tabindex="-1" aria-labelledby="signUModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="signUModalLabel">Creat account an shahid.code </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <form>
                <div class="mb-3">
                  <label for="signUInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="signUInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="signUInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="signUInputPassword1" />
                </div>
                <div class="mb-3">
                  <label for="signUInputPassword1" class="form-label">confirm Password</label>
                  <input type="password" class="form-control" id="signUInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="loginCheck1" />
                  <label class="form-check-label" for="loginCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}
