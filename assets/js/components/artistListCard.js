import * as React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

export default function ArtistListCard(props) {

    return (
        <Card style={{
            boxShadow: 'none',
            marginBottom: '10px'
        }}>
            <div>
                <CardContent>
                    <Typography component="h6" variant="h5">
                        {props.name}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    )
}