import Requester from './Requester';

const MIDDLEWARE_ENDPOINT = process.env.REACT_APP_MIDDLEWARE_ENDPOINT

class SearchItemsTask extends Requester{
    async getResults(params){
        return this.get(`${MIDDLEWARE_ENDPOINT}/items`,params);
    }
}

export default SearchItemsTask;
