import React from 'react';
import './SingUpPage.scss'; 

const SignUpPage = ({ closeSignUp }) => {
  return (
    <div className="signUpPage">
      <div className="signUpContent">
        <h2>Sign Up</h2>
        
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
        <button className="closeBtn" onClick={closeSignUp}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
