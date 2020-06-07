import React from 'react'
import { CircularProgress, Typography, IconButton, makeStyles } from '@material-ui/core';
import { PlayArrow, Save } from '@material-ui/icons'


function SongList() {
    let loading = false;

    const song = {
        title: "Stolen Dance",
        artist: "Le P",
        thumbnail: "https://cdn.pixabay.com/photo/2020/05/01/07/59/flatlay-5115827_960_720.jpg"
    }

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 50
            }}>
                <CircularProgress />
                </div>
        )
    }




    return <div>{Array.from({ length: 10 }, () => song).map((song, i) => (
        <Song key={i} song={song} />
    ))}</div>;
}

const useStyles = makeStyles(theme => ({
    container: {
        margin: theme.spacing(3)
    },
    songInfoContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    songInfo: {
        width: '100%',
        display: 'flex',
        jusitfyContent: 'space-bwtween'
    },
    thumbnail: {
        objectFit: 'cover',
        width: 140,
        height: 140
    }
}))



function Song({ song }) {
    const classes = useStyles();
    const { title, artist, thumbnail } = song;
    return <card className={classes.container}>
<div className={classes.songInfoContainer}>
   <cardMedia image={thumbnail} className={classes.thumbnail} />
   <div className= {classes.songInfo}>
       <cardContent>
           <Typography gutterBottom variant="h5" component="h2">
               {title}
           </Typography>
           <Typography variant="body1" component="p" color="textSecondary">
               {title}
           </Typography>
       </cardContent>
       <cardActions>
           <IconButton size="small" color="primary">
               <PlayArrow/>
        

           </IconButton>
           <IconButton size="small" color="secondary">
               <Save color="secondary"/>
               

           </IconButton>

       </cardActions>
   </div>
</div>



    </card>;
}



export default SongList;