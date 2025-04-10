import React, { useState, useEffect } from 'react';

const UserForm = ({ selectedUser, onSave }) => {
  const [user, setUser] = useState({ name: '', email: '', date_of_birth: '' });

  useEffect(() => {
    if (selectedUser) setUser(selectedUser);
  }, [selectedUser]);

  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onSave(user);
    setUser({ name: '', email: '', date_of_birth: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
      <input name="date_of_birth" type="date" value={user.date_of_birth} onChange={handleChange} required />
      <button type="submit">{user.id ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default UserForm;
