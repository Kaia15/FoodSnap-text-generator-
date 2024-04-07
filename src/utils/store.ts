import { dishT } from './types';

export const writeToLS = function (data: dishT[]) {
    const jdata = JSON.stringify(data);
    localStorage.setItem("collection", jdata);
}

export const readFromLS = function () {
    const data = localStorage.getItem("collection");
    const rdata = data ? JSON.parse(data) : [];
    return rdata;
}