import axios from "axios";

export class Base {
    // TODO: be more specific than any
    data: any;
    links: any;
    meta: any;
}

export interface Datasource{
    getDescription(): {}; 
    getBlob(): {};
}
 
export interface RemoteClient{
    fetchIt(path: string): Promise<any> ;
}

export class AxiosClient implements RemoteClient {

    private client: any;
     
    constructor(rootUrl: string){
        this.client = axios.create({
            baseURL: rootUrl
        });
        
    }   

    async fetchIt(path: string): Promise<Array<Catalog>>  {
        return await this.client.get(path);
    }
}

export interface Catalog {
    readonly description: any;
}

export class RemoteCatalog implements Catalog {
    protected remoteClient: RemoteClient;

    constructor(remoteClient: RemoteClient){
        this.remoteClient = remoteClient;
    }

    async getCatalogs(): Promise<Array<Catalog>> {
        try{
            const returnVal = await this.remoteClient.fetchIt("/catalogs/entries/description");
            console.log(JSON.stringify(returnVal.data, null, 2 ))
        }
        catch(e){
            console.log(e);
        }
        
        const returnBase = Array<Catalog>();
        return returnBase;

    }
    
    get description(): Base {
        throw new Error("Method not implemented.");
    }


}