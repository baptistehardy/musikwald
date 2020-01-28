import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {MusicListCard} from "./musicListCard";
import {Typography} from "@material-ui/core";

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
        console.log(this.state.music);
        return (
            <Typography>{this.state.music.name}</Typography>
        )
    }
}