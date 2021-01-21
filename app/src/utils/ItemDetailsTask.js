import Requester from './Requester';

const MIDDLEWARE_ENDPOINT = process.env.REACT_APP_MIDDLEWARE_ENDPOINT

class ItemDetailsTask extends Requester{
    async getDetails(id){
        return this.get(`${MIDDLEWARE_ENDPOINT}/items/${id}`);
    }
}

export default ItemDetailsTask;
