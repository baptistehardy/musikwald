import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import ArtistListCard from "./artistListCard";
import {Typography} from "@material-ui/core";

export class GenreList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            genres: {},
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

    getGenresList() {
        fetch(`http://127.0.0.1:8000/api/genres`, {
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
                    genres: json,
                    isLoading: false
                })
            });
    }

    componentDidMount() {
        this.getGenresList();
        this.isAuthenticated();
    }


    render() {
        if (this.state.isLoading) {
            return <CircularProgress/>
        } else {
            this.genres = this.state.genres.map((genre) =>
                <ArtistListCard key={genre.id} id={genre.id} name={genre.label} />
            );

            return (
                <div>
                    <h1>Genres</h1>
                    <div>{this.genres}</div>
                </div>
            )
        }
    }
}