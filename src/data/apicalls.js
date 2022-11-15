const axios = require("axios").default;
// https://data.cityofnewyork.us/Health/Self-Reported-Drinking-Water-Tank-Inspection-Resul/gjm4-k24g

const getSelfReportedInfo = () =>
  fetch(
    "https://data.cityofnewyork.us/Health/Self-Reported-Drinking-Water-Tank-Inspection-Resul/gjm4-k24g"
  );

export default {
  getSelfReportedInfo,
};
