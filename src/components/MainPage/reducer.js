import {
  FETCH_MONSTERS_REQUEST,
  FETCH_MONSTERS_SUCCESS,
  FETCH_MONSTERS_ERROR,

  FETCH_EACH_MONSTER_REQUEST,
  FETCH_EACH_MONSTER_SUCCESS,
  FETCH_EACH_MONSTER_ERROR,
} from './actions';

const initialState = {
  monsters: [],
  monstersLoading: false,
  eachMonster: {},
  eachMonsterLoading: false,
  error: null,
};

export default function monsterReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_MONSTERS_REQUEST:
      return {
        ...state,
        monstersLoading: true,
        error: null,
      };

    case FETCH_MONSTERS_SUCCESS:
      return {
        ...state,
        monstersLoading: false,
        monsters: action.payload.monsters,
      };

    case FETCH_MONSTERS_ERROR:
      return {
        ...state,
        monstersLoading: false,
        monsters: [],
        error: action.payload.error,
      };

    case FETCH_EACH_MONSTER_REQUEST:
      return {
        ...state,
        eachMonsterLoading: true,
        error: null,
      };

    case FETCH_EACH_MONSTER_SUCCESS:
      return {
        ...state,
        eachMonsterLoading: false,
        eachMonster: action.payload,
      };

    case FETCH_EACH_MONSTER_ERROR:
      return {
        ...state,
        eachMonsterLoading: false,
        eachMonster: {},
        error: action.payload.error,
      };
  }
  return state;
};