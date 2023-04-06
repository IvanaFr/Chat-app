import React, {useState } from 'react';

function Login(props) {
    const {setUser, setConnected } = props;
    const [userInput, setUserInput] = useState('');
  
    const handleUserChange = (event) => {
      setUserInput(event.target.value);
    };
  
    const handleLoginFormSubmit = (event) => {
      event.preventDefault();
  
      
    const drone = new window.Scaledrone('CiagbspbfBPWz1W6');
    
      drone.on('open', () => {
        if (userInput === "") {
          alert("Upišite svoje ime!");
        } else {
          setUser(userInput);
          setConnected(true);
        }
      });
    };
  
    return (
      <form className='login' onSubmit={handleLoginFormSubmit}>
        <label>
          Korisničko ime:
          <input 
            type="text" 
            value={userInput} 
            onChange={handleUserChange} 
            placeholder='Unesi ime...'
          />
        </label>
        <button type="submit">Prijavi se</button>
      </form>
    );
  }
  
  export default Login;