import React from 'react'
import { useNavigate } from 'react-router';

export default function Home() {
  const navigate = useNavigate();
  return (
    <main>
      <h1>Homepage</h1>
      <button onClick={() => navigate('/asdfgadrfg')}>
        Go to 'Not Found'
      </button>
    </main>
  )
}
