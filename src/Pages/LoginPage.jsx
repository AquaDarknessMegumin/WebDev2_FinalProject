import React, { useState } from 'react';
import '../Styles/Login_Page.css';

const Logo = () => (
    <img src="dentease.png" alt="Logo" style={{ width: '100px', height: 'auto' }} />
  );
  
const LoginForm = ({ onSubmit, onSwitchForm, onForgotPassword, formData, onInputChange }) => (
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
        <a href="#" className="forgot-password a" onClick={onForgotPassword}>
          Forgot password?
        </a>
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
      {['registerUsername', 'registerPhoneNumber', 'registerEmail', 'registerPassword'].map((id) => (
        <input
          key={id}
          type={id.includes('Password') ? 'password' : 'text'}
          id={id}
          placeholder={id.replace('register', '')}
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

const ForgotPasswordForm = ({ onSubmit, onSwitchForm, onInputChange }) => (
  <div className="form-container">
    <h2 className="h2">Forgot Password</h2>
    <form className="form" onSubmit={onSubmit}>
      {['forgotPasswordEmail', 'forgotPasswordPhoneNumber'].map((id) => (
        <input
          key={id}
          type="text"
          id={id}
          placeholder={id.replace('forgotPassword', '')}
          required
          className="input"
          onChange={onInputChange}
        />
      ))}
      <button type="submit" className="login-button button">
        Submit
      </button>
      <p>
        Remember your password?{' '}
        <button className="switch-form login button" onClick={() => onSwitchForm('login')}>
          Login
        </button>
      </p>
    </form>
  </div>
);

function App() {
  const [loginForm, setLoginForm] = useState(true);
  const [forgotPasswordForm, setForgotPasswordForm] = useState(false);
  const [formData, setFormData] = useState({
    loginUsername: '',
    loginPassword: '',
    rememberMe: false,
    registerUsername: '',
    registerPhoneNumber: '',
    registerEmail: '',
    registerPassword: '',
    agreeTerms: false,
    forgotPasswordEmail: '',
    forgotPasswordPhoneNumber: '',
  });

  const handleSwitchForm = (form) => {
    setLoginForm(form === 'login');
    setForgotPasswordForm(form === 'forgotPassword');
  };

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;

    if (id === 'registerPhoneNumber' && isNaN(value)) {
      return;
    }

    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (loginForm) {
      console.log('Login form submitted:', formData.loginUsername, formData.loginPassword, formData.rememberMe);
    } else if (forgotPasswordForm) {
      console.log('Forgot Password form submitted:', formData.forgotPasswordEmail, formData.forgotPasswordPhoneNumber);
      setForgotPasswordForm(false);
    } else {
      if (!formData.agreeTerms) {
        alert('Please agree to the terms and conditions.');
        return;
      }
      console.log(
        'Register form submitted:',
        formData.registerUsername,
        formData.registerPhoneNumber,
        formData.registerEmail,
        formData.registerPassword,
        formData.agreeTerms,
        formData.rememberMe
      );
    }
  };

  return (
    <div className="body">
      <div className="container">
        {loginForm && !forgotPasswordForm && (
          <LoginForm
            onSubmit={handleFormSubmit}
            onSwitchForm={handleSwitchForm}
            onForgotPassword={() => setForgotPasswordForm(true)}
            formData={formData}
            onInputChange={handleInputChange}
          />
        )}
        {!loginForm && !forgotPasswordForm && (
          <RegisterForm
            onSubmit={handleFormSubmit}
            onSwitchForm={handleSwitchForm}
            formData={formData}
            onInputChange={handleInputChange}
          />
        )}
        {forgotPasswordForm && (
          <ForgotPasswordForm
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

export default App;