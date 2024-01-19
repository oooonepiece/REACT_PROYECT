import React from "react"

export function BuscarPOkemon({setBuscar,buscarPressed}) {
    
    return (
        <>
            <form onSubmit={(e) => {e.preventDefault()}} className='container-fluid d-flex mb-2'>
                <input type="text " className="form-control bg-secondary text-white" placeholder="Nombre de Pokemon"
                    onChange={(e) => setBuscar(e.target.value)} />
                <button onClick={buscarPressed()} type="submit" className="btn btn-secondary  ms-3">𝔹𝕦𝕤𝕔𝕒𝕣</button>
            </form>
        </>

    )
}
