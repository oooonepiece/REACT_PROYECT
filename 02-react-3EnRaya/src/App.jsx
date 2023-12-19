import { useState } from "react";
function Square(){
  const [value,setValue]=useState(null);

  function darClick(){
    setValue('x');
  }
  return(
    <button 
    className="square"
    onClick={darClick}>
      {value}
    </button>
  )
}

export default function Board() {
  return (
    <>
      <div className="fila">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="fila">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="fila">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}