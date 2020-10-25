import * as api from '../lib/api';
import { takeLatest } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

/*
*** redux-thunk 사용 코드 ***
export const getPost = id => async dispatch => {
  dispatch({ type: GET_POST }); // 요청을 시작한 것을 알림
  try {
    const response = await api.getPost(id);
    dispatch(startLoading(GET_POST));
    dispatch({
      type: GET_POST_SUCCESS,
      payload: response.data,
    }); // 요청 성공
    dispatch(finishLoading(GET_POST));
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    }); // 에러 발생
    dispatch(finishLoading(GET_POST));
    throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌
  }
};

export const getUsers = id => async dispatch => {
  dispatch({ type: GET_USERS }); // 요청을 시작한 것을 알림
  try {
    dispatch(startLoading(GET_USERS));
    const response = await api.getUsers(id);
    console.log('users: ', response.data);
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,
    }); // 요청 성공
    dispatch(finishLoading(GET_USERS));
  } catch (e) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    }); // 에러 발생
    dispatch(finishLoading(GET_USERS));
    throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌
  }
};
*/

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS, id => id);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);
/*
이 코드를 lib에 따로 빼서 사용
function* getPostSaga(action) {
  yield put(startLoading(GET_POST));
  try {
    const post = yield call(api.getPost, action.payload);
    yield put({
      type: GET_POST_SUCCESS,
      payload: post.data,
    });
  } catch (e) {
    yield put({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_POST));
}

function* getUsersSaga() {
  yield put(startLoading(GET_USERS));
  try {
    const users = yield call(api.getUsers);
    yield put({
      type: GET_USERS_SUCCESS,
      payload: users.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_USERS));
}
*/

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

const initialState = {
  post: null,
  users: null,
};

const sample = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default sample;
