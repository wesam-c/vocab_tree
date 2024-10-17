import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, useLocation } from 'react-router';
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate(redirectPath, { replace: true });
        } catch {
            setError("Failed to log in");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center dark:bg-gray-800">
            <div className="bg-gray-50 dark:bg-slate-600 p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-lime-900 dark:text-yellow-400 mb-6">Sign In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input
                            type="email"
                            id="email"
                            ref={emailRef}
                            required
                            className="mt-1 block w-full px-4 py-2 border dark:bg-gray-200 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 dark:focus:ring-yellow-500 dark:focus:border-yellow-500 sm:text-sm"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                        <input
                            type="password"
                            id="password"
                            ref={passwordRef}
                            required
                            className="mt-1 block w-full px-4 py-2 border dark:bg-gray-200 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 dark:focus:ring-yellow-500 dark:focus:border-yellow-500 sm:text-sm"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full text-lg font-bold  bg-lime-900 text-gray-50 py-2 px-4 rounded-md hover:bg-lime-700 transition duration-300 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300"
                        disabled={loading}
                    >
                        Sign In
                    </button>
                </form>

                <div className="text-center mt-4 no-underline">
                    <a href="/ForgetPassword" className="text-lime-700 no-underline hover:underline dark:text-yellow-300 ">
                        Forgot your password?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
