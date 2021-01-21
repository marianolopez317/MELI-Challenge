import SearchTask from "./searchTask";
import * as searchUtils from './searchUtils';

const searchTask = new SearchTask();

const searchController = (req, res) => {
    const { q = '' } = req.query;
    searchTask.getResults(q).then(response=>{
        if(response && response.data){
            return res.status(200).json(searchUtils.transform(response.data));
        }
        return res.status(404).send('Not found');
    }).catch(err=>{
        //console.log('err',err);
        return res.status(400).send('Internal Server Error');
    });
}

export default searchController;
