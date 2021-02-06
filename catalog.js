"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteCatalog = exports.AxiosClient = exports.Base = void 0;
const axios_1 = __importDefault(require("axios"));
class Base {
}
exports.Base = Base;
class AxiosClient {
    constructor(rootUrl) {
        this.client = axios_1.default.create({
            baseURL: 'rootUrl'
        });
    }
    fetch(path) {
        return this.client.get(path);
    }
}
exports.AxiosClient = AxiosClient;
class RemoteCatalog {
    constructor(remoteClient) {
        this.remoteClient = remoteClient;
    }
    getCatalogs() {
        const returnVal = this.remoteClient.fetch("/catalogs/description");
        const returnBase = new Base();
        return returnBase;
    }
    getDescription() {
        throw new Error("Method not implemented.");
    }
    getKeys() {
        throw new Error("Method not implemented.");
    }
    getEntries() {
        throw new Error("Method not implemented.");
    }
}
exports.RemoteCatalog = RemoteCatalog;
//# sourceMappingURL=catalog.js.map