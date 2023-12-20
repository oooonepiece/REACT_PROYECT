import React from 'react'

export function Formulario () {
  return (
        <form>  
          <div className='d-flex mb-2 bg-secondary bg-opacity-25'>
            <input className='buscador' type='text' name='form' placeholder='Ingresa una ciudad'></input>
            <input className='boton' name='Enviar' type='submit'></input>
          </div> 
        </form>
        
  )
}
