import React from 'react'
import imagenes from '../assets/imagenes'
export function TiempoVista () {
  return (
    <div >
        <div className="card mb-5 mt-10 rounded-0">
            <div className="card-body ">
                 <h5 className="card-title">Card title</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    <div>
        <div className="row ">
            <div className="col-sm-3 mb-1">
                <div className="card">
                <div className="card-bo dy">
                <h5 className="card-title">Día</h5>
                    <div className="card">
                       <img src={imagenes.img1} class="card-img-top"/> 
                    </div>
                    <p className="card-text">grados</p>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                <div className="card-bo dy">
                    <h5 className="card-title">Día</h5>
                    <div className="card">
                       <img src={imagenes.img1} class="card-img-top"/> 
                    </div>
                    <p className="card-text">grados</p>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                <div className="card-bo dy">
                    <h5 className="card-title">Día</h5>
                    <div className="card">
                       <img src={imagenes.img1} class="card-img-top"/> 
                    </div>
                    <p className="card-text">grados</p>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                <div className="card-bo dy">
                <h5 className="card-title">Día</h5>
                <   div className="card">
                       <img src={imagenes.img1} class="card-img-top"/> 
                    </div>
                    <p className="card-text">grados</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
