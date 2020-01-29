import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import ArtistListCard from "./artistListCard";
import {Typography} from "@material-ui/core";

export class LabelList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            labels: {},
            isLoading: true,
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

    getLabelsList() {
        fetch(`http://127.0.0.1:8000/api/labels`, {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                this.setState({
                    labels: json,
                    isLoading: false
                })
            });
    }

    componentDidMount() {
        this.getLabelsList();
        this.isAuthenticated();
    }


    render() {
        if (this.state.isLoading) {
            return <CircularProgress/>
        } else {
            this.labels = this.state.labels.map((label) =>
                <ArtistListCard key={label.id} name={label.label} />
            );

            return (
                <div>
                    <h1>Labels</h1>
                    <div>{this.labels}</div>
                </div>
            )
        }
    }
}