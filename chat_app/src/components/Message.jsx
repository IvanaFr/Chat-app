import React from 'react';

function Message(props) {
  const { userName, content } = props;

  return (
    <div>
      <ul className="message-list">
        <li>
          <div className='user'>{userName}</div>
          <div className='content'>{content}</div>
        </li> 
      </ul>
    </div>
  );
}

export default Message;
