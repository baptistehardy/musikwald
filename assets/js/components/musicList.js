import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {MusicListCard} from "./musicListCard";

export class MusicList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            music: {},
            isLoading: true
        }
    }

    getMusicList() {
        fetch(`http://127.0.0.1:8000/api/musics`, {
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
        this.getMusicList();
    }


    render() {
        if (this.state.isLoading) {
            return (
                <CircularProgress/>
            )
        } else {
            this.albums = this.state.music.map((music) =>
                <MusicListCard key={music.id} title={music.name} artiste="artiste" duration={music.duration} />
            );

            return (
                <div>
                    <h1>Morceaux</h1>
                    <div>{this.albums}</div>
                </div>
            )
        }
    }
}