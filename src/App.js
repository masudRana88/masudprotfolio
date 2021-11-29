import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import React, { useEffect, useState } from "react";
import LoderScreen from './components/LoderScreen/LoderScreen';

function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

   return <div>{loading ? <LoderScreen/> : <HomePage/>}</div>
}

export default App;
