import { useState, useEffect } from "react";
import Message from "./Message";
import MessageSend from "./MessageSend";

function Room({ user }) {
  const [messages, setMessages] = useState([]);
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
        setMessages((prevMessages) => [...prevMessages, { id: message.id, content: message.data }]);
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
        {messages.map((message, index) => {
          if (message.send) { 
            return <MessageSend key={index} userName={message.content.userName} content={message.content.content} />
          } else {
            return <Message key={index} userName={message.content.userName} content={message.content.content} />
          } 
        }
       )}
      </div>
      <form onSubmit={handleSendMessage}>
        <label>Poruka:</label>
        <input type="text" placeholder="Type your messege here..." value={messageInput} onChange={handleInputChange} />
        <button type="submit">Pošalji</button>
      </form>
    </div>
  );
}

export default Room;