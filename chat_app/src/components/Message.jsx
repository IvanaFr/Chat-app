import React from 'react';

function Message(props) {
  const { users, context } = props;

  return (
    <div>
      <p>{users}:{context}</p>
    </div>
  );
}

export default Message;
