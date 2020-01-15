import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";

export class MusicListCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const classes = makeStyles({
            card: {
                maxWidth: 345,
            },
            media: {
                height: 140,
            },
        });

        return (
            <Card className={classes.card}>
                <CardActionArea>
                    {/*<CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />*/}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        {this.props.music_id}
                    </Button>
                </CardActions>
            </Card>
        )
    }
}