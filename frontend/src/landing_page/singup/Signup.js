// import React from 'react';

// function Signup() {
//     return ( <h1>
//         Signup
//     </h1>);
// }

// export default Signup;


import React from "react";

const Signup = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Sign Up</h3>

        <form>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
            />
          </div>

          {/* Button */}
          <button type="submit" className="btn btn-primary w-100">
            Create Account
          </button>

          {/* Login Link */}
          <p className="text-center mt-3 mb-0">
            Already have an account?{" "}
            <a href="/login" className="text-decoration-none">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;