import React from 'react'
import QueuedSongList from './QueuedSongList';
import { Card, CardContent, Typography } from "@material-ui/core";

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
             
            </div>
        </Card>


</>
    )

}


export default SongPlayer;