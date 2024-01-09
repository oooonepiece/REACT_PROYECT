import React from 'react'
import imagenes from '../assets/imagenes'
import { useState } from "react"
const api ={
  key: "8c62be77417604c5f29880962cb5e6a5",
  base: "https://api.openweathermap.org/data/2.5/"
}

export function TiempoVista () {
    const [buscar, setBuscar] = useState('')
    const [weather, setweather] = useState('')

  const buscarPressed = () => {
    fetch(`${api.base}weather?q=${buscar}&units=metric&appid=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
       setweather(result);
     });
  }
  // Para obetener la fecha actual necesitaremos los siguientes parametros:
  /* necesitamos el dia, el mes y el año*/
  const today = new Date(); // este es el dia actual
  const  hoy = today.getDate().toFixed(0); // con este parametro obtendremos el dia de la semana
 
  //Para obetenr dias de la semana y que nose enseñe en que dia estamos solo debemos de terner 
  // los dias y un array con los diferentes nombres de los dias. estos dias van del 0 al 6
  const dias = today.getDay();
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  // una vez obtenido los dias de la semana, vamos a comparar con el array con los nombres de los dias
  const DiaDeLaSem = days[dias] ; 
  // para saber el dia de mañana solo tenemos que sumar al dia actual + 1;
  const dias1 = today.getDay() + 1;
  const dia1 = days[dias1];

  const dias2 = today.getDay() + 2;
  const dia2 = days[dias2];

  const dias3 = today.getDay() + 3;
  const dia3 = days[dias3];

  const dias4 = today.getDay() + 4;
  const dia4 = days[dias4];

  const  month = today.getMonth().toFixed(0) + 1; // con este parametro obtendremos el mes
  const  year = today.getFullYear();// con este parametro obtendremos el año
  const  date = year + "/" + month +  "/" +  hoy; // una ves obtenido el dia, mes y año. solo tenmos que concatenarlo.
 
  

  return (
    <div className='' >
        <div className='container-fluid d-flex mb-2'>
            <input type="text" className="form-control" placeholder="Ingrese una ciudad"
            onChange={(e) => setBuscar(e.target.value)}
             />
            <button onClick={buscarPressed} type="submit" className="btn btn-secondary ms-3">Buscar</button>     
        </div>

        <div className="card mb-3 mt-10 rounded-2 bg-secondary  bg-opacity-25 text-white">
            
            <div className="card-body d-flex ">
                <div className='pt-5 cuadro_central '>
                    <div className='mx-auto'>
                        <h2 className="card-title pb-2" placeholder="Ciudad">{weather.name}</h2>
                        
                        {typeof weather.main != "undefined" ?
                        <h3 className="card-title pb-2">{(weather.main.temp).toFixed(0)}ºC</h3>
                        :
                            ' '
                        }
                         {typeof weather.main != "undefined" ?
                        <h3 className="card-title pb-2">{weather.weather[0].main}</h3>
                        :
                            ' '
                        }   

                         {typeof weather.main!= "undefined"?
                        <h3 className="card-title pb-2">{weather.weather[0].description}</h3>
                        :
                           ''
                        }
                        
                        <div className='d-inline-flex '>
                            <div className='opacity-100'>

                            {typeof weather.main != "undefined" ?
                        <h5 className="card-title pb-2">Presión {weather.main.pressure}pasc</h5>
                        :
                            ' '
                        }
                                
                                {typeof weather.main != "undefined" ?
                        <h5 className="card-title pb-2">Viento {weather.wind.speed} m/s</h5>
                        :
                            ' '
                        }
                            </div>
                            <div>
                            {typeof weather.main != "undefined" ?
                        <h5 className="card-title ps-2 pb-2">Nubosidad {weather.clouds.all}%</h5>
                        :
                            ' '
                        }
                                {typeof weather.main != "undefined" ?
                        <h5 className="card-title ps-2 pb-2">Humedad {weather.main.humidity}%</h5>
                        :
                            ' '
                        }
                            </div>
                        </div>

                    </div>
                </div>
                <div className='cuadro_central'>
                    <div className="bg-transparent text-white mx-auto imagen_central ">
                    <div className='mb-4 mt-5'>
                        <h5 className="card-title ">
                        {typeof weather.main != "undefined" ?
                        <h5 className="card-title ps-2 pb-2">{date} - {DiaDeLaSem}</h5>
                        :
                            ' '
                        }
                        </h5>  
                    </div>
                    
                        {typeof weather.main != "undefined" ?
                        <div>
                            {weather.weather[0].main == "Clouds" ?
                                <img src={imagenes.img4} className="card-img-top" alt="Nublado"/>
                           : 
                                ' '
                           }
                        </div>
                        :
                            ' '
                        }

                        {typeof weather.main != "undefined" ?
                        <div>
                            {weather.weather[0].main == "Clear" ?
                                <img src={imagenes.img2} className="card-img-top" alt="Despejado"/>
                           : 
                                ' '
                           }
                        </div>
                        :
                            ' '
                        }
                        {typeof weather.main != "undefined" ?
                        <div>
                            {weather.weather[0].main == "Rain" ?
                                <img src={imagenes.img1} className="card-img-top" alt="Lluvioso"/>
                           : 
                                ' '
                           }
                        </div>
                        :
                            ' '
                        }
                        {typeof weather.main != "undefined" ?
                        <div>
                            {weather.weather[0].main == "Snow" ?
                                <img src={imagenes.img5} className="card-img-top" alt="Nevado"/>
                           : 
                                ' '
                           }
                        </div>
                        :
                            ' '
                        }

                        
                    </div>
                </div>
            </div>
        </div>

    <div>
        <div className="row">
            <div className="col-sm-3 ">
                <div className="card text-white bg-secondary  bg-opacity-25">
                <div className="card-body ">
                <h5 className="card-title">{dia1}</h5>
                    <div className="bg-transparent  mx-auto imagenes_pequenas">
                       <img src={imagenes.img1} className="card-img-top"/> 
                    </div>
                    <p className="card-text mt-1 mb-1">
                    {typeof weather.main != "undefined" ?
                        <h5 className="card-title ps-2 pb-2">{weather.main.temp}</h5>
                        :
                            ' '
                        }
                    </p>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card text-white bg-secondary  bg-opacity-25">
                <div className="card-body">
                    <h5 className="card-title">{dia2}</h5>
                    <div className="bg-transparent mx-auto imagenes_pequenas">
                       <img src={imagenes.img2} className="card-img-top"/> 
                    </div>
                    <p className="card-text mt-1 mb-1">grados</p>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card text-white bg-secondary  bg-opacity-25">
                <div className="card-body">
                    <h5 className="card-title">{dia3}</h5>
                        <div className="bg-transparent mx-auto imagenes_pequenas">
                            <img src={imagenes.img3} className="card-img-top"/> 
                        </div>
                    <p className="card-text mt-1 mb-1">grados</p>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card text-white bg-secondary  bg-opacity-25">
                <div className="card-body">
                <h5 className="card-title">{dia4}</h5>
                    <div className="bg-transparent mx-auto imagenes_pequenas">
                       <img src={imagenes.img4} className="card-img-top"/> 
                    </div>
                    <p className="card-text mt-1 mb-1">max:  min:</p>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
