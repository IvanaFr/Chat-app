import React from 'react';

function Message(props) {
  const { users, content } = props;

  return (
    <div>
      <p>{users}:{content}</p>
    </div>
  );
}

export default Message;
