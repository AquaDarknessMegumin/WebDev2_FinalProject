import React, { useState } from 'react';
import '../Styles/Login_Page.css';

import { useNavigate } from 'react-router-dom';

const Logo = () => (
  <img src="dentease.png" alt="Logo" style={{ width: '100px', height: 'auto' }} />
);

const LoginForm = ({ onSubmit, onSwitchForm, formData, onInputChange }) => (
  <div className="form-container">
    <h2 className="h2">Login</h2>
    <form className="form" onSubmit={onSubmit}>
      {['loginUsername', 'loginPassword'].map((id) => (
        <input
          key={id}
          type={id.includes('Password') ? 'password' : 'text'}
          id={id}
          placeholder={id.replace('login', '')}
          required
          className="input"
          value={formData[id]}
          onChange={onInputChange}
        />
      ))}
      <div className="form-actions">
        <div className="checkbox-label">
          <input
            type="checkbox"
            id="rememberMe"
            checked={formData.rememberMe}
            onChange={() => onInputChange({ target: { id: 'rememberMe', type: 'checkbox', checked: !formData.rememberMe } })}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
      </div>
      <button type="submit" className="login-button button">
        Login
      </button>
      <p>
        Don't have an account?{' '}
        <button className="switch-form register button" onClick={() => onSwitchForm('register')}>
          Register
        </button>
      </p>
    </form>
  </div>
);

const RegisterForm = ({ onSubmit, onSwitchForm, formData, onInputChange }) => (
  <div className="form-container">
    <h2 className="h2">Register</h2>
    <form className="form" onSubmit={onSubmit}>
      {['registerUsername', 'registerPhoneNumber', 'registerEmail', 'registerPassword', 'confirmPassword'].map((id) => (
        <div key={id}>
          {id === 'registerPhoneNumber' ? (
            <input
              type="tel"
              id={id}
              placeholder="Phone Number"
              required
              pattern="[0-9]*"
              className="input"
              value={formData[id]}
              onChange={onInputChange}
            />
          ) : id === 'registerEmail' ? (
            <input
              type="email"
              id={id}
              placeholder="Email"
              required
              className="input"
              value={formData[id]}
              onChange={onInputChange}
            />
          ) : id === 'confirmPassword' ? (
            <input
              type="password"
              id={id}
              placeholder="Confirm Password"
              required
              className="input"
              value={formData[id]}
              onChange={onInputChange}
            />
          ) : (
            <input
              type={id.includes('Password') ? 'password' : 'text'}
              id={id}
              placeholder={id.replace('register', '')}
              required
              className="input"
              value={formData[id]}
              onChange={onInputChange}
            />
          )}
        </div>
      ))}
      <div className="form-actions">
        <div className="checkbox-label">
          <input
            type="checkbox"
            id="agreeTerms"
            checked={formData.agreeTerms}
            onChange={() => onInputChange({ target: { id: 'agreeTerms', type: 'checkbox', checked: !formData.agreeTerms } })}
            required
          />
          <label htmlFor="agreeTerms" className="label">
            I agree to the terms and conditions
          </label>
        </div>
      </div>
      <button type="submit" className="register-button button">
        Register
      </button>
      <p>
        Already have an account?{' '}
        <button className="switch-form login button" onClick={() => onSwitchForm('login')}>
          Login
        </button>
      </p>
    </form>
  </div>
);

function LoginPage() {
  const [loginForm, setLoginForm] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    loginUsername: '',
    loginPassword: '',
    rememberMe: false,
    registerUsername: '',
    registerPhoneNumber: '',
    registerEmail: '',
    registerPassword: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSwitchForm = (form) => {
    setLoginForm(form === 'login');
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;

    if (id === 'registerPhoneNumber' && isNaN(value)) {
      return;
    }

    if (id === 'confirmPassword') {
      setPasswordsMatch(value === formData.registerPassword);
    }

    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (loginForm) {
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            loginEmail: formData.loginUsername,
            loginPassword: formData.loginPassword,
          }),
        });

        if (response.ok) {
          console.log('Login form submitted successfully');
          setSuccessMessage('Logged in successfully!');
          removeSuccessMessage();
          navigate('/home');
        } else if (response.status === 401) {
          console.log(response)
          console.log('Invalid credentials');
          setErrorMessage('Invalid credentials. Please try again.');
          removeErrorMessage();
        } else {
          console.error('Error submitting login form:', response.statusText);
          setErrorMessage('An error occurred. Please try again later.');
          removeErrorMessage();
        }
      } catch (error) {
        console.error('Error submitting login form:', error.message);
        setErrorMessage('An error occurred. Please try again later.');
        removeErrorMessage();
      }
    } else {
      if (!passwordsMatch) {
        setErrorMessage('Passwords do not match');
        removeErrorMessage();
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            registerUsername: formData.registerUsername,
            registerPhoneNumber: formData.registerPhoneNumber,
            registerEmail: formData.registerEmail,
            registerPassword: formData.registerPassword,
          }),
        });

        if (response.ok) {
          console.log('Register form submitted successfully');
          setSuccessMessage('Registered successfully!');
          removeSuccessMessage();
        } else if (response.status === 400) {
          console.log('Email already exists');
          setErrorMessage('Email already exists. Please use a different email.');
          removeErrorMessage();
        } else
        {
          console.error('Error submitting register form:', response.statusText);
          setErrorMessage('An error occurred. Please try again later.');
          removeErrorMessage();
        }
      } catch (error) {
        console.error('Error submitting register form:', error.message);
        setErrorMessage('An error occurred. Please try again later.');
        removeErrorMessage();
      }
    }
  };

  const removeErrorMessage = () => {
    setTimeout(() => {
      setErrorMessage('');
    }, 2000);
  };

  const removeSuccessMessage = () => {
    setTimeout(() => {
      setSuccessMessage('');
    }, 2000);
  };

  return (
    <div className="body">
      <div className="container">
        <div className={`error-message ${!errorMessage ? 'error-message-hidden' : ''}`}>{errorMessage}</div>
        <div className={`success-message ${!successMessage ? 'success-message-hidden' : ''}`}>{successMessage}</div>
        {loginForm && (
          <LoginForm
            onSubmit={handleFormSubmit}
            onSwitchForm={handleSwitchForm}
            formData={formData}
            onInputChange={handleInputChange}
          />
        )}
        {!loginForm && (
          <RegisterForm
            onSubmit={handleFormSubmit}
            onSwitchForm={handleSwitchForm}
            formData={formData}
            onInputChange={handleInputChange}
          />
        )}
      </div>
    </div>
  );
}

export default LoginPage;