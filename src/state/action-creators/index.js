import axios from 'axios';
import {
  SEARCH_REPOSITORIES,
  SEARCH_REPOSITORIES_SUCCESS,
  SEARCH_REPOSITORIES_ERROR,
} from '../action-types';

export const searchRepositories = (term) => {
  return async (dispatch) => {
    dispatch({
      type: SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      );

      const pckg = data.objects.map((result) => {
        return result.package;
      });

      dispatch({
        type: SEARCH_REPOSITORIES_SUCCESS,
        payload: pckg,
      });
    } catch (err) {
      dispatch({
        type: SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
