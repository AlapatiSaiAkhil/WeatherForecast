import { Card, Grid2 as Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import fetchAPIResult from "../util/commonFunctions";
import { useSelector } from "react-redux";
import { getCitySelector } from "../../redux/slices/citySlice";
import { API_END_POINTS } from "../util/config";

export default function WeatherCard() {
  const selectedCity = useSelector(getCitySelector);
  const [data,setData]=useState({});
  useEffect(()=>{
    let weatherInfoURL = API_END_POINTS.WEATHER_INFO;
    (async ()=>{
      let resp = await fetchAPIResult(weatherInfoURL,{q:selectedCity});
      console.log(resp.data,resp);
    })();
  },[selectedCity])

  let dataTemp = {
    forecastDate: "2024-10-23",
    temperature: "20 deg Cel",
  };
  return (
    <Card component={Paper} elevation={5}>
      <Grid flexGrow={1}>
        <Grid item>{data.forecastDate}</Grid>
        <Grid item>{data.temperature}</Grid>
        <Grid item container>
          <Grid item size={{xs:12,md:6,lg:6}}>
            Min
          </Grid>
          <Grid item size={{xs:12,md:6,lg:6}}>
            Max
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
