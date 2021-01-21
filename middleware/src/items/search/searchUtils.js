import * as itemsUtils from '../itemsUtils';

export const transform = response => {
    return { 
        author: itemsUtils.parseAuthor(),
        categories: parseCategories(response.filters || []),
        items: parseItems(response.results || []),
    };
}


export const parseItems = items => {
    return items.map(item=>{
        return {
            ...itemsUtils.parseItemDetails(item)
        }
    })
}

export const parseCategories = categories => {
    return categories.map(category => {
        const {
            values: [ firstValue = {} ] = []
        } = category;
        return firstValue.name || '';
    });
}
