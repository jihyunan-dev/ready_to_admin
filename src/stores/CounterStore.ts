import { makeAutoObservable } from 'mobx';

class CounterStore {
    number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increaseNumber = () => {
        this.number++;
    };

    decreaseNumber = () => {
        this.number--;
    };
}

export default new CounterStore();
