import React from 'react';

function Message(props) {
  const { userName, content, type } = props;

  return (
    <div>
      {type === "received" ? (
        <div> 
          <div className="user">{userName}</div>
          <div className="content">{content}</div>
        </div>
      ) : (
        <div>
          <div className="user">{userName}</div>
          <div className="content">{content}</div>
        </div>
      )}
    </div>
  );
}

export default Message;

