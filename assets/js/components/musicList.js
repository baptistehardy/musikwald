import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export class MusicList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            music: {},
            isLoading: true
        }
    }

    getMusicList() {
        fetch(`http://jsonplaceholder.typicode.com/comments`)
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
            let data = this.state.music;
            console.log(data);

            this.props.data.map((e, i) => {
                    console.log("Entered");
                    // Return the element. Also pass key
                return (<p> {e.name} </p>)
                })
        }
    }
}