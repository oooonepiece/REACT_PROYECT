import Square from "./darClick";


export default function Board() {
    return (
      <div>
      
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
      </div>
    );
  }