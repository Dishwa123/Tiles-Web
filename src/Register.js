import React, { useState } from 'react';

const SignUpForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleRegister = async () => {
    try {
      // Validation checks
      if (!user.name || !user.email || !user.password || !user.confirmPassword) {
        setErrorMessage('Please fill in all the details');
        return;
      }
  
      if (user.password !== user.confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }
  
      // Email format validation using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user.email)) {
        setErrorMessage('Invalid email format');
        return;
      }
  
      // If all validations pass, proceed with registration
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
  
      if (response.ok) {
        console.log('User registered successfully');
        window.location.href = "/Login";
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Failed to register user:', error);
    }
  };
  
  const PostData = () => {
    handleRegister();
  };

  return (
    <section className="vh-100" style={{ backgroundImage: "url('/ARICA-STATUARIO_01-scaled.jpg')" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    {errorMessage && (
                      <div className="alert alert-danger text-center" role="alert">
                        <p className="mb-0" style={{ fontSize: '1.25rem' }}>{errorMessage}</p>
                      </div>
                    )}
                    <form method="POST" className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" className="form-control" name="name" onChange={handleChange} />
                          <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example3c" className="form-control" name="email" onChange={handleChange} />
                          <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4c" className="form-control" name="password" onChange={handleChange} />
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4cd" className="form-control" name="confirmPassword" onChange={handleChange} />
                          <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary btn-lg" onClick={PostData}>Register</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="/c22.jpg" className="img-fluid" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
