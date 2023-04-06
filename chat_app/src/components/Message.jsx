import React from 'react';

function Message(props) {
  const { users, content } = props;

  return (
    <div>
      <ul className="messages-list">
        <li>
          <div className='user'>{users}</div>
          <div className='content'>{content}</div>
        </li> 
      </ul>
    </div>
  );
}

export default Message;
