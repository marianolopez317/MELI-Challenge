import DetailsTask from './DetailsTask';
import * as detailsUtils from './detailsUtils'

const detailsTask = new DetailsTask();

const descriptionController = (req, res) => {
    const { id = null } = req.params; 
    if(!id){
        return res.status(404).send('Not found');
    }
    detailsTask.getDetails(id).then(([ itemDetailsResponse, itemDescriptionResponse ])=>{
        if(itemDetailsResponse && itemDetailsResponse.data && itemDescriptionResponse && itemDescriptionResponse.data){
            return res.status(200).json(detailsUtils.transform({...itemDetailsResponse.data, ...itemDescriptionResponse.data}));
        }
        return res.status(404).send('Not found');
    }).catch(err=>{
        console.log('err',err);
        return res.status(400).send('Internal Server Error');
    });
}

export default descriptionController;
