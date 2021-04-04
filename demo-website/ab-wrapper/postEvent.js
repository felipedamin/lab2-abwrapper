const EVENTS_BE_URL = 'ec2-52-86-73-127.compute-1.amazonaws.com';

export const postEvent = async (name, group, user_id) => {
  try {
    /*
    	* event_name VARCHAR(100) UNIQUE NOT NULL,
	    * test_group VARCHAR(100),
	    * attributes VARCHAR(100),
      */
    let event = {
      'name': name,
      'test_group': group,  // must get from fetchTests
      'attributes': user_id // nothing for now - MVP
    }
    const response = await axios.post(`${EVENTS_BE_URL}/events/track`, event);
    const newEventResponse = response.data;
    console.log(`posting new event!`, newEventResponse);
    return newEventResponse;
  } catch (errors) {
    console.error(errors);
  }
};