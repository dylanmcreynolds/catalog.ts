import {ClientCatalog, AxiosClient} from "./catalog";


async function collectData(){

    const client = new AxiosClient("http://localhost:8000");
    let rootCatalog = await ClientCatalog.fromUri(client, "");
    

    console.log(rootCatalog.metadata);
    console.log(await rootCatalog.length);
    // const rootCatlogs: any = aCatalog.getChildren();
    // console.log(rootCatlogs.entries);
}

collectData().then(
    () => {
        console.log("in then");
    }
);