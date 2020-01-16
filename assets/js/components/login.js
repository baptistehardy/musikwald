import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: false
        }
    }

    isAuthenticated() {
        fetch(`http://127.0.0.1:8000/api/authenticated`, {
            method: 'GET',
        })
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                json = JSON.parse(json);

                this.setState({
                    authenticated: json.authenticated
                })
            });
    }

    componentDidMount() {
        this.isAuthenticated()
    }

    render() {

        if (this.state.authenticated) {
            return (
                <ListItem button component="a" href="/logout">
                    <ListItemText primary="Logout" />
                </ListItem>
            )
        } else {
            return (
                <ListItem button component="a" href="/login">
                    <ListItemText primary="Login" />
                </ListItem>
            )
        }
    }
}