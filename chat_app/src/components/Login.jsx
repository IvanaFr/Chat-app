import React, {useState } from 'react';

function Login(props) {
    const {setUsers, setConnected } = props;
    const [usersInput, setUsersInput] = useState('');
  
    const handleUsersChange = (event) => {
      setUsersInput(event.target.value);
    };
  
    const handleLoginFormSubmit = (event) => {
      event.preventDefault();
  
      
    const drone = new window.Scaledrone('CiagbspbfBPWz1W6');
    
      drone.on('open', () => {
        if (usersInput === "") {
          alert("Upišite svoje ime!");
        } else {
          setUsers(usersInput);
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
            value={usersInput} 
            onChange={handleUsersChange} 
            placeholder='Unesi ime...'
          />
        </label>
        <button type="submit">Prijavi se</button>
      </form>
    );
  }
  
  export default Login;