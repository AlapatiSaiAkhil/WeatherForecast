import { Grid2 as Grid, Typography } from "@mui/material";
import CityFilter from "../widgets/CityFilter";

export default function Navbar() {
  return (
    <Grid container flexGrow={1} spacing={2} justifyContent={"space-around"} p={1}>
      <Grid item size={{ xs: 6, md: 4, lg: 4 }}>
        <Typography variant="h3">Weather Forecast</Typography>
      </Grid>
      <Grid item size={{ xs: 6, md: 8, lg: 8 }} display={"flex"}  justifyContent={"right"}>
        <CityFilter />
      </Grid>
    </Grid>
  );
}
