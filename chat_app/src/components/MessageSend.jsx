import React from 'react';

function MessageSend(props) {
  const { userName, content } = props;

  return (
    <div>
      <ul className="message-send">
        <li>
          <div className='user'>{userName}</div>
          <div className='content'>{content}</div>
        </li> 
      </ul>
    </div>
  );
}

export default MessageSend;