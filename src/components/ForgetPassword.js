import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reset password request for email:', email);
        alert('Password reset link has been sent to your email');
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-lime-900 mb-6">Forgot Password</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                            placeholder="Enter your email"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-lime-900 text-white py-2 px-4 rounded-md hover:bg-lime-700 transition duration-300"
                    >
                        Send Reset Link
                    </button>
                </form>

                <div className="text-center mt-4">
                    Need an account?{' '}
                    <a href="/signup" className="text-lime-700 hover:underline">
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
