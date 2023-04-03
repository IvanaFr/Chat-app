import React from 'react';

function User({ users }) {
  return (
    <div>
      <h2>Korisnici na mreži:{users}</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.users}</li>
        ))}
      </ul>
    </div>
  );
}

export default User;
