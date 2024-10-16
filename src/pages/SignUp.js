import React from 'react';
import SignUp from '../components/SignUp/SignUp';


const SignUpPage = () => {
  return (
    <div className="pt-16 bg-lime-200 dark:bg-slate-900"> {/* Padding to avoid overlap with fixed Header */}
      <SignUp />
    </div>
  );
};

export default SignUpPage;
