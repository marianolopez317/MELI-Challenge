import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSearchValue } from '../../contexts/AppContext';
import searchLogo from './ic_Search.png';
import './styles.scss'

const ENTER_KEYCODE =13;

const SearchBar = (props) => {
    const [inputValue, setInputValue ] = useState('');
    const { setSearchValue } = useSearchValue();
    const history  = useHistory();

    const search = () => {
        if(inputValue){
            setSearchValue(inputValue);
            history.push(`/items?search=${inputValue}`);
        }
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    }

    const handleClick = () => {
        search();
    }

    const handleKeyUp = (e)=> {
        console.log('MARIANO handleKeyUp e',e);
        if (e.keyCode === ENTER_KEYCODE) {
            search();
        }
    }

    const placeholder = "Nunca dejes de buscar";
    return (
        <div className="search-bar">
            <input type="text" onKeyUp={handleKeyUp} value={inputValue} onChange={handleChange} placeholder={placeholder}></input>
            <div className="search-bar-logo" onClick={handleClick}>
                <img src={searchLogo} alt="search"/>
            </div>
        </div>
    );
}

export default SearchBar;
