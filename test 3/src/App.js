// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import RegisterComponent from './components/register-component';
import PreRegister from './components/preregister';
import Home from './pages/home';
import Nav from './pages/nav';
import ComingsoonFeature from './pages/comingsoon-feature';
import NoPage from './pages/no-page';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [number, setNumber] = useState("");
  const [array, setArray] = useState([]);


  const checkNumber = (event) => {
    event.preventDefault();
    
    // array = [];
    setArray([])
    let numberArray = number.split('')
    // console.log('numberArray', numberArray)
    let a = [];
    for (let i = 0; i < 10; i++) {
      let y = numberArray.filter(number => number == i)
      
      a.push({index: i, value: y})
      setArray(a)
      // else 
      // console.log('array', array)
    }
  }

  const resetNumber = () => {
    // array = [];
    setArray([])
    setNumber("")

  }

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/register'} element={<Register />}>
          <Route path={'/register'} element={<PreRegister />} />
          <Route path={'/register/next'} element={<RegisterComponent />} />
        </Route>
        <Route path={'/'} element={<Nav />}>
          <Route path={'/home'} element={<Home />} />
          <Route path={'/sales'} element={<ComingsoonFeature />} />
          <Route path={'/inventory'} element={<ComingsoonFeature />} />
          <Route path={'/purchase'} element={<ComingsoonFeature />} />
          <Route path={'/user'} element={<ComingsoonFeature />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
