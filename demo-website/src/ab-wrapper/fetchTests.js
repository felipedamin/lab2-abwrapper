import axios from 'axios';
const TESTS_BE_URL = 'http://ec2-3-84-161-231.compute-1.amazonaws.com:3002';

export const getTests = async (customer_name) => {
  try {
    const response = await axios.get(`${TESTS_BE_URL}/customertests/${customer_name}/all`);
    const tests = response.data;

    console.log(`GET: list of tests: `, tests);
    return tests;
  } catch (errors) {
    console.error(errors);
  }
};

export const getGroup = async (customer_name, id) => {
  try {
    const response = await axios.get(`${TESTS_BE_URL}/customertests/${customer_name}/user/${id}`);
    const group = response.data;

    console.log(`GET: user group: `, group);
    return group;
  } catch (errors) {
    console.error(errors);
  }
};