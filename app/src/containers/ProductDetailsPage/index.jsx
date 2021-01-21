import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailsTask from '../../utils/ItemDetailsTask';
import * as itemDetailsUtils from '../../utils/itemDetailsUtils';
import { objectIsEmpty } from '../../utils/utils';
import { ProductDetails } from '../../components/ProductDetails';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [ data, setData ] = useState({
        isLoading: true,
        productDetails: {}
    });

    const { productDetails, isLoading } = data;

    const getDetails = () => {
        if(id){
            const itemDetailsTask = new ItemDetailsTask();
            itemDetailsTask.getDetails(id).then( response => {
                if(response && response.data){
                    setData({
                        isLoading: false,
                        productDetails: itemDetailsUtils.getDetails(response.data)
                    });
                }
            }).catch(err => {
                setData({
                    isLoading: false,
                    productDetails: {}
                });
            })
        }
    }

    useEffect(()=> {
        getDetails();
    }, [id]);


    if(isLoading){
        return <> Cargando...</>
    }

    return (
        <div className="product-details-page">
            {
                !objectIsEmpty(productDetails) ? (
                    <ProductDetails
                        title={productDetails.title}
                        id={productDetails.id}
                        picture={productDetails.picture}
                        condition={productDetails.condition}
                        price={productDetails.price}
                        soldQuantity={productDetails.sold_quantity}
                        description={productDetails.description}
                    />
                ):
                (
                    <div>No hay resultados</div>
                )
            }
        </div>
    );

}

export default ProductDetailsPage;
