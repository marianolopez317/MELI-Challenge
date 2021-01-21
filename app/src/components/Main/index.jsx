import React from 'react';
import './styles.scss'

const Main = ({children}) => {
    return (
        <main className="main">
            {children}
        </main>
    );
}

export default Main;
