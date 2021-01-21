import React from 'react';
import { useCategories } from '../../contexts/AppContext';
import logo from './Logo_ML.png'
import './styles.scss';

const Logo = () => {
    const { setCategories } = useCategories();
    const handleClick = () => {
        setCategories([]);
    }
    return (
        <img src={logo} alt="logo" className="logo" onClick={handleClick}/>
    )
}

export default Logo;
