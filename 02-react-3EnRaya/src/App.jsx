import { useState } from 'react'

import './App.css'
import Board from './components/Board'
import Square from './components/darClick'


 
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <Board></Board>
      

 
    </>
    )
}
 
export default App