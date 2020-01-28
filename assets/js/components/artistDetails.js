import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {MusicListCard} from "./musicListCard";
import {Typography} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import ArtistDisplay from "./artistDisplay";

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import AlbumListCard from "./albumListCard";


export class ArtistDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            artist: {},
            isLoading: true,
        }
    }

    getArtist() {
        const { match: { params } } = this.props;

        fetch(`http://127.0.0.1:8000/api/artists/${params.id}`, {
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
                    artist: json,
                    isLoading: false
                })
            });
    }

    componentDidMount() {
        this.getArtist();
    }
    
    render() {
        if (this.state.isLoading) {
            return <CircularProgress/>
        } 
        else {
            this.musics = this.state.artist.musics.map((music) =>
                <MusicListCard key={music.id} id={music.id} title={music.name} duration={music.duration} image={music.image} />
            );
            this.albums = this.state.artist.albums.map((album) =>
                <AlbumListCard key={album.id} id={album.id} title={album.name} releaseYear={album.releaseYear} cover={album.musics[0].image} />
            );
            return (
                <div>
                    <Typography component="h4" variant="h4">{this.state.artist.name}</Typography>
                    <Typography component="h5" variant="h5">Albums</Typography>
                    <div>{this.albums}</div>
                    <Typography component="h5" variant="h5">Morceaux</Typography>
                    <div>{this.musics}</div>
                </div>
            )
        }
    }
}