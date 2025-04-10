import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => (
  <div>
    <h2>Registered Users</h2>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email} - {user.date_of_birth}
          <button onClick={() => onEdit(user)}>Edit</button>
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default UserList;
