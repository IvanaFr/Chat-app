import { useState, useEffect } from 'react';

import Message from './Message';


function Room({content}) {
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
    

      drone.on('message', (message) => {
        setMessages(prevMessages => [...prevMessages, { id: message.id, content: message.data }]);
      });
  
      return () => {
      };
    }, []);
  
    const handleInputChange = (e) => {
      setMessageInput(e.target.value);
    };
  
    const handleSendMessage = (e) => {
      e.preventDefault();
  
      if (drone) {
        drone.publish({
          room: 'if-room',
          message: {
            users,
            content: messageInput,
          },
        });
      }
  
      setMessageInput('');
    };
  
    return (
      <div>      
        <div className='messagge'>
          {messages.map((message, index) => (
           <Message key={index} users={message.users} content={message.content} />            
          ))}
        </div>
        <form onSubmit={handleSendMessage}>
          <label>Poruka:</label>
           <input 
             type="text"  
             placeholder="Type your messege here..." 
             value={messageInput} 
             onChange={handleInputChange} 
            />         
          <button type="submit">Pošalji</button>
        </form>
      </div>
    );
  }

  export default Room;