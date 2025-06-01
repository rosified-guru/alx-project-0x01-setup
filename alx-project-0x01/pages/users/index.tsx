import { useState } from 'react';
import Header from '@/components/layout/Header';
import UserModal from '@/components/common/UserModal';
import { UserData } from '@/interfaces';

interface UsersProps {
  posts: UserData[];
}

function Users({ posts }: UsersProps) {
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (user: UserData) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div>
      <Header />
      <main className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Users</h2>
          <button
            onClick={() => handleOpenModal(posts[0])} // Just using first user as example
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add User
          </button>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((user) => (
            <li
              key={user.id}
              className="border p-4 rounded hover:bg-gray-50 cursor-pointer"
              onClick={() => handleOpenModal(user)}
            >
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      </main>

      <UserModal isOpen={isModalOpen} onClose={handleCloseModal} user={selectedUser!} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
