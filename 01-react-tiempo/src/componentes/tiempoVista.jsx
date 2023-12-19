import React from 'react'
import imagenes from '../assets/imagenes'
export function TiempoVista () {
  return (
    <div >
        <div className="card mb-5 mt-10 rounded-0">
            <div className="card-body ">
                 <h2 className="card-title">Ciudad</h2>
                    <div className="card mx-auto imagen_central " >
                       <img src={imagenes.img2} className="card-img-top"/> 
                    </div>
                 <a href="#" className="btn mt-1 btn-primary">Go somewhere</a>
            </div>
        </div>
    <div>
        <div className="row ">
            <div className="col-sm-3 mb-1">
                <div className="card">
                <div className="card-bo dy">
                <h5 className="card-title">Día</h5>
                    <div className="card mx-auto imagenes_pequenas">
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
                    <div className="card mx-auto imagenes_pequenas">
                       <img src={imagenes.img2} class="card-img-top"/> 
                    </div>
                    <p className="card-text">grados</p>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                <div className="card-bo dy">
                    <h5 className="card-title">Día</h5>
                    <div className="card mx-auto imagenes_pequenas">
                       <img src={imagenes.img3} class="card-img-top"/> 
                    </div>
                    <p className="card-text">grados</p>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                <div className="card-bo dy">
                <h5 className="card-title">Día</h5>
                <   div className="card mx-auto imagenes_pequenas">
                       <img src={imagenes.img4} class="card-img-top"/> 
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
