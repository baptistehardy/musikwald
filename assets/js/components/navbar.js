import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import AlbumOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import {Home} from "./home";
import {MusicList} from "./musicList";
import {GenreList} from "./genreList";
import {AlbumList} from "./albumList";
import {ArtistList} from "./artistList";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import {LabelList} from "./labelList";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#ad1457',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

export default function Navbar() {
    const styles = useStyles();

    return (
        <Router>
            <div className={styles.root}>
                <CssBaseline />
                <AppBar position="fixed" className={styles.appBar} component={Link} to="/">
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            musikwald
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={styles.drawer}
                    variant="permanent"
                    classes={{
                        paper: styles.drawerPaper,
                    }}
                >
                    <div className={styles.toolbar} />
                    <List>
                        <ListItem button component={Link} to="/morceau">
                            <ListItemIcon>
                                <MusicNoteOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Morceaux"/>
                        </ListItem>
                        <ListItem button component={Link} to="/artiste">
                            <ListItemIcon>
                                <FaceOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Artistes" />
                        </ListItem>
                        <ListItem button component={Link} to="/album">
                            <ListItemIcon>
                                <AlbumOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Albums" />
                        </ListItem>
                        <ListItem button component={Link} to="/genre">
                            <ListItemIcon>
                                <BookmarksOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Genres" />
                        </ListItem>
                        <ListItem button component={Link} to="/label">
                            <ListItemIcon>
                                <BusinessOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Labels" />
                        </ListItem>
                    </List>
                </Drawer>
                <main className={styles.content}>
                    <div className={styles.toolbar} />
                    <Route exact path="/" component={Home} />
                    <Route path="/morceau" component={MusicList} />
                    <Route path="/artiste" component={ArtistList} />
                    <Route path="/album" component={AlbumList} />
                    <Route path="/genre" component={GenreList} />
                    <Route path="/label" component={LabelList} />
                </main>
            </div>
        </Router>
    );
}