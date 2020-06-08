import React from 'react'
import { TextField, InputAdornment, Button, Dialog, 
    DialogTitle, DialogContent, DialogActions, makeStyles } from '@material-ui/core'
import { Link, AddBoxOutlined } from '@material-ui/icons'


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    urlInput: {
        margin: theme.spacing(1)
    },
    addSongButton: {
        margin: theme.spacing(1)
    },
    dialog: {
        textAlign: 'center',
        
    },
    thumbnail: {
        width: '90%'
    }
}))


function AddSong() {
    const classes = useStyles()
    const [dialog, setDialog] = React.useState(false);

    function handleCloseDialog() {
        setDialog(false)
    }
    return <div className={classes.container}>
        <Dialog
        className={classes.dialog}
        open={dialog}
        onClose={handleCloseDialog}
        >
        <DialogTitle>Edit Song </DialogTitle>
        <DialogContent>
            <img src="https://images.unsplash.com/photo-1591322128932-df9e5b86553d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            alt="Song thumbnail"
            className={classes.thumbnail}
             />
        <TextField 
        margin="dense"
        name="Title"
        label="Title"
        fullwidth

        />
          <TextField 
        margin="dense"
        name="artist"
        label="Artist"
        fullwidth

        />
          <TextField 
        margin="dense"
        name="thumbnail"
        label="thumbnail"
        fullwidth

        />

        </DialogContent>
        <DialogActions>
        <Button onClick={handleCloseDialog} color="secondary">Cancel
        </Button>

        <Button variant="outlined" color="secondary">Add Song</Button>
        </DialogActions>
        </Dialog>
<TextField
className={classes.urlInput}
 placeholder="Add Youtube or soundcloud Url"
 fullWidth
 margin="normal"
 type="url"
 InputProps={{
     startAdornment: (
         <InputAdornment position="start">
         <Link />
         </InputAdornment>
     )
 }}


 />

 <Button
 className={classes.addSongButton}
onClick={() => setDialog(true)}
 variant="contained"
 color="primary"
 endIcon={<AddBoxOutlined />}
 >Add
 </Button>
    </div>
}


export default AddSong;
