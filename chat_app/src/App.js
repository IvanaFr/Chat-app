import {useState} from 'react';
import './App.css';

import Login from './components/Login';
import Room from './components/Room';

function App() {

    const [users, setUsers] = useState('');
    const [connected, setConnected] = useState(false);
  
    if (!connected) {
      return <Login setUsers={setUsers} setConnected={setConnected} />;
    }
  
    return (
      <div className='App'>
        <h1>Dobrodošli, {users}!</h1>
        <Room />
      </div>
    );
  }
  
export default App;
