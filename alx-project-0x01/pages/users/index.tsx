import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const UsersPage: React.FC = () => {
  const users = ['Alice', 'Bob', 'Charlie'];

  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Users</h2>
        <ul className="list-disc pl-6">
          {users.map((user, index) => (
            <li key={index} className="text-gray-700">{user}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default UsersPage;
