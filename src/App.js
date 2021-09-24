import './App.css';
import Banner from './Components/Banner/Banner.js'
import Contact from './Components/Contact/Contact';
import Posts from './Components/Posts/Posts';
import {Grid} from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Banner/>
      <Grid container>
          <Grid item xs={12} sm={9}>
            <Posts/>
          </Grid>          
          <Grid item xs={12} sm={3}>
            <Contact/>
          </Grid>
      </Grid>
    </div>
  );
}

export default App;
