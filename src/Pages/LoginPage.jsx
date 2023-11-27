import React, { useState } from 'react';
import '../Styles/Login_Page.css';

const Logo = () => (
  <img src="pictures/DentEaseNav.png" alt="Logo" style={{ width: '100px', height: 'auto' }} />
);

const LRLoginForm = ({ onSubmit, onSwitchForm, onForgotPassword, formData, onInputChange }) => (
  <div className="LRform-container">
      <h2 className="LRh2">Login</h2>
      <form className="LRform" onSubmit={onSubmit}>
          {['LRloginUsername', 'LRloginPassword'].map((id) => (
              <input
                  key={id}
                  type={id.includes('Password') ? 'password' : 'text'}
                  id={id}
                  placeholder={id.replace('LRlogin', '')}
                  required
                  className="LRinput"
                  value={formData[id]}
                  onChange={onInputChange}
              />
          ))}
          <div className="LRform-actions">
              <div className="LRcheckbox-label">
                  <input
                      type="checkbox"
                      id="LRrememberMe"
                      checked={formData.rememberMe}
                      onChange={() => onInputChange({ target: { id: 'LRrememberMe', type: 'checkbox', checked: !formData.rememberMe } })}
                  />
                  <label htmlFor="LRrememberMe">Remember me</label>
              </div>
              <a href="#" className="LRforgot-password LRa" onClick={onForgotPassword}>
                  Forgot password?
              </a>
          </div>
          <button type="submit" className="LRlogin-button LRbutton">
              Login
          </button>
          <p>
              Don't have an account?{' '}
              <button className="LRswitch-form LRregister LRbutton" onClick={() => onSwitchForm('register')}>
                  Register
              </button>
          </p>
      </form>
  </div>
);

const LRRegisterForm = ({ onSubmit, onSwitchForm, formData, onInputChange }) => (
  <div className="LRform-container">
      <h2 className="LRh2">Register</h2>
      <form className="LRform" onSubmit={onSubmit}>
          {['LRregisterUsername', 'LRregisterPhoneNumber', 'LRregisterEmail', 'LRregisterPassword'].map((id) => (
              <input
                  key={id}
                  type={id.includes('Password') ? 'password' : 'text'}
                  id={id}
                  placeholder={id.replace('LRregister', '')}
                  required
                  className="LRinput"
                  value={formData[id]}
                  onChange={onInputChange}
              />
          ))}
          <div className="LRform-actions">
              <div className="LRcheckbox-label">
                  <input
                      type="checkbox"
                      id="LRagreeTerms"
                      checked={formData.agreeTerms}
                      onChange={() => onInputChange({ target: { id: 'LRagreeTerms', type: 'checkbox', checked: !formData.agreeTerms } })}
                      required
                  />
                  <label htmlFor="LRagreeTerms" className="LRlabel">
                      I agree to the terms and conditions
                  </label>
              </div>
          </div>
          <button type="submit" className="LRregister-button LRbutton">
              Register
          </button>
          <p>
              Already have an account?{' '}
              <button className="LRswitch-form LRlogin LRbutton" onClick={() => onSwitchForm('login')}>
                  Login
              </button>
          </p>
      </form>
  </div>
);

const LRForgotPasswordForm = ({ onSubmit, onSwitchForm, onInputChange }) => (
  <div className="LRform-container">
      <h2 className="LRh2">Forgot Password</h2>
      <form className="LRform" onSubmit={onSubmit}>
          {['LRforgotPasswordEmail', 'LRforgotPasswordPhoneNumber'].map((id) => (
              <input
                  key={id}
                  type="text"
                  id={id}
                  placeholder={id.replace('LRforgotPassword', '')}
                  required
                  className="LRinput"
                  onChange={onInputChange}
              />
          ))}
          <button type="submit" className="LRlogin-button LRbutton">
              Submit
          </button>
          <p>
              Remember your password?{' '}
              <button className="LRswitch-form LRlogin LRbutton" onClick={() => onSwitchForm('login')}>
                  Login
              </button>
          </p>
      </form>
  </div>
);

function LoginPage() {
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
                  <LRLoginForm
                      onSubmit={handleFormSubmit}
                      onSwitchForm={handleSwitchForm}
                      onForgotPassword={() => setForgotPasswordForm(true)}
                      formData={formData}
                      onInputChange={handleInputChange}
                  />
              )}
              {!loginForm && !forgotPasswordForm && (
                  <LRRegisterForm
                      onSubmit={handleFormSubmit}
                      onSwitchForm={handleSwitchForm}
                      formData={formData}
                      onInputChange={handleInputChange}
                  />
              )}
              {forgotPasswordForm && (
                  <LRForgotPasswordForm
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