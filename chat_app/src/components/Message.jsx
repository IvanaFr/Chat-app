import React from 'react';

function Message(props) {
  const { users, content } = props;
  const messageFromMe = users.id === users.id;
  const youOrMe = messageFromMe
    ? "Messages-message users"
    : "Messages-message";

  return (
    <div>
      <ul className="messages-list">
        <li className={youOrMe}>
          <div className='user'>{users}</div>
          <div className='content'>{content}</div>
        </li> 
      </ul>
    </div>
  );
}

export default Message;
