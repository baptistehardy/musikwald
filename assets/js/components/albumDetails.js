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


export class AlbumDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            album: {},
            isLoading: true,
        }
    }

    getAlbum() {
        const { match: { params } } = this.props;

        fetch(`http://127.0.0.1:8000/api/albums/${params.id}`, {
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
                    album: json,
                    isLoading: false
                })
            });
    }

    componentDidMount() {
        this.getAlbum();
    }
    
    render() {
        if (this.state.isLoading) {
            return <CircularProgress/>
        } 
        else {
            this.artists = "";  
            this.state.album.artists.map((artist, i) => {
                if (this.state.album.artists.length === i + 1) {
                    // last one
                    this.artists += artist.name;
                } else {
                    // not last one
                    this.artists += artist.name + ", " ;
                }
            });
            this.musics = this.state.album.musics.map((music) =>
                <MusicListCard key={music.id} id={music.id} title={music.name} artists={music.artists} album={this.state.album.name} duration={music.duration} image={music.image} />
            );
            return (
                <div>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <img src={this.state.album.musics[0].image} alt={this.state.album.name} style={{
                                        width: 200,
                                        height: 200,
                                        borderRadius: 4,
                                        overflow: "hidden",
                                        borderWidth: 3,
                                    }}/>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={1}>
                                        <Grid item xs>
                                            <Typography component="h5" variant="h5">{this.state.album.name}</Typography>
                                            <Typography variant="subtitle1" color="textSecondary">{this.artists}</Typography>
                                            <Typography variant="subtitle2" color="textSecondary">{this.state.album.releaseYear}</Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                startIcon={<DeleteIcon />}
                                            >
                                                Supprimer
                                            </Button>
                                            &nbsp;
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                startIcon={<EditIcon />}
                                            >
                                                Modifier
                                            </Button>
                                        
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <div>{this.musics}</div>
                        </Grid>
                    </Grid>
                    
                </div>
                // <Typography>{this.state.album.name}</Typography>
            )
        }
    }
}