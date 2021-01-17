import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';

import 'Styles/index.less';

// For Hot-reloading in Dev Environment
if (module && module.hot) {
    module.hot.accept();
}

ReactDOM.render(<Router />, document.getElementById('root'));
