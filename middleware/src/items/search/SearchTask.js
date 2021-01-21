import Requester from "../../utils/Requester";
import appConfig from '../../config/appConfig';

class SearchTask extends Requester{
    getResults(query){
        const params = {
            q: query
        }
        return this.get(`${appConfig.BACKEND_ENDPOINT}/sites/MLA/search`, params);
    }
}

export default SearchTask;
