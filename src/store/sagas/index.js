import { all, takeEvery } from 'redux-saga/effects';

import { NotesTypes } from '../ducks/notes';
import { syncNotes } from './notes';

export default function* rootSaga() {
  yield all([takeEvery(NotesTypes.SYNC_NOTES_API, syncNotes)]);
}
