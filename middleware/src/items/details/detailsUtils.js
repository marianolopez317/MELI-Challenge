import { parseAuthor } from "../search/searchUtils";
import * as itemsUtils from '../itemsUtils';

export const transform = response => {
    return { 
        author: itemsUtils.parseAuthor(),
        item: parseItem(response),
    };
}

export const parseItem = (response) => {
    const { 
        plain_text: description
    } = response;
    return {
        ...itemsUtils.parseItemDetails(response, true),
        picture: parsePicture(response),
        description
    }
}

export const parsePicture = response => {
    const {
        pictures: [ firstPicture ] = []
    } = response;
    return firstPicture.url || '';
}
