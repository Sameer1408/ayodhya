import logo from './logo.svg';
import './App.css';
import LoadingPage from './page/LoadingPage';
import Home from './page/Home';
import { useEffect, useRef } from 'react';

function App() {

  const loadingRef = useRef();

  const loadingPage =()=>{
    setTimeout(()=>{
      loadingRef.current.style.height = '0px';
    },1500)
  }
  
  useEffect(()=>{
    loadingPage();
  },[])

  return (
    <div className="">
        <LoadingPage loadingRef={loadingRef}/>
        <Home/>
    </div>
  );
}

export default App;
