import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";

class RootApp extends React.Component {
    constructor(props) {
        super(props);

        this._appName = 'Musikwald'
    }

    render() {
        return (
            <App/>
        );
    }
}

ReactDOM.render(<RootApp />, document.getElementById('root'));