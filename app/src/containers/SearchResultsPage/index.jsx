import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useCategories, useSearchValue } from '../../contexts/AppContext';
import SearchItemsTask from '../../utils/SearchItemsTask';
import * as searchItemsUtils from '../../utils/searchItemsUtils';
import Product from '../../components/Product';

const SearchResultsPage = (props) => {
    const { setCategories} = useCategories();
    const [ data, setData ] = useState({
        isLoading: true,
        items: []
    });

    const { items, isLoading } = data;

    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const searchParam = query.get('search');
    const { searchValue } = useSearchValue();
    const q = searchValue || searchParam;
    const getResults = () => {
        setCategories([]);
        const searchItemsTask = new SearchItemsTask();
        searchItemsTask.getResults({
            q
        }).then(response=> {
            if(response && response.data){
                setData({
                    isLoading:false,
                    items: searchItemsUtils.getItems(response.data)
                });
                setCategories(searchItemsUtils.getCategories(response.data));
            }
        }).catch(err => {
            setData({
                isLoading:false,
                items: [],
            });
        })
    }

    useEffect(()=>{
        if(q){
            setData({
                isLoading:true,
                items: [],
            });
            getResults();
        }
        else{
            setData({
                isLoading:false,
                items: [],
            });
        }
    }, [q]);

    if(isLoading){
        return <>Buscando...</>
    }

    return (
        <div className="search-items">
            {
                items.length!==0 ?
                items.map( item => {
                    const {
                        id, 
                        title,
                        picture,
                        condition,
                        price,
                        free_shipping,
                        state_name
                    }= item
                    return (
                        <Product 
                            key={id} 
                            id={id}
                            title={title}
                            picture={picture}
                            price={price}
                            condition={condition}
                            freeShipping={free_shipping}
                            stateLocation={state_name}
                        />
                    )
                }) :
                (
                    <div>No hay resultados</div>
                )
            }
        </div>
    );
}

export default SearchResultsPage;
