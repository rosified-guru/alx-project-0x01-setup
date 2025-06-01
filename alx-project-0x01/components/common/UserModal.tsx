import React from 'react';
import { UserModalProps } from '@/interfaces';

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-lg font-bold">
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p className="mt-2"><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
        <p className="mt-2"><strong>Company:</strong> {user.company.name}</p>
      </div>
    </div>
  );
};

export default UserModal;
