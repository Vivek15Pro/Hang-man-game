import { useState } from 'react'
import TextInputFormContainer from './compoents/textInputForm/TextInputFormContainer';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Startgame from './pages/Startgame';
import PlayGame from './pages/PlayGame';
import Calculator from './compoents/calculator/Calculator';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
       <Routes>
        <Route path='/' element={<Startgame />} />
        <Route path = '/play' element={<PlayGame/>} />
       </Routes>
       {/* <Calculator/> */}
      
      </>
  )
}

export default App
