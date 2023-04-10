import React from 'react';
import "./Message.css"

function Message(props) {
  const { userName, content, type } = props;

  const date = new Date();
  const time = date.toLocaleTimeString();

  return (
    <div>
      {type === "receivedMessages" ? (
        <div className="message-received"> 
          <p className='timeR'>{time}</p> 
          <div className="user">{userName}</div>
          <div className="content">{content}</div>
        </div>
      ) : (
        <div className="message-sent">
          <p className='timeS'>{time}</p>
          <div className="user">{userName}</div>
          <div className="content">{content}</div>
        </div>
      )}
    </div>
  );
}

export default Message;

