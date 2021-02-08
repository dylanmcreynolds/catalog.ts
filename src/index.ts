import {Catalog, RemoteCatalog, AxiosClient} from "./catalog";

const client = new AxiosClient("http://localhost:8000");
let aCatalog = new RemoteCatalog(client);

const rootCatlogs: any = aCatalog.getCatalogs();
console.log(rootCatlogs.entries)
