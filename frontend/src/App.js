import React, { useEffect, useState } from 'react';
import api from './api';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    const res = await api.get('/registrations/');
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSave = async (user) => {
    if (user.id) {
      await api.put(`/registrations/${user.id}/`, user);
    } else {
      await api.post('/registrations/', user);
    }
    fetchUsers();
    setSelectedUser(null);
  };

  const handleDelete = async (id) => {
    await api.delete(`/registrations/${id}/`);
    fetchUsers();
  };

  return (
    <div>
      <h1>User Registration App</h1>
      <UserForm selectedUser={selectedUser} onSave={handleSave} />
      <UserList users={users} onEdit={setSelectedUser} onDelete={handleDelete} />
    </div>
  );
}

export default App;
