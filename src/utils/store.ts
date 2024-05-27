import { DailyIntakeT, NutrientT, dishT } from './types';

export const writeCollectionToLS = function (data: dishT[]) {
    const jdata = JSON.stringify(data);
    localStorage.setItem("collection", jdata);
}

export const readCollectionFromLS = function () {
    const data = localStorage.getItem("collection");
    const rdata = data ? JSON.parse(data) : [];
    return rdata;
}

export const readDailyIntakeFromLS = function () {
    const data = localStorage.getItem("dailyIntake");
    const rdata = data ? JSON.parse(data) : [];
    return rdata;
}

export const writeDailyIntakeToLS = function (data: DailyIntakeT) {
    const ddata = JSON.stringify(data);
    localStorage.setItem("dailyIntake", ddata);
}