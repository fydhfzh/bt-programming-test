import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // const token = window.sessionStorage.getItem('token');
    // const url = 'http://localhost:3000/tasks';
    // try {
    //   // const res = fetch(url, {
    //   //   method: 'GET',
    //   //   headers: {
    //   //     Authorization: `Bearer ${token}`,
    //   //   },
    //   // });
    //   // if(!res.ok) {
    //   //   return
    //   // }
    //   // const json = await res.json()
    // } catch (error) {
    //   console.error(error);
    }
  }, []);

  useEffect;

  return (
    <>
      <h1>Dashboard</h1>
      <br />
      <div>
        <ul>{fo}</ul>
      </div>
      <div>
        <button>Log Out</button>
      </div>
    </>
  );
}

export default App;
