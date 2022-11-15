const axios = require("axios");
// https://data.cityofnewyork.us/Health/Self-Reported-Drinking-Water-Tank-Inspection-Resul/gjm4-k24g

const getSelfReportedInfo = () =>
  axios.get(
    "https://data.cityofnewyork.us/Health/Self-Reported-Drinking-Water-Tank-Inspection-Resul/gjm4-k24g"
  );

export default {
  getSelfReportedInfo,
};
