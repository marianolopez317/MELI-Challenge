import React from 'react';
import { getConditionTag } from '../../utils/utils';
import Button from '../Button';
import PropTypes from 'prop-types';
import './styles.scss'

const TITLE = 'Descripción del producto';

export const Description = ({ children }) => {
    return (
        <div className="product-details-description">
            <span className="product-details-description-title">
                {
                    TITLE
                }
            </span>
            <span className="product-details-description-content">
                {
                    children
                }
            </span>
        </div>
    );
}

Description.propTypes ={
    children: PropTypes.element.isRequired
}

Description.defaultProps = {
    children: null
}


export const Picture = ({src}) => {
    return (
        <div className="product-details-picture" style={{backgroundImage: `url(${src})`}}/>
    );
}

Picture.propTypes ={
    src: PropTypes.string.isRequired
}

Picture.defaultProps = {
    src: ''
}

export const PurchaseInfo = ({id, title, price, condition, soldQuantity }) => {
    const { currency, amount, decimals } = price;
    const handlePurchase = () => {}
    return (
        <div className="product-details-purchase-info">
            <span className="product-details-purchase-info-condition">
                {`${getConditionTag(condition)} - ${soldQuantity}`}
            </span>
            <span className="product-details-purchase-info-title">
                {title}
            </span>
            <span className="product-details-purchase-info-price">
                {`${currency} ${amount}`}
            </span>
            <Button className="primary" onClick={handlePurchase}>Comprar</Button>
        </div>
    );
}

PurchaseInfo.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    price: PropTypes.shape({
        currency: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        decimals: PropTypes.number.isRequired,
    }),
    condition: PropTypes.string.isRequired,
    soldQuantity: PropTypes.number.isRequired,
};

PurchaseInfo.defaultProps = {
    id: '',
    title: '',
    price: {
        currency: '',
        amount: 0,
        decimals: 0,
    },
    condition: '',
    soldQuantity: 0,
}

export const ProductDetails = ( { id, title, picture, price, condition, soldQuantity, description } ) => {
    return (
        <div className="product-details">
            <div className="product-details-picture-description">
                <Picture src={picture}/>
                <Description>{description}</Description>
            </div>
            <PurchaseInfo 
                id={id}
                title={title}
                price={price}
                condition={condition}
                soldQuantity={soldQuantity}
                />
        </div>
    );
}

ProductDetails.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    price: PropTypes.shape({
        currency: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        decimals: PropTypes.number.isRequired,
    }),
    condition: PropTypes.string.isRequired,
    soldQuantity: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
};

ProductDetails.defaultProps = {
    id: '',
    title: '',
    picture: '',
    price: {
        currency: '',
        amount: 0,
        decimals: 0,
    },
    condition: '',
    soldQuantity: 0,
    description: ''
}
