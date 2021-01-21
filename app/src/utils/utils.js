import { CONDITION_NEW, CONDITION_USED } from "./contants";

export const objectIsEmpty = obj => (Object.keys(obj).length === 0);

export const isArray = arr => (Array.isArray(arr));

export const isObject = obj => ( typeof obj === 'object');

export const getConditionTag = condition => {
    switch(condition){
        case CONDITION_NEW:
            return 'Nuevo';
        case CONDITION_USED:
            return 'Usado';
        default:
            return '';
    }
}
