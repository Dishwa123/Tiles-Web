// LoginPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login button clicked');
  };

  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: '23rem' }}>
                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px', color: 'white'}}>Log in</h3>
                <div className="form-outline mb-4">
                  <input type="email" id="form2Example17" className="form-control form-control-lg" />
                  <label className="form-label" style={{ color: 'white'}} htmlFor="form2Example17">Email address</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="form2Example27" className="form-control form-control-lg" />
                  <label className="form-label"  style={{ color: 'white'}} htmlFor="form2Example27">Password</label>
                </div>
                <div className="pt-1 mb-4">
                 <Link to="/"><button className="btn btn-info btn-lg btn-block" style={{ color: 'white'}} type="button" onClick={handleLogin}>Login</button></Link> 
                </div>
                <p className="small mb-5 pb-lg-2"><Link className="text-muted" style={{ color: 'white'}} to="#!">Forgot password?</Link></p>
                <p>Don't have an account? <Link to="/Register" style={{ color: 'white'}} className="link-info">Register here</Link></p>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img src="/01_1082-&1092-preview.jpg" alt="Login image" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
