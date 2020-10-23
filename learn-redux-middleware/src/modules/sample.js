import * as api from '../lib/api';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST }); // 요청을 시작한 것을 알림
  try {
    const response = await api.getPost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: response.data,
    }); // 요청 성공
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    }); // 에러 발생
    throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS }); // 요청을 시작한 것을 알림
  try {
    const response = await api.getUsers();
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,
    }); // 요청 성공
  } catch (e) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    }); // 에러 발생
    throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌
  }
};

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

const sample = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: true,
        },
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: false,
        },
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: false,
        },
      };

    case GET_USERS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: true,
        },
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: false,
        },
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: false,
        },
      };
    default:
      return state;
  }
};

export default sample;
