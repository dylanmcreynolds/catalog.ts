import {Map} from "immutable";
import {RestClient, IRestResponse} from 'typed-rest-client';
import {IRequestOptions} from 'typed-rest-client/Interfaces';
import {JSONAPIObj} from './jsonapi';
export interface RemoteClient{
    fetchIt(path: string, query_params?: any): Promise<any> ;
}


export interface Query{
   // not sure how to represent this yet

}

export class Catalog{
    _client: RestClient;
    _path:  Array<string>;
    _metadata: any;
    _params: Array<string> = [];
    _queries: Array<Query> = [];

    private constructor(
        client: RestClient,
        path: Array<string>,
        metadata?: Map<string, string>, 
        queries?: Array<Query>,
        params?: Array<string>) {
        this._client = client;
        this._path = path;
        if (metadata !== undefined) this._metadata = metadata;
        if (params !== undefined) this._params = params;
        if (queries !== undefined) this._queries = queries;
    }

    static async fromUri(
        uri: string,
        token?: string){
        const headers = {};
        let options: IRequestOptions = {};
        if (token !== undefined){
            options = <IRequestOptions>{additionalHeaders: {'X-Access-Token"' : token }};
        }
        const client: RestClient = new RestClient('tiled agent', uri, undefined, options);
        const result = await Catalog.getContent(client, "/metadata/");
        let metadata;
        console.log(result);
        if (!!result && !!result.data){
            metadata = result.data.attributes['metadata'];
            console.log(metadata);
        }
       
        return new Catalog(client, new Array<string>(), metadata);
        
    }  

    private static async getContent(client: RestClient, path: string): Promise<JSONAPIObj | null>{
        const response: IRestResponse<JSONAPIObj> =  await client.get<JSONAPIObj>(path);
        return response.result;
    }

}