import React from 'react';
import SignUp from '../components/SignUp/SignUp';


const SignUpPage = () => {
  return (
    <div className="pt-16"> {/* Padding to avoid overlap with fixed Header */}
      <SignUp />
    </div>
  );
};

export default SignUpPage;
