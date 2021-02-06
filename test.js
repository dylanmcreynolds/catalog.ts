"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catalog_1 = require("./catalog");
const client = new catalog_1.AxiosClient("http://localhost:8000");
let aCatalog = new catalog_1.RemoteCatalog(client);
const rootCatlogs = aCatalog.getCatalogs();
console.log(rootCatlogs.entries);
//# sourceMappingURL=test.js.map