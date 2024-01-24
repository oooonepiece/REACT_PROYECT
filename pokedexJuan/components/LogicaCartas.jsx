/*import { useEffect, useState } from "react"
import {CardsPokemon } from "../components/cards"
export default function LogicaApi() {
    const [Pokemon, setPokemon] = useState([]);


    const ruta = "https://pokeapi.co/api/v2/pokemon?limit=151?region=kanto";

    useEffect(() => {
        const getPokemon = async () => {
            const pokemon = await fetch(ruta);
            const transf = await pokemon.json();
            const { result } = transf;

            const Newresultado = result.map(async (Pokemon) => {
                const poke = await fetch(Pokemon.url)
                const pokeJson = await poke.json()
                return pokeJson;

            })
            setPokemon(await Promise.all(Newresultado))
        }
        getPokemon()
    }, [])
    return(
        <CardsPokemon Pokemon={Pokemon}></CardsPokemon>
    )

}
*/
