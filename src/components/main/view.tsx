import React from 'react';
import { observer, inject } from 'mobx-react';
import RootStore from 'Models/root-store';

type propType = {
    rootStore: RootStore;
};

@inject('rootStore')
@observer
export default class View extends React.Component<propType, {}> {
    render(): React.ReactNode {
        const { rootStore }: { rootStore: RootStore } = this.props;
        return <h1>Hello {rootStore.username}</h1>;
    }
}
