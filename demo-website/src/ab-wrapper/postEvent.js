import axios from 'axios';
const EVENTS_BE_URL = 'http://ec2-52-86-73-127.compute-1.amazonaws.com:3001';

export const postEvent = async (name, group, user_id) => {
  try {
    /*
    	* event_name VARCHAR(100) UNIQUE NOT NULL,
	    * test_group VARCHAR(100),
	    * attributes VARCHAR(100),
      */
    let event = {
      'event_name': name,
      'test_group': group,  // must get from fetchTests
      'attributes': user_id // should rename this column on our DB
    }
    const response = await axios.post(`${EVENTS_BE_URL}/events/track`, event);
    const newEventResponse = response.data;
    console.log(`posting new event!`, newEventResponse);
    return newEventResponse;
  } catch (errors) {
    console.error(errors);
  }
};