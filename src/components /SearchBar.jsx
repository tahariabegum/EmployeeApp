import {useState} from 'react'

export default function SearchBar() {
    
    const [input, setInput] = useState ('')
    
    function handleChange (e) {
        setInput(e.target.value)
        onSearch (e.target.value)
    }

    return (
        <div className = "search">
            <input value = {input} onChange={handleChange} />
        </div>
    )
}