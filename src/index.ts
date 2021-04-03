import {Catalog} from "./catalog";


async function collectData(){

   let rootCatalog = await Catalog.fromUri("http://localhost:8000");    

    console.log(rootCatalog);
    // console.log(await rootCatalog.length);
    // const rootCatlogs: any = aCatalog.getChildren();
    // console.log(rootCatlogs.entries);
}

collectData().then(
    () => {
        console.log("in then");
    }
);