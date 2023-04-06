import {useState} from 'react';
import './App.css';

import Login from './components/Login';
import Room from './components/Room';

function App() {

    const [user, setUser] = useState('');
    const [connected, setConnected] = useState(false);
  
    if (!connected) {
      return <Login setUser={setUser} setConnected={setConnected} />;
    }
  
    return (
      <div className='App'>
        <h1>Dobrodošli, {user}!</h1>
        <Room user={user} />
      </div>
    );
  }
  
export default App;
