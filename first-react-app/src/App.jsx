import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Demo from './Demo';
import Button from './Button'
import Counter from './Counter'

function App() {
  const username = "vineet";

  return (
    <>
      <h1 style={{color: 'black'}}>Welcome to React </h1>


      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique eos sint, nam adipisci unde soluta odio saepe culpa eaque dolores in. Ab voluptas veniam deleniti iusto, obcaecati reprehenderit voluptate!</p>
    <h2> welcome {username}</h2>
    <Button/>
    <Demo/>
    <Counter/>
    </>
  );
}

export default App
