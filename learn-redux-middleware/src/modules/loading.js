import { createAction } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FISNISH_LOADDING';

export const startLoading = createAction(
  START_LOADING,
  requestType => requestType
);

export const finishLoading = createAction(
  FINISH_LOADING,
  requestType => requestType
);

const initialState = {
  GET_POST: false,
  GET_USERS: false,
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        [action.payload]: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        [action.payload]: false,
      };
    default:
      return state;
  }
};

export default loading;
