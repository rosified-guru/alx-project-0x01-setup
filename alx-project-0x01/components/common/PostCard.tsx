import React from 'react';

interface PostCardProps {
  title: string;
  summary: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, summary }) => {
  return (
    <div className="border rounded p-4 shadow-sm">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">{summary}</p>
    </div>
  );
};

export default PostCard;
