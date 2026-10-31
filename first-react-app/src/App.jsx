import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Demo from './Demo';

function App() {
  const username = "vineet";

  return (
    <>
      <h1>Welcome to React </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique eos sint, nam adipisci unde soluta odio saepe culpa eaque dolores in. Ab voluptas veniam deleniti iusto, obcaecati reprehenderit voluptate!</p>
    <h2> welcome {username}</h2>
    <Demo/>
    </>
  );
}

export default App
