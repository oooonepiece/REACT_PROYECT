import React from 'react'
import imagenes from '../assets/imagenes'
export function TiempoVista () {
  return (
    <div className='opacidad' >
        <div className="card mb-3 mt-10 rounded-0">
            <div className="card-body ">
                <div className='d-inline-flex border cuadro_central'>
                    <div className='mx-auto'>
                        <h2 className="card-title">Ciudad</h2>
                        <h3 className="card-title">Grados</h3>
                        <h3 className="card-title">Cielo Depejado</h3>
                        <div className='d-inline-flex'>
                            <div>
                                <h5 className="card-title">Viento</h5>
                                <h5 className="card-title mx-2">presion</h5>
                            </div>
                            <div>
                                <h5 className="card-title">Humedad</h5>
                                <h5 className="card-title mx-2">nubosidad</h5>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='d-inline-flex cuadro_central'>
                    
                    <div className="card mx-auto imagen_central ">
                    <div>
                      <h5 className="card-title">timeStamp</h5>  
                    </div>
                        <img src={imagenes.img2} className="card-img-top"/> 
                    </div>
                </div>
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
