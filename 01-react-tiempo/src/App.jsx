import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Formulario } from './componentes/formulario'
import { TiempoVista } from './componentes/tiempoVista'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body className='container-fliud'>
        <header>

        </header>
        <main className='container-fliud'>
          <Formulario></Formulario>
          <TiempoVista>
          </TiempoVista>
        </main>
        <aside>
    
        </aside>
        <footer>

        </footer>
      </body>
      
      
    </>
  )
}
export default App
