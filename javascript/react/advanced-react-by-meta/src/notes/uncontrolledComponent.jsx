import { useRef } from 'react';

const UncontrolledComponentForm = () => {
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = inputRef.current.value;

        // Do something with inputValue.
        console.log(inputValue);

        const p = document.createElement('p');
        p.textContent = inputValue;
        document.getElementById('ucc').appendChild(p);
    }
    return (
        <form id='ucc' onSubmit={handleSubmit}>
            <input  type="text" ref={inputRef} />
        </form>
    );
}

export default UncontrolledComponentForm;