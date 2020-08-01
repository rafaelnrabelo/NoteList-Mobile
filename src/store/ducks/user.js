import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  login: ['user info'],
  loggout: null,
  toggleTheme: null,
  inicialDone: null,
});

export const UserTypes = Types;
export default Creators;

const INITIAL_STATE = {
  data: {
    id: '',
    name: 'Faça login para\nsincronizar seus dados',
    email: '',
    photoUrl: require('../../assets/Profile.png'),
  },
  logged: false,
  darkmode: false,
  firstStart: true,
};

const login = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    logged: true,
    data: {
      id: action.data.id,
      name: action.data.name,
      email: action.data.email,
      photoUrl: { uri: action.data.photoUrl },
    },
  };
};

const loggout = (state = INITIAL_STATE, action) => {
  return { ...INITIAL_STATE, firstStart: false, darkmode: state.darkmode };
};

const toggletheme = (state = INITIAL_STATE, action) => {
  return { ...state, darkmode: !state.darkmode };
};

const inicialDone = (state = INITIAL_STATE, action) => {
  return { ...state, firstStart: false };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN]: login,
  [Types.LOGGOUT]: loggout,
  [Types.TOGGLE_THEME]: toggletheme,
  [Types.INICIAL_DONE]: inicialDone,
});
