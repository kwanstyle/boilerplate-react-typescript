import React from 'react';
import { Provider } from 'mobx-react';
import Loadable from 'react-loadable';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RootStore from 'Models/root-store';

export default class Router extends React.Component<{}, {}> {
    private rootStore: RootStore;

    constructor(props: {}) {
        super(props);
        this.rootStore = new RootStore();
    }

    render(): React.ReactNode {
        return (
            <Provider rootStore={this.rootStore}>
                <BrowserRouter>
                    <Switch>
                        <Route
                            name="main"
                            path="/"
                            title="Home"
                            isExact
                            component={Loadable({
                                loader: () => import('Components/main'),
                                loading: () => <div>Loading</div>,
                            })}
                        />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}
