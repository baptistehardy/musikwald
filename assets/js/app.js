import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/navbar";

class App extends React.Component {
    constructor(props) {
        super(props);

        this._appName = 'Musikwald'
    }

    render() {
        return (
            <Navbar/>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));