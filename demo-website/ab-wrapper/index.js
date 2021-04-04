import postEvent from './postEvent';
import { getTests, getGroup } from './fetchTests';

export const init = async (customer_name, user_id) => {
  try {
    localStorage.setItem('customer_name', customer_name);
    localStorage.setItem('user_id', user_id);
    const group = await getGroup(customer_name, user_id);
    localStorage.setItem('group', group);

    // we should validate user's private key;
    return true;
  } catch(err) {
    console.log(err);
    return false;
  }
}

export const track = async (event_name) => {
  let group = localStorage.getItem(group);
  let user_id = localStorage.getItem(user_id);

  return await postEvent(event_name, group, user_id);
}

export const getAllTests = async () => {
  let customer_name = localStorage.getItem(customer_name);

  return await getTests(customer_name)
}