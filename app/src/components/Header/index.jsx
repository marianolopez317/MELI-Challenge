import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import './styles.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header-nav">
                <Link to="/">
                    <Logo/>
                </Link>
                <SearchBar/>
            </div>
        </header>
    );
}

export default Header;
