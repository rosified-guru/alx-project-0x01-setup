import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 bg-gray-100 text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} My App. All rights reserved.
    </footer>
  );
};

export default Footer;
