import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import './App.scss';
import Greet from './components/Greet';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

export default App;
