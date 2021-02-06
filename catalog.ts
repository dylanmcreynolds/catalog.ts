import axios from "axios";

export class Base {
    // TODO: be more specific than any
    data: any;
    links: any;
    meta: any;
}

export interface Catalog {
    getCatalogs(): Promise<Array<Catalog>>; 
    getDescription(): Base; 
    getKeys(): Base;
    getEntries(): Base;
}

export interface Datasource{
    getDescription(): {}; 
    getBlob(): {};
}
 
export interface RemoteClient{
    fetch(path: string): Promise<any> ;
}

export class AxiosClient implements RemoteClient{

    private client: any;
     
    constructor(rootUrl: string){
        this.client = axios.create({
            baseURL: 'rootUrl'
        });
    }

    aysnc fetch(path: string): Promise<any> {
        return await this.client.get(path);
    }
}

export class RemoteCatalog implements Catalog {
    protected remoteClient: RemoteClient;

    constructor(remoteClient: RemoteClient){
        this.remoteClient = remoteClient;
    }

    async getCatalogs(): Promise<Array<Catalog>> {
        const returnVal = await this.remoteClient.fetch("/catalogs/description");
        const returnBase = Array<Catalog>();
        return returnBase;

    }
    getDescription(): Base {
        throw new Error("Method not implemented.");
    }
    getKeys(): Base {
        throw new Error("Method not implemented.");
    }
    getEntries(): Base {
        throw new Error("Method not implemented.");
    }


}