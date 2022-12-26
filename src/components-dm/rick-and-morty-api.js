export class rickAndMortyApi
{
    constructor(config={})
    {
        this.url = config.url || '';
        this.params = config.params || {};
    }

    async getApi(endPoint)
    {
        let body = {};
        let response = await this._doRequest(endPoint, body, 'GET');
        return response;
    }

    async getParamsApi(endPoint, page)
    {
        let body = {};
        let response = await this._doRequestParams(endPoint, body, 'GET', page);
        return response;
    }

    async _doRequest(endPoint, data, method){
        let petition = `${this.url}${endPoint}`;
        let responseTo = [];
        if (method == 'GET'){

            await fetch(petition, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then(json => {
                responseTo = json
            })
            .catch(error => {
                responseTo = error
            })
            
        }
        else 
        {
            await fetch(petition, {
                method: method,
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then(json => {
                responseTo = json
            })
            .catch(error => {
                responseTo = error
            })
        }
        return responseTo
    }

    async _doRequestParams(endPoint, data, method, page){
        let petition = `${this.url}${endPoint}${this.params.page}${page}`;
        let responseTo = [];
        if (method == 'GET'){

            await fetch(petition, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then(json => {
                responseTo = json
            })
            .catch(error => {
                responseTo = error
            })
            
        }
        else 
        {
            await fetch(petition, {
                method: method,
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then(json => {
                responseTo = json
            })
            .catch(error => {
                responseTo = error
            })
        }
        return responseTo
    }
}