import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import ArtistListCard from "./artistListCard";
import {Typography} from "@material-ui/core";

export class ArtistList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            artists: {},
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

    getArtistsList() {
        fetch(`http://127.0.0.1:8000/api/artists`, {
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
                    artists: json,
                    isLoading: false
                })
            });
    }

    componentDidMount() {
        this.getArtistsList();
        this.isAuthenticated();
    }


    render() {
        if (this.state.isLoading) {
            return <CircularProgress/>
        } else {
            this.artists = this.state.artists.map((artist) =>
                <ArtistListCard key={artist.id} name={artist.name} />
            );

            return (
                <div>
                    <h1>Artistes</h1>
                    <div>{this.artists}</div>
                </div>
            )
        }
    }
}