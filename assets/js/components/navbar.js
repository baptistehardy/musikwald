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
        <div className={styles.root}>
            <CssBaseline />
            <AppBar position="fixed" className={styles.appBar}>
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
                    <ListItem button>
                        <ListItemIcon>
                            <MusicNoteOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Morceaux" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <FaceOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Artistes" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AlbumOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Albums" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <BookmarksOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Genres" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <BusinessOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Labels" />
                    </ListItem>
                </List>
            </Drawer>
            <main className={styles.content}>
                <div className={styles.toolbar} />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
                </Typography>
            </main>
        </div>
    );
}