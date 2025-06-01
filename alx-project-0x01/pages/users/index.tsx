import UserCard from "@/components/common/UserCard";
import Header from '@/components/layout/Header';
import { UserProps } from '@/interfaces';

interface UsersProps {
  posts: UserProps[];
}

function Users({ posts }: UsersProps) {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Users</h2>
        <div className="space-y-4">
          {posts.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
      <Header />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
