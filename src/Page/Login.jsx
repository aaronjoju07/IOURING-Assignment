import React, { useState } from 'react';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    Cookies.set('user', email, { expires: 1 / 96 })
    navigation('/');
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 p-10 hidden lg:block bg-gray-50">
          <h2 className="text-xl font-bold text-indigo-600 mb-6">Validation Features</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <span className="text-gray-700">&#9881;</span> Email Validation
              </h3>
              <p className="text-gray-500 text-sm">Ensures the email address is in the correct format and checks for common email provider domains.</p>
            </div>
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <span className="text-gray-700">&#x2692;</span> Password Strength
              </h3>
              <p className="text-gray-500 text-sm">Verifies that the password meets the required strength criteria, including length and character variety.</p>
            </div>
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <span className="text-gray-700">&#128077;</span> Real-time Feedback
              </h3>
              <p className="text-gray-500 text-sm">Provides instant feedback on the validity of the email and password as the user types.</p>
            </div>
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <span className="text-gray-700">&#x1F4A1;</span> Error Messaging
              </h3>
              <p className="text-gray-500 text-sm">Displays clear and concise error messages to guide the user in correcting any input mistakes.</p>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full lg:w-1/2 p-10">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Sign in</h2>
          <div className="mt-6">
            <Form
              email={email}
              password={password}
              onEmailChange={handleEmailChange}
              onPasswordChange={handlePasswordChange}
              onSubmit={handleSubmit}
            />
            <p className="text-sm text-gray-500 text-center mt-6">
              Don't have an account? <a href="#" className="text-indigo-600 font-semibold">Sign up</a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
