import React, { useState, useEffect } from 'react';
import './admin.css';
import Swal from 'sweetalert2';

function Admin() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [inputValue, setInputValue] = useState('');

  const submitFunction = () => {

    if (password.trim() === 'subhadeep') {
      Swal.fire({
        html: `You really thought I'm that much of a stupid person?`,
        showCancelButton: false,  
          showConfirmButton: false,
      });
    }

    
  };

  useEffect(() => {
    const root = document.documentElement;
    const eye = document.getElementById('eyeball');
    const beam = document.getElementById('beam');
    const passwordInput = document.getElementById('password');

    const handleMouseMove = (e) => {
      let rect = beam.getBoundingClientRect();
      let mouseX = rect.right + rect.width / 2;
      let mouseY = rect.top + rect.height / 2;
      let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
      let degrees = (rad * (20 / Math.PI) * -1) - 350;

      root.style.setProperty('--beamDegrees', `${degrees}deg`);
    };

    const handleEyeClick = (e) => {
      e.preventDefault();
      document.body.classList.toggle('show-password');
      passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.focus();
    };

    root.addEventListener('mousemove', handleMouseMove);
    eye.addEventListener('click', handleEyeClick);

    return () => {
      // Clean up event listeners when component unmounts
      root.removeEventListener('mousemove', handleMouseMove);
      eye.removeEventListener('click', handleEyeClick);
    };
  }, []); // Empty dependency array means this effect runs once, like componentDidMount

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-item">
        <div className="input-wrapper">
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" id="eyeball">
            <div className="eye"></div>
          </button>
          <div id="beam"></div>
        </div>
      </div>
      <div className='adminBtn'>
       
       <button className='loginBtn' onClick={submitFunction}>
         Login
       </button>
     </div>
    </form>
  );
}

export default Admin;
