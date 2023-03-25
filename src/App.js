
import { useState } from 'react';
import './App.css';
//import { Card } from './components/cards';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {
  const [ mode , setMode]=useState("light");

  const toggleMode = ()=>{
         if(mode==='light'){
          setMode('dark')
          document.body.style.backgroundColor="#042743"
         }else{
          setMode('light')
          
          document.body.style.backgroundColor="white"
         }
  }
  return (
  <>
  <Navbar  title="TextUtils" aboutText="About TextUtils"  mode={mode}  toggleMode={toggleMode}/>
 <div className='container my-3'>

 <TextArea  heading = "Enter your text to analyze ......"   mode={mode}/>
 </div>
  

  {/* Demo card ..... */}
 {/* <Card/> */}
 {/* <Card/> */}
 
  </>
  );
}

export default App;
