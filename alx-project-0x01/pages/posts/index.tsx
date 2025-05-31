import React from 'react';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PostsPage: React.FC = () => {
  const posts = [
    { title: 'First Post', summary: 'This is the first post summary.' },
    { title: 'Second Post', summary: 'Another interesting post summary.' },
  ];

  return (
    <div>
      <Header />
      <main className="p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Posts</h2>
        {posts.map((post, index) => (
          <PostCard key={index} title={post.title} summary={post.summary} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default PostsPage;
