export const parseItemDetails = (item, includeSoldQuantity = false) => {
    const {
        id = '',
        title = '',
        price: amount = 0,
        currency_id: currency,
        condition = '',
        address: {
            state_name = null
        } = {},
        shipping: {
            free_shipping = false
        } = {},
        seller_address: {
            state: {
                name = ""
            } = {}
        } = {},
        sold_quantity,
        thumbnail: picture
    } = item;

    const newItem = {
        id,
        title,
        price: {
            currency,
            amount,
            decimals: 0,
            // I could not find a value for this decimals keys in backend response
        },
        picture,
        condition,
        free_shipping,
        state_name: state_name || name,
        sold_quantity
    }
    if(!includeSoldQuantity){
        delete newItem.sold_quantity;
    }
    return newItem
}

export const parseAuthor = () => {
    return {
        name: "Mariano",
        lastname:"López China Santiago"
    }
}
