import React, { useState } from "react";

const NewPokemon = ({createWildPokemon}) => {
    const [newPokemon, setNewPokemon] = useState('');

    const newP = (event) => {
        event.preventDefault();
        const newP = { name: newPokemon, trainer_id: null };
        createWildPokemon(newP);
        setNewPokemon('');
    }

    return (
        <div>
            <h3>Add A New Pokemon</h3>
            <div>
                <form onSubmit={newP}>
                    <label>
                        {'New Pokemon: '}
                        <br/>
                        <input
                            name="newPokemon"
                            value={newPokemon}
                            onChange={(event) => { setNewPokemon(event.target.value) }}
                            placeholder='Pokemon Name'
                            max={255}
                        />
                    </label>
                    <div>
                        <button type='submit' disabled={!newPokemon}>Add Pokemon!</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default NewPokemon;