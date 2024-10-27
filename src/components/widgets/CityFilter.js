import { Autocomplete, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCity } from "../../redux/slices/citySlice";
import CITY_NAMES_LIST from "../util/constants";

export default function CityFilter() {
  const [city,setCity]=useState("kakinada");
  const dispatch = useDispatch();

  const handleCityChange = (e,value) => {
    setCity(value);
  };
  return (
    <>
      <Autocomplete
        id="city-select"
        options={CITY_NAMES_LIST}
        sx={{ width: 300 }}
        autoHighlight
        value={city}
        renderInput={(params) => <TextField {...params} label="Select City" />}
        onChange={handleCityChange}
      />
      &nbsp;
      <Button variant="contained" size="small" onClick={()=>{dispatch(changeCity(city))}}>
        Search
      </Button>
    </>
  );
}
