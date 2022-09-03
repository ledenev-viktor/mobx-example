import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStore";

export class CountStore {
    count: number = 1;
    rootStore: IRootStore;

    constructor(rootStore: IRootStore) {
        makeObservable(this, {
            count: observable,
            getCountValue: computed,
            inc: action,
            dec: action,
        }) 
        this.rootStore = rootStore; 
    }
    inc = () => {
        this.count++;
    }
    dec = () => {
        this.count--;
    }

    get getCountValue() {
        return this.count;
    }
}