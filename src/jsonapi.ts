
export interface JSONAPIObj{
    data: IData;
    error: string;
    links: Map<string, string>;
    meta: Object;
}


export interface IData {
    id: string;
    meta: Object;
    type: string;
    attributes: any;
}
