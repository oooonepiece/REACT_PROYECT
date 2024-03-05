import './carta.css'

export  function Carta({Pokemon,PokemonSolitario,setPokemonSolitario}) {
    if(PokemonSolitario){
        return <></>
    }
   function handleOnclick(poke){
    setPokemonSolitario(poke)
   }
    return (
        <>
        
        
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 mx-auto ms-4 ">
            {
                Pokemon.map((poke) => {
                    return (
                        <div key={poke.id} className="card ms-4 mb-4  bg-black bg-opacity-75 text-white  carta" onClick={()=>handleOnclick(poke)}>
                            <p className="card-text  w-50 mx-auto  text-center ">Id. {poke.id}</p>
                            <p className="card-text  w-50 mx-auto   text-center ">Tipo {poke.types.map(t=><p>{t.type.name}</p>)}</p>                    
                            <div className="card-body">
                            <img className="h-100 w-100 " src={poke.sprites.other["official-artwork"].front_default}></img>
                            <p className="card-text  w-50 mx-auto  mt-2 text-center ">{poke.name} </p>
                            </div>
                            <div className="card-img-top h-100">       
                           </div>
                        </div>
                    )
                })
            }
        </div>
       </>
    )
}