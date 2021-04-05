import axios from "axios"

// const STATS_API_BASE_URL = "http://15.228.15.118:3001";
const STATS_API_BASE_URL = "http://localhost:3001";

export const getAllEvents = async () => {
    return (await axios.get(`${STATS_API_BASE_URL}/stats/`)).data
};

export const getAllEventsByName = async (name) => {
    return (await axios.get(`${STATS_API_BASE_URL}/stats/${name}`)).data
};