const axios = require('axios');

const EVENTS_API_BASE_URL = "http://15.228.15.118:3001/";

const getAllEvents = () => {
    axios.get(`${EVENTS_API_BASE_URL}/events/`)
      .then(res => {
        console.log(res.data);
        return res.data
      })
      .catch(err => {
        console.log(err);
    });
};

modules.export = {
  getAllEvents
}