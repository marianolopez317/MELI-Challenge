import axios from 'axios';

const EMPTY_URL_ERROR_MESSAGE = 'URL is empty'

const configDefault = {
    crossDomain: true,
    responseType: 'json',
    timeout: 10000,
};

/**
 * A simple Axios requester to implement in the tasks
 */
class Requester {
    /**
     * 
     * @param {string} url backend endpoint to get
     * @param {object} params from request
     * @param {object} headers from request
     */
    get(url = '', params = {}, headers = {}){
        return new Promise((resolve, reject) => {
            if (url === '') {
                reject(EMPTY_URL_ERROR_MESSAGE);
            }

            let axiosConfig = {
                url,
                method: 'get',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                },
                ...configDefault,
            };

            if (headers !== '') {
                axiosConfig = {
                    ...axiosConfig,
                    headers: {
                        ...axiosConfig.headers,
                        ...headers,
                    },
                }
            }

            if (params !== '') {
                axiosConfig = {
                    ...axiosConfig,
                    params,
                }
            }

            axios(axiosConfig)
                .then(response => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                });
        })
    }
    //TODO implement post method when necessary
}

export default Requester;
