import React from "react";
import { Link } from "react-router-dom";
import NewPokemon from "./NewPokemon";


const Pokemons = ({ pokemons, createWildPokemon }) => {
  return (
    <div className="pokesPage">
      <div>
        <h1>All the Pokemon</h1>
        {
          pokemons.map((pokemon) => {
            return (
              <div key={pokemon.id}>
                <Link to={`/pokemon/${pokemon.id}`}><h3 >{pokemon.name}</h3></Link>
              </div>

            )
          })
        }
      </div>
      <div id='newPform'>
        <NewPokemon createWildPokemon={createWildPokemon}/>
      </div>
    </div>
  )
}

export default Pokemons