import React, { useState } from 'react';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import Alert from '../components/Alert';


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
    <>
      {/* Alert */}
      <div className='max-w-full top-5 right-10'>
        {alert.show && (
          <Alert type={alert.type} message={alert.message} onClose={() => setAlert({ show: false, type: '', message: '' })} />
        )}
      </div>

      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Side  */}
          <div className="w-1/2 p-10 hidden lg:block bg-gray-50">
            <h2 className="text-xl font-bold text-indigo-600 mb-6">IOURING Assignment</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="text-gray-700">&#9881;</span> Login with Email and Password
                </h3>
                <p className="text-gray-500 text-sm">Secure login using email and password.</p>
              </div>
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="text-gray-700">&#x1F4B0;</span> Used Cookies for Storing User Info
                </h3>
                <p className="text-gray-500 text-sm">Login status stored in cookies for session persistence.</p>
              </div>
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="text-gray-700">&#128221;</span> Post List Page with CRUD Operations
                </h3>
                <p className="text-gray-500 text-sm">Manage posts with Create, Read, Update, and Delete operations.</p>
              </div>
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="text-gray-700">&#x1F50D;</span> Lazy Loading and Pagination
                </h3>
                <p className="text-gray-500 text-sm">Improved performance with lazy loading and pagination.</p>
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
    </>
  );
};

export default Login;
