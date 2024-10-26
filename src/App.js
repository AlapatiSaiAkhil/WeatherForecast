import { Grid2 as Grid } from "@mui/material";
import Body from "./components/main/Body";
import Navbar from "./components/main/Navbar";

function App() {
  return (
    <Grid id="root-app">
      <Grid item>
        <Navbar />
        <hr/>
      </Grid>
      <Grid item>
        <Body />
      </Grid>
    </Grid>
  );
}

export default App;
