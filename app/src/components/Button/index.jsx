import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import './styles.scss'

const Button = ( { className, children, onClick }) => {
    const classNames = cls('button', className);
    return (
        <button className={classNames} onClick={onClick}> 
            {children}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.element.isRequired
}

Button.defaultProps = {
    className: '',
    onClick: ()=>{},
    children: null
}

export default Button;
