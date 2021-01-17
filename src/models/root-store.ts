import { configure, makeObservable, observable } from 'mobx';

configure({ enforceActions: 'observed' });

export default class RootStore {
    @observable username: string;

    constructor() {
        makeObservable(this);

        this.username = 'world';
    }
}
