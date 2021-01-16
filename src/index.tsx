import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'Components/main';

// For Hot-reloading in Dev Environment
if (module && (module as any).hot) {
    (module as any).hot.accept();
}

ReactDOM.render(<Main />, document.getElementById('root'));
