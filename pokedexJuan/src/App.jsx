import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0);

  return (
    
    <div className="card mb-5 " >
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-warning">Go somewhere</a>
    </div>
  </div>
  
  )
}


