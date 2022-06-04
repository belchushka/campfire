import {$host} from '../../http';

export const authUser = props => async dispatch => {
  try {
    const data = await $host.post('auth/signin', props);
    console.log(data);
  } catch (e) {
    throw e.response.data;
  }
};
