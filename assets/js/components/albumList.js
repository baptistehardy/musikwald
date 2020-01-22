import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {MusicListCard} from "./musicListCard";
import {Typography} from "@material-ui/core";
import AlbumListCard from "./albumListCard";

export class AlbumList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: {},
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

    getAlbumList() {
        fetch(`http://127.0.0.1:8000/api/albums`, {
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
                    albums: json,
                    isLoading: false
                })
            });
    }

    componentDidMount() {
        this.getAlbumList();
        this.isAuthenticated();
    }


    render() {
        if (this.state.isLoading) {
            return <CircularProgress/>
        } else {
            this.albums = this.state.albums.map((album) =>
                <AlbumListCard key={album.id} title={album.name} releaseYear={album.releaseYear} cover={album.musics[0].image} artists={album.artists}/>
            );

            return (
                <div>
                    <h1>Albums</h1>
                    <div style={{display: 'flex'}}>{this.albums}</div>
                </div>
            )
        }
    }
}