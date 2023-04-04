import React from 'react';

function Message({ messages }) {
  return (
    <div className="message">
      {messages.map((message) => (
        <div key={message.id}>
          <p>{message.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Message;
