import React, { useRef, useState } from 'react'

export default function Home() {
    const [values, setValues] = useState([])
    const inputRef = useRef()

    function handleSubmit() {
        setValues(inputRef.current.value)
    }
    console.log(values);
    return (
        <div>
            <label>
                Task Name:
            </label>
            <input ref={inputRef} type="text" className='inputText' name="inputText" placeholder='Enter a todo' />
            <button type="submit" style={{ cursor: 'pointer' }} onClick={handleSubmit}>Add Todo</button>
            <p>{values}</p>
            <ul>
                {values.map((item) => {
                    <li>{item}</li>
                })
                }
            </ul>
        </div>
    )
}