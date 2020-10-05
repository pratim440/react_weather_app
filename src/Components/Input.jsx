import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const Input = (props) => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    const handleClick = () => {
        return props.onSearch(inputValue);      
    }
return (
    <div id="inputContainer">
        <input autoComplete="off" type="text" placeholder="Enter city name" id="input" onChange={handleChange} value={inputValue}/>
        <Button variant="contained" color="secondary" onClick={handleClick}><SearchIcon /></Button>
    </div>
)
};

export default Input;