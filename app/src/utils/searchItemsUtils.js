export const getCategories = data => {
    let categories = []
    if(data && Array.isArray(data.categories)){
        categories = data.categories;
    }
    return categories;
}

export const getItems = data => {
    let items = []
    if(data && Array.isArray(data.items)){
        items = data.items;
    }
    return items;
}
