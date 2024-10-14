import React, { useRef, useState} from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, useLocation  } from 'react-router';
import { Alert } from 'react-bootstrap';

const SignIn = () => {
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || "/vocabTreePage";
    const handleSubmit = async(e) => {
        // always pay attention to the order - make the prevent default the first to prevent sending the data
        e.preventDefault();

        try{
            setError("")
            setLoading(true)
            await login(emailRef.current.value , passwordRef.current.value)
            navigate(redirectPath, { replace: true });
        }catch{
            setError("Failed to log in")
        }
        setLoading(false)

    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-lime-900 mb-6">Sign In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            ref={emailRef}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            ref={passwordRef}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-lime-900 text-white py-2 px-4 rounded-md hover:bg-lime-700 transition duration-300"
                        disabled={loading}
                    >
                        Sign In
                    </button>
                </form>

                <div className="text-center mt-4">
                    <a href="/ForgetPassword" className="text-lime-700 hover:underline">
                        Forgot your password?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
