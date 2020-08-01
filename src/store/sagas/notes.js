import { call, put, select } from 'redux-saga/effects';

import api from '../../services/api';

export function* syncNotes(action) {
  const user_id = yield select((state) => state.user.data.id);
  const notes = yield select((state) => state.notes.data);
  const deleted = yield select((state) => state.notes.deleted);
  const newNotes = yield select((state) => state.notes.newNotes);
  try {
    const response = yield call(
      api.post,
      '/syncMob',
      { notes: notes, deleted: deleted, newNotes: newNotes },
      {
        headers: {
          Authorization: user_id,
        },
      }
    );

    if (action.data.loggedNow) {
      yield put({ type: 'PULL_DONE_LOGGED', data: response.data });
    } else {
      yield put({ type: 'PULL_DONE_SYNC', data: response.data });
    }
  } catch (err) {
    console.log(err);
  }
}
