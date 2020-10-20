import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  addNote: ['note object'],
  deleteNote: ['id'],
  updateNote: ['note object'],
  syncNotesAPI: ['array of notes'],
  pullDoneLogged: ['array of notes'],
  pullDoneSync: ['array of notes'],
});

export const NotesTypes = Types;
export default Creators;

const INITIAL_STATE = {
  data: [],
  deleted: [],
  newNotes: [],
  waiting: false,
};

const add = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    newNotes: [...state.newNotes, action.data.id],
    data: [...state.data, action.data],
  };
};

const remove = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    newNotes: state.newNotes.filter((id) => id !== action.data),
    deleted: [...state.deleted, action.data],
    data: state.data.filter((note) => note.id !== action.data),
  };
};
const update = (state = INITIAL_STATE, action) => {
  state.data.forEach((note) => {
    if (note.id == action.data.id) {
      note.title = action.data.title;
      note.description = action.data.description;
      note.updated_at = action.data.updated_at;
      note.toDos = action.data.toDos;
    }
  });
  return { ...state, data: [...state.data] };
};

const waitingOn = (state = INITIAL_STATE) => {
  return { ...state, waiting: true };
};

const pullLogged = (state = INITIAL_STATE, action) => {
  var notes = [...state.data, ...action.data];
  const unique = notes
    .map((e) => e['id'])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter((e) => notes[e])
    .map((e) => notes[e]);
  return { ...state, newNotes: [], deleted: [], data: unique, waiting: false };
};

const pullSync = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    newNotes: [],
    deleted: [],
    data: action.data,
    waiting: false,
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_NOTE]: add,
  [Types.DELETE_NOTE]: remove,
  [Types.UPDATE_NOTE]: update,
  [Types.SYNC_NOTES_API]: waitingOn,
  [Types.PULL_DONE_LOGGED]: pullLogged,
  [Types.PULL_DONE_SYNC]: pullSync,
});
