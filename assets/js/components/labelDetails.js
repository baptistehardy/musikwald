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


export class LabelDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            label: {},
            isLoading: true,
        }
    }

    getLabel() {
        const { match: { params } } = this.props;

        fetch(`http://127.0.0.1:8000/api/labels/${params.id}`, {
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
                    label: json,
                    isLoading: false
                })
            });
    }

    componentDidMount() {
        this.getLabel();
    }
    
    render() {
        if (this.state.isLoading) {
            return <CircularProgress/>
        } 
        else {
            return (
                <Typography>{this.state.label.label}</Typography>
            )
        }
    }
}