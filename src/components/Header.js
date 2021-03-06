import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import HeadsetIcon from '@material-ui/icons/Headset';


const useStyles = makeStyles(theme => ({
    title: {
        marginLeft: theme.spacing(2)
    }
}));


function Header() {
    const classes = useStyles();

    return (

    <AppBar color="primary" position='fixed'>
<Toolbar>
  
    <HeadsetIcon />
    <Typography className={classes.title} variant="h6" component="h1">
     Favorite Songs Playlist

    </Typography>


</Toolbar>


    </AppBar>
    )
};

export default Header;