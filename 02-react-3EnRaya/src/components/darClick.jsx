import { useState } from "react";
export default function Square(){
    const [value,setValue]=useState(Array(9).fill(null));
    
    function darClick(index){
      const darValor=value.map(c,i =>{
        if(i===index){
          return 'x';
        }else{
          return c;
        }
      })
      }
      return(
        <button className="square"
        onClick={darClick}>
          {value}
        </button>
      )
    
  }
  


