import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArtistDisplay from "./artistDisplay";

const useStyles = makeStyles({
    card: {
        maxWidth: 200,
        marginRight: '10px',
        boxShadow: 'none'
    },
});

export default function AlbumListCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Album cover"
                    height="200"
                    src={props.cover}
                    title="Album cover"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        <ArtistDisplay artists={props.artists}/>
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        {props.releaseYear}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}