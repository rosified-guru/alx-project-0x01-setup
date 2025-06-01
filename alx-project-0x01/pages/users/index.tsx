import UserCard from "@/components/common/UserCard";
import Header from '@/components/layout/Header';
import { UserProps } from '@/interfaces';


function UsersPage() {
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
      <Header />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}


export default UsersPage;
