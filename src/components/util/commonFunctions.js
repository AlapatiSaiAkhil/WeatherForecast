import axios from "axios";
import {API_KEY} from "../util/config"

async function fetchAPIResult(url, reqParams) {
  let resultObj = { statusCode: 500, result: {}, isLoaded: false };
  try {
    await axios.get(url, { params: {...reqParams,appid:API_KEY} }).then((resp) => {
      resultObj.statusCode = resp.status;
      resultObj.result = resp.data;
      resultObj.isLoaded = true;
    });
  } catch (err) {
    console.log("Error while extracting the data");
    resultObj.statusCode = err.status;
    resultObj.result = null;
    resultObj.isLoaded = false;
  }

  return resultObj;
}

export default fetchAPIResult;