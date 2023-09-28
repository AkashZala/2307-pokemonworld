import React, { useState } from "react";

const NewTrainer = ({createTrainer}) => {
    const [newTrainer, setNewTrainer] = useState('');

    const newT = (event) => {
        event.preventDefault();
        const newT = { name: newTrainer };
        createTrainer(newT);
        setNewTrainer('');
    }

    return (
        <div>
            <h3>Add A New Trainer</h3>
            <div>
                <form onSubmit={newT}>
                    <label>
                        {'New Trainer: '}
                        <br/>
                        <input
                            name="newTrainer"
                            value={newTrainer}
                            onChange={(event) => { setNewTrainer(event.target.value) }}
                            placeholder='Trainer Name'
                            max={255}
                        />
                    </label>
                    <div>
                        <button type='submit' disabled={!newTrainer}>Add Trainer!</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default NewTrainer;