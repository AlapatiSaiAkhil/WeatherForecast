import { Autocomplete, Button, TextField } from "@mui/material";
import CITY_NAMES_LIST from "../util/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeCity, getCitySelector } from "../../redux/slices/citySlice";

export default function CityFilter() {
  const selectedCity = useSelector(getCitySelector);
  const dispatch = useDispatch();

  const handleCityChange = (e,value) => {
    dispatch(changeCity(value));
  };
  return (
    <>
      <Autocomplete
        id="city-select"
        options={CITY_NAMES_LIST}
        sx={{ width: 300 }}
        autoHighlight
        renderInput={(params) => <TextField {...params} label="Select City" />}
        onChange={handleCityChange}
      />
      &nbsp;
      <Button variant="contained" size="small">
        Search
      </Button>
    </>
  );
}
