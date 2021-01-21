import { isObject } from "./utils";

export const getDetails = data => {
    let item = {}
    if(data && isObject(data.item)){
        item = data.item;
    }
    return item;
}
