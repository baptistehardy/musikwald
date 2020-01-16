import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const StyledCardMedia = withStyles({
    img: {
        width: 125
    }
})(CardMedia);

const StyledCard = withStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        boxShadow: 'none'
    }
})(Card);

const StyledCardContent = withStyles({
   root: {
       flex: '1 0 auto'
   }
})(CardContent);

export class MusicListCard extends React.Component {
    constructor(props) {
        super(props);

        this.artists = this.artistsToString(this.props.artists);
    }

    artistsToString(artists) {


        let artistsArray = [];

        console.log(artists);

        artists.map((artist, key) => {
            artistsArray.push(artist.name);
        });

        return artistsArray.join(', ');
    }



    render() {

        return (
            <StyledCard>
                <div>
                    <StyledCardContent>
                        <Typography component="h5" variant="h5">
                            {this.props.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {this.props.album}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {this.artists}
                        </Typography>
                    </StyledCardContent>
                </div>
                <StyledCardMedia
                    component="img"
                    alt="Cover"
                    src={this.props.image}
                    title="Cover"
                />
            </StyledCard>
        )
    }
}