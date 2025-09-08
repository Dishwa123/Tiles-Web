import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      // Your login logic...
      
      // Send a request to the backend for authentication
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      if (response.ok) {
        // If authentication is successful, redirect to the home page
        console.log('User logged in successfully');
        window.location.href = "/";
      } else {
        // If authentication fails...
        if (response.status === 401) {
          setErrorMessage('Incorrect password');
        } else if (response.status === 400) {
          // User with the provided email already exists
          setErrorMessage('User with this email already exists');
          // Redirect to home page
          window.location.href = "/";
        } else {
          setErrorMessage('Incorrect email or password');
        }
      }
    } catch (error) {
      console.error('Failed to log in:', error);
      // Handle login failure
    }
  };
  
  

  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: '23rem' }}>
                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px', color: 'white'}}>Log in</h3>
                {errorMessage && (
                  <p style={{ color: 'red', fontSize: '1.2rem', backgroundColor: '#ffcccc', padding: '10px', borderRadius: '5px' }}>
                    {errorMessage}
                  </p>
                )}
                <div className="form-outline mb-4">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" />
                  <label className="form-label" style={{ color: 'white'}} htmlFor="form2Example17">Email address</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control form-control-lg" />
                  <label className="form-label"  style={{ color: 'white'}} htmlFor="form2Example27">Password</label>
                </div>
                <div className="pt-1 mb-4">
                  <button className="btn btn-info btn-lg btn-block" style={{ color: 'white'}} type="button" onClick={handleLogin}>Login</button>
                </div>
                <p className="small mb-5 pb-lg-2"><Link className="text-muted" style={{ color: 'white'}} to="#!">Forgot password?</Link></p>
                <p style={{ color: 'white', textAlign: 'center' }}>If you haven't registered yet, please click here to register</p>
                <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                     <Link to="/Register" className="btn btn-outline-light btn-lg" style={{ backgroundColor: '#0dcaf0', borderColor: '#17a2b8' }}>Register here</Link>
                </p>

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
