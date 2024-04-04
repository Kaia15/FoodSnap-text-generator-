import { dishT } from './types';
// import mockdata from "../mock-data.json";

export const writeToLS = function (data: dishT[]) {
    const jdata = JSON.stringify(data);
    localStorage.setItem("collection", jdata);
}

export const readFromLS = function () {
    const data = localStorage.getItem("collection");
    const rdata = data ? JSON.parse(data) : [];
    return rdata;
}