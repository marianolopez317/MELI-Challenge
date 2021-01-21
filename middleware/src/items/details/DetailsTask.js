import Requester from "../../utils/Requester";
import appConfig from '../../config/appConfig';

class SearchTask extends Requester{
    async getDetails(id){
        const itemDetailsRequest = this.get(`${appConfig.BACKEND_ENDPOINT}/items/${id}`);
        const itemDescriptionRequest = this.get(`${appConfig.BACKEND_ENDPOINT}/items/${id}/description`)
        return Promise.all( [itemDetailsRequest, itemDescriptionRequest] );
    }
}

export default SearchTask;
