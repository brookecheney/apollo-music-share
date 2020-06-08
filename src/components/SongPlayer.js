import React from 'react'
import QueuedSongList from './QueuedSongList';
import { Card, CardContent, Typography, IconButton, Slider, CardMedia } from "@material-ui/core";
import { SkipPrevious, PlayArrow, SkipNext } from '@material-ui/icons'
function SongPlayer() {
    return (

        <>
        <Card variant="outlined">
            <div>
                <CardContent>
                    <Typography variant="h5" component="h3">
                🇹🇱 Title



                    </Typography>
                    <Typography variant="subtitle1" component="p" color="textSecondary">
                        Artist
                    </Typography>
                </CardContent>
                <div>
                    <IconButton>
                    <SkipPrevious />
                    </IconButton>
                    <IconButton>
                    <PlayArrow />
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