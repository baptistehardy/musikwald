import * as React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {Link as RouterLink} from "react-router-dom";
import Link from "@material-ui/core/Link";

export default function ArtistListCard(props) {

    return (
        <Card style={{
            boxShadow: 'none',
            marginBottom: '10px'
        }}>
            <div>
                <CardContent>
                    <Typography component="h6" variant="h5">
                        <Link component={RouterLink} to={`/artiste/${props.id}`} style={{ color: 'black'}}>
                            {props.name}
                        </Link>
                    </Typography>
                </CardContent>
            </div>
        </Card>
    )
}