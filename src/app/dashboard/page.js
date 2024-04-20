'use client';
import { useState, useEffect } from 'react';

export default function Page() {
  const [name, setName] = useState('');
  useEffect(() => {
    const userData = localStorage.getItem('userdata');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setName(parsedUser.name);
    }
  }, []);
  return (
    <main>
      <header className='p-6 flex justify-between'>
        <div>Dashboard</div>
        <div>{name}</div>
      </header>
    </main>
  );
}
