import React from 'react'
import QueuedSongList from './QueuedSongList';
import { Card, CardContent, Typography, IconButton, Slider, CardMedia, makeStyles } from "@material-ui/core";
import { SkipPrevious, PlayArrow, SkipNext } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    container: {
            dispaly: 'flex',
            justifyContent: 'space-between',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0px 15px',
    },
    content: {
        flex: '1 0 auto'
    },
    thumbnail: {
        width: 150
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    },
    playIcon: {
        height: 38,
        width: 38

    }
}))

function SongPlayer() {
    const classes = useStyles()


    return (

        <>
        <Card variant="outlined" className={classes.container}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="h5" component="h3">
                🇹🇱 Title



                    </Typography>
                    <Typography variant="subtitle1" component="p" color="textSecondary">
                        Artist
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton>
                    <SkipPrevious />
                    </IconButton>
                    <IconButton>
                    <PlayArrow  className={classes.playIcon}/>
                    </IconButton>
                    <IconButton>
                    <SkipNext />
                    </IconButton>
                    <Typography variant="subtitle1" component="p" color="textSecondary">
                    00:01:03
                    </Typography>
                </div>
                <Slider
                type="range"
                min={0}
                max={1}
                step={0.01}
                />
             
            </div>
            <CardMedia image="https://images.unsplash.com/photo-1591241900019-b4a4c6d1cb61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" ></CardMedia>
        </Card>
        <QueuedSongList />


</>
    );

}


export default SongPlayer;