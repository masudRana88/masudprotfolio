import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoderScreen from './components/LoderScreen/LoderScreen';
import ProgectsDeatils from './pages/ProgectsDeatils/ProgectsDeatils';

function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <div>{loading ? <LoderScreen /> : <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/project/:id" element={<ProgectsDeatils/>} />
      </Routes>
    </BrowserRouter>
   </> }</div>
}

export default App;
