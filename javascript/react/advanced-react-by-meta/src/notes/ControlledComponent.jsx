import React, { useState } from 'react';

const ControlledComponentForm = () => {
    const [value, setValue] = useState("");

    const handleChange = e => {
        e.preventDefault();

        setValue(e.target.value);

        // Do something with inputValue.
    }

    const handleSubmit = e => {
        e.preventDefault();

        console.log(e.target);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange} />
            {value && <p>{value}</p>}
        </form>
    );
}

export default ControlledComponentForm;