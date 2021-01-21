import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getConditionTag } from '../../utils/utils';
import shippingLogo from './ic_shipping.png'
import './styles.scss';

const Product = ({ id, title, picture, price, condition, freeShipping, stateLocation }) => {
    const { currency, amount } = price;
    const history = useHistory();

    const handleClick = () => {
        history.push(`/items/${id}`);
    }

    return (
        <div className="product" onClick={handleClick}>
            <div className="product-picture-wrapper">
                <div className="product-picture" style={{backgroundImage:`url(${picture})`}}/>
            </div>
            <div className="product-detail">
                <div className="product-detail-price">
                    <span>{currency}</span>
                    <span>{amount}</span>
                    {
                        freeShipping &&
                            <img src={shippingLogo} alt="shipping"/>
                    }
                </div>
                <div className="product-detail-description">
                    { `${title} ${getConditionTag(condition)}`}
                </div>
            </div>
            <div className="product-detail-location">
                { stateLocation }
            </div>
        </div>
    );
}

Product.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    price: PropTypes.shape({
        currency: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        decimals: PropTypes.number.isRequired,
    }),
    condition: PropTypes.string.isRequired,
    freeShipping: PropTypes.bool.isRequired,
    stateLocation: PropTypes.string.isRequired
};

Product.defaultProps = {
    id:'',
    title:'',
    picture:'',
    price: {
        currency: '',
        amount: 0,
        decimals: 0,
    },
    condition: '',
    freeShipping: false,
    stateLocation: ''
};

export default Product;
