import axios, {AxiosInstance} from "axios";
import {Map} from "immutable"


export interface RemoteClient{
    fetchIt(path: string, query_params?: any): Promise<any> ;
}

export class AxiosClient implements RemoteClient {

    private client: AxiosInstance;
     
    constructor(rootUrl: string){
        this.client = axios.create({
            baseURL: rootUrl,
            validateStatus: function(status){
                return status < 400;
            }
        });
        
    }   

    async fetchIt(path: string, query_params?: any): Promise<Array<object>>  {
        return await this.client.get(path, {params: query_params});
    }
}


export interface Query{
   // not sure how to represent this yet

}

export class ClientCatalog{
    _client: RemoteClient;
    _metadata: Map<string, string>;
    _path: string;
    _queries: Array<Query> = [];

    constructor(client: RemoteClient, path: string, metadata: Map<string, string>, queries?: Array<Query>){
        this._client = client;
        this._metadata = metadata;
        this._path = path;
        if (queries !== undefined) this._queries = queries;
    }

    static async fromUri(client: RemoteClient, path: string): Promise<ClientCatalog> {
        const response = await client.fetchIt(`/metadata/${path}`);
        const metadata = Map<string, string>(Object.entries(response.data.data.attributes.metadata));
        return new ClientCatalog(client, path, metadata);
    }  

    get metadata(): Map<string, string>{
        return this._metadata;
    }

    get length(): Promise<number> {
        return (async () => {
            const response = 
            await this._client.fetchIt(`/search/${this._path}`, {fields: "count"});
            return response.data.data.attributes.count;
        })();
        
    }


}