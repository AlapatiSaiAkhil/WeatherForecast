import { Backdrop, Grid2 as Grid, Paper } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCitySelector } from "../../redux/slices/citySlice";
import fetchAPIResult from "../util/commonFunctions";
import { API_END_POINTS } from "../util/config";
import { DATE_LIMT } from "../util/constants";
import "../../css/weatherTileCSS.css";

export default function WeatherCard() {
  const selectedCity = useSelector(getCitySelector);
  const [data, setData] = useState({ isLoaded: 0 });

  useEffect(() => {
    setData({ isLoaded: 1 });
    let weatherInfoURL = API_END_POINTS.WEATHER_INFO;
    (async () => {
      let resp = await fetchAPIResult(weatherInfoURL, { q: selectedCity });
      setData(resp);
    })();
  }, [selectedCity]);

  let startDate =
    data.isLoaded === true && data.result.list.length > 0
      ? moment(data.result.list[0]["dt_txt"]).format("YYYY-MM-DD HH:mm:ss")
      : "";

  if (data.isLoaded === 1) return <Backdrop color="secondary" />;

  return (
    data.isLoaded === true &&
    data.result.list.length > 0 && (
      <Grid container flexGrow={1} spacing={2}>
        {[...Array(DATE_LIMT).keys()].map((index) => {
          let resultData =
            index === 0
              ? data.result.list[0]
              : data.result.list.filter(
                  (obj) =>
                    obj["dt_txt"] ===
                    moment(startDate)
                      .add(index, "days")
                      .format("YYYY-MM-DD HH:mm:ss")
                      .toString()
                )[0];

          return (
            <Grid
              component={Paper}
              flexGrow={1}
              elevation={5}
              size={{ xs: 12, md: 6, lg: 2.4 }}
              textAlign={"center"}
              spacing={2}
            >
              <Grid item id="card-title" p={2} className="enable-border">
                Date:{" "}
                <b>{moment(resultData.dt_txt).format("YYYY-MM-DD hh A")}</b>
              </Grid>
              <Grid item id="temp-info" className="enable-border">
                Temperature (°C)
              </Grid>
              <Grid item container flexGrow={1} id="temp-info">
                <Grid
                  item
                  size={{ xs: 6, md: 6, lg: 6 }}
                  className="enable-border"
                >
                  Min
                </Grid>
                <Grid
                  item
                  size={{ xs: 6, md: 6, lg: 6 }}
                  className="enable-border"
                >
                  Max
                </Grid>
              </Grid>
              <Grid item container flexGrow={1} id="temp-info">
                <Grid
                  item
                  size={{ xs: 6, md: 6, lg: 6 }}
                  className="enable-border"
                >
                  {(parseFloat(resultData.main.temp_min) - 273.15).toFixed(2)}°C
                </Grid>
                <Grid
                  item
                  size={{ xs: 6, md: 6, lg: 6 }}
                  className="enable-border"
                >
                  {(parseFloat(resultData.main.temp_max) - 273.15).toFixed(2)}°C
                </Grid>
              </Grid>
              <Grid item container flexGrow={1}>
                <Grid
                  item
                  size={{ xs: 6, md: 6, lg: 6 }}
                  className="enable-border"
                >
                  Pressure
                </Grid>
                <Grid
                  item
                  size={{ xs: 6, md: 6, lg: 6 }}
                  className="enable-border"
                >
                  {resultData.main.pressure}
                </Grid>
              </Grid>
              <Grid item container flexGrow={1}>
                <Grid
                  item
                  size={{ xs: 6, md: 6, lg: 6 }}
                  className="enable-border"
                >
                  Humidity
                </Grid>
                <Grid
                  item
                  size={{ xs: 6, md: 6, lg: 6 }}
                  className="enable-border"
                >
                  {resultData.main.humidity}
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    )
  );
}
