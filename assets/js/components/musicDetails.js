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


export class MusicDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            music: {},
            isLoading: true,
        }
    }

    getMusic() {
        const { match: { params } } = this.props;

        fetch(`http://127.0.0.1:8000/api/musics/${params.id}`, {
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
                    music: json,
                    isLoading: false
                })
            });
    }

    componentDidMount() {
        this.getMusic();
    }
    
    render() {
        if (this.state.isLoading) {
            return <CircularProgress/>
        } 
        else {
            this.state.music.duration = Math.trunc(this.state.music.duration/60)+":"+this.state.music.duration%60;
            console.log(this.state.music);
            this.artists = "";  
            this.state.music.artists.map((artist, i) => {
                if (this.state.music.artists.length === i + 1) {
                    // last one
                    this.artists += artist.name;
                } else {
                    // not last one
                    this.artists += artist.name + ", " ;
                }
            });
            return (
                <div>
                    <Grid container spacing={2}>
                        <Grid item>
                            <img src={this.state.music.image} alt={this.state.music.name} style={{
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
                                    <Typography component="h5" variant="h5">{this.state.music.name}</Typography>
                                    <Typography variant="subtitle1" color="textSecondary">{this.artists}</Typography>
                                    <Typography variant="subtitle1" color="textSecondary">{this.state.music.album.name}</Typography>
                                    <Typography variant="subtitle2" color="textSecondary">{this.state.music.duration}</Typography>
                                    <Typography variant="subtitle2" color="textSecondary">{this.state.music.label.label}</Typography>
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
                </div>
            )
        }
    }
}