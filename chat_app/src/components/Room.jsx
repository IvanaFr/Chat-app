import { useState, useEffect } from 'react';
import Message from './Message';

function Room({context}) {
    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [drone, setDrone] = useState(null);
  
    useEffect(() => {
      const drone = new window.Scaledrone('CiagbspbfBPWz1W6');
      setDrone(drone);

      drone.on('open', error => {
        if (error) {
          console.error(error);
        } else {
          drone.subscribe('if-room');
        }
      });

      drone.on('members', members => {
        setUsers(members.map(member => member.clientData));
      });
  
      drone.on('message', (message) => {
        setMessages(prevMessages => [...prevMessages, { id: message.id, content: message.data }]);
      });
    }, []);
  
    const handleInputChange = (e) => {
      setMessageInput(e.target.value);
    };
  
    const handleSendMessage = (e) => {
      e.preventDefault();
  
        drone.publish({
          room: 'if-room',
          message: {
            users,
            content: messageInput,
          },
        });
  
      setMessageInput('');
    };
  
    return (
      <div>    
        <div className='messagge'>
          {messages.map((message, index) => (
            <Message key={index} users={message.users} context={message.context} />            
          ))}
        </div>
        <form onSubmit={handleSendMessage}>
          <label>Poruka:</label>
           <input 
             type="text"  
             placeholder="Napiši poruku..." 
             value={messageInput} 
             onChange={handleInputChange} 
            />         
          <button type="submit">Pošalji</button>
        </form>
      </div>
    );
  }

  export default Room;