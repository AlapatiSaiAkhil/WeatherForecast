import { configureStore } from "@reduxjs/toolkit";
import citySlice from "./slices/citySlice";

export default configureStore({
  reducer: { city: citySlice },
});
