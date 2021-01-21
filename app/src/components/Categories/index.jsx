import React from 'react';
import { useCategories } from '../../contexts/AppContext';
import './styles.scss';

const renderCategories = ( categories ) => {
    return categories.map( (category, i) => {
        const className = i !== categories.length-1 ? "category" : "category-active"
        return (
            <React.Fragment>
                <span className={className}>{category}</span>
                { i !== categories.length-1 && (<span className="category-arrow">{'>'}</span> ) }
            </React.Fragment>
        )
    })
}

const Categories = () => {
    const { categories } = useCategories();
    return (
        <div className="categories">
            { renderCategories(categories) }
        </div>
    );
}

export default Categories;
