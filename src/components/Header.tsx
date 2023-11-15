import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between p-5 bg-tan-900">
      <Link href="/">
        <h1>interwoven</h1>
      </Link>
      <Link href="/thenews">
        <h2>the news</h2>
      </Link>
    </header>
  );
};

export default Header;

