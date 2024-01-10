import { useState } from "react";


function Square({value,Click}){
  return(
        <button className="square"
        onClick={Click}>
          {value}
        </button>
      );
  }
export default function Board() {
  const[jugador,setJugador]=useState(true);
  const [squares,setSquares]=useState(Array(9).fill(null));
    
    function darClick(i){
      if(calcularGanador(squares) || squares[i]){
        return;
      }
      const siguienteSquare=squares.slice();
      if(jugador){
        siguienteSquare[i]="X";
      }else{
        siguienteSquare[i]="o";
      }
      setSquares(siguienteSquare);
      setJugador(!jugador);
      }
      function calcularGanador(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
      const ganador=calcularGanador(squares);
      let estado;
      if(ganador){
        estado='Ha ganado el jugador:'+ ganador;
      }else{
        estado="Siguiente jugador: "+(jugador ? "x" :"o");
      }
      

    return (
      <>
        <h1 className="estado">{estado}</h1>
        <div className="tablero">
          <div className="fila">
            <Square value={squares[0]} Click={()=>{darClick(0)}}/>
            <Square value={squares[1]} Click={()=>{darClick(1)}}/>
            <Square value={squares[2]} Click= {()=>{darClick(2)}}/>
          </div>

          <div className="fila">
            <Square value={squares[3]} Click={()=>{darClick(3)}}/>
            <Square value={squares[4]} Click={()=>{darClick(4)}}/>
            <Square value={squares[5]} Click={()=>{darClick(5)}}/>
          </div>

          <div className="fila">
            <Square value={squares[6]} Click={()=>{darClick(6)}}/>
            <Square value={squares[7]} Click={()=>{darClick(7)}}/>
            <Square value={squares[8]} Click={()=>{darClick(8)}}/>
          </div>
        </div>
        <button className="reset" onClick={()=>setSquares(Array(9).fill(null))}>Reset</button>
      </>
    );
  }