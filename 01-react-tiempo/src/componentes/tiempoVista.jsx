import React from 'react'
import imagenes from '../assets/imagenes'
export function TiempoVista () {
  return (
    <div className='' >
        <div className="card mb-3 mt-10 rounded-2 bg-secondary  bg-opacity-25 text-white">
            <div className="card-body d-flex ">
                <div className='pt-5 cuadro_central '>
                    <div className='mx-auto '>
                        <h2 className="card-title pb-2">Ciudad</h2>
                        <h3 className="card-title pb-2">Grados</h3>
                        <h3 className="card-title pb-2">Cielo Depejado</h3>
                        <div className='d-inline-flex'>
                            <div className='opacity-100'>
                                <h5 className="card-title pt-2">Presión</h5>
                                <h5 className="card-title ms-4 ">Viento</h5>
                            </div>
                            <div>
                                <h5 className="card-title pt-2">Nubosidad</h5>
                                <h5 className="card-title ms-4">Humedad</h5>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='cuadro_central'>
                    
                    <div className="card bg-transparent text-white mx-auto imagen_central ">
                    <div>
                      <h5 className="card-title ">timeStamp</h5>  
                    </div>
                        <img src={imagenes.img2} className="card-img-top"/> 
                    </div>
                </div>
            </div>
        </div>

    <div>
        <div className="row  ">
            <div className="col-sm-3 ">
                <div className="card text-white bg-secondary  bg-opacity-25">
                <div className="card-body ">
                <h5 className="card-title">Día</h5>
                    <div className="card bg-transparent  mx-auto imagenes_pequenas">
                       <img src={imagenes.img1} class="card-img-top"/> 
                    </div>
                    <p className="card-text mt-1 mb-1">grados</p>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card text-white bg-secondary  bg-opacity-25">
                <div className="card-body">
                    <h5 className="card-title">Día</h5>
                    <div className="card bg-transparent mx-auto imagenes_pequenas">
                       <img src={imagenes.img2} class="card-img-top"/> 
                    </div>
                    <p className="card-text mt-1 mb-1">grados</p>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card text-white bg-secondary  bg-opacity-25">
                <div className="card-body">
                    <h5 className="card-title">Día</h5>
                    <div className="card bg-transparent mx-auto imagenes_pequenas">
                       <img src={imagenes.img3} class="card-img-top"/> 
                    </div>
                    <p className="card-text mt-1 mb-1">grados</p>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card text-white bg-secondary  bg-opacity-25">
                <div className="card-body">
                <h5 className="card-title">Día</h5>
                <   div className="card bg-transparent mx-auto imagenes_pequenas">
                       <img src={imagenes.img4} class="card-img-top"/> 
                    </div>
                    <p className="card-text mt-1 mb-1">grados</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
