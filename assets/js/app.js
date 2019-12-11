import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this._appName = 'Musikwald'
    }

    render() {
        return (
            <h2>{this._appName}</h2>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));