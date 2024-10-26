import { Grid2 as Grid } from "@mui/material";
import WeatherCard from "../widgets/WeatherCard";

export default function Body() {
  
  return (
    <Grid flexGrow={1}>
      
      <Grid item>
        <WeatherCard/>
      </Grid>
    </Grid>
  );
}
