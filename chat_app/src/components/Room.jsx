import { useState, useEffect } from "react";
import Message from "./Message";

function Room({ user }) {
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [sentMessages, setSentMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [drone, setDrone] = useState(null);

  const roomName = "observable-room";
  
  useEffect(() => {
    const drone = new window.Scaledrone("CiagbspbfBPWz1W6");
    setDrone(drone);

    drone.on("open", (error) => {
      if (error) {
        console.error(error);
      }
    
      const room = drone.subscribe(roomName);

      room.on("open", (error) => {
        if (error) {
          console.error("Room error:", error);
        } else {
          console.log("Joined room");
        }
      });

      room.on("data", (data, member) => {
        console.log("room.on.data", data, member);
      });

      room.on("message", (message) => {
        console.log("room.on.message", message);
        if (message.data.userName === user) {
          setSentMessages((prevMessages) => [...prevMessages, { id: message.id, content: message.data }]);
        } else {
          setReceivedMessages((prevMessages) => [...prevMessages, { id: message.id, content: message.data }]);
        }
      });
    });

    return () => {}
  }, []);

  const handleInputChange = (e) => {
    setMessageInput(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (drone) {
      drone.publish({
        room: roomName,
        message: {
          userName: user,
          content: messageInput
        }
      });
    }

    setMessageInput("");
  };

  return (
    <div>
      <div className="message"> 
      <div className="message-received">        
        {receivedMessages.map((message, index) => (
          <Message key={message.id} userName={message.content.userName} content={message.content.content} />
        ))}
      </div>
      <div className="message-sent" >       
        {sentMessages.map((message, index) => (
          <Message key={message.id} userName={message.content.userName} content={message.content.content} />
        ))}
      </div>
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
