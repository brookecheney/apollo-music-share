import React from 'react';
import Header from './components/Header';
import AddSong from './components/AddSong';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';
import { Grid, useMediaQuery, Hidden } from '@material-ui/core';
import songReducer from "./reducer"

export const SongContext = React.createContext({
  song: {
    id: "2989d343-b39a-464a-9555-24a0afa81133",
    title: "AMAZING! Arthur Gunn Performs “Kiss The Girl” For Disney Night - American Idol 2020",
    artist:"Arthur Gunn",
    thumbnail: "http://img.youtube.com/vi/rZXEVkJtm1A/0.jpg",
    url: "https://youtu.be/rZXEVkJtm1A",
    duration: "229"
  },
  isPlaying: false
});



function App() {
  const initialSongState = React.useContext(SongContext)
  const [state, dispatch] = React.useReducer(songReducer, initialSongState)
  const greaterThanSm = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up('md'));
 
  return (
   <SongContext.Provider value= {{ state, dispatch }}>
   <Hidden only="xs">
<Header />
   </Hidden>
{greaterThanSm && <Header />}
<Grid container spacing={3}>
  <Grid style= {{
    paddingTop: greaterThanSm ? 80 : 10
  }} item xs={12} md={7}>
<AddSong />
<SongList />
</Grid>
<Grid 
style = {
  greaterThanMd ? {
  position: "fixed",
  width: "100%",
  right: '0',
  top: 70,

} : {
  position: 'fixed',
  left: 0,
  bottom: 0
}} 
item xs={12} md={5}>
<SongPlayer />
</Grid>
</Grid>

   </SongContext.Provider>
  )
}

export default App;
