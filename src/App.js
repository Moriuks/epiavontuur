import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import './App.scss';
import Greet from './components/Greet';
import NavBar from './components/NavBar';

//pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Working from './pages/Working';

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
          <Route path='*'>
            <NotFound />
          </Route>
          <Route path='/working'>
            <Home />
          </Route> 
          <Route path='/working'>
            <Working />
          </Route> 

      </BrowserRouter>
  );
}

export default App;
