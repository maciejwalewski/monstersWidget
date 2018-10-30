//monsters list request

export const FETCH_MONSTERS_REQUEST = 'FETCH_MONSTERS_REQUEST';
export const FETCH_MONSTERS_SUCCESS = 'FETCH_MONSTERS_SUCCESS';
export const FETCH_MONSTERS_ERROR = 'FETCH_MONSTERS_ERROR';

export const fetchMonstersRequest = () => ({
  type: FETCH_MONSTERS_REQUEST,
});

export const fetchMonstersSuccess = monsters => ({
  type: FETCH_MONSTERS_SUCCESS,
  payload: {
    monsters
  },
});

export const fetchMonstersError = error => ({
  type: FETCH_MONSTERS_ERROR,
  payload: {
    error
  },
});

export function fetchMonsters() {
  return dispatch => {
    dispatch(fetchMonstersRequest());
    return fetch('https://maciejwalewski.github.io/monstersAPIgh/monsters')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchMonstersSuccess(json));
        return json.monsters;
      })
      .catch(error => dispatch(fetchMonstersError(error)));
  };
}


//each monster request

export const FETCH_EACH_MONSTER_REQUEST = 'FETCH_EACH_MONSTER_REQUEST';
export const FETCH_EACH_MONSTER_SUCCESS = 'FETCH_EACH_MONSTER_SUCCESS';
export const FETCH_EACH_MONSTER_ERROR = 'FETCH_EACH_MONSTER_ERROR';

export const fetchEachMonsterRequest = () => ({
  type: FETCH_EACH_MONSTER_REQUEST,
});

export const fetchEachMonsterSuccess = monster => ({
  type: FETCH_EACH_MONSTER_SUCCESS,
  payload: monster,
});

export const fetchEachMonsterError = error => ({
  type: FETCH_EACH_MONSTER_ERROR,
  payload: {
    error
  },
});

export function fetchEachMonster(monster) {
  return dispatch => {
    dispatch(fetchEachMonsterRequest());
    return fetch(`https://maciejwalewski.github.io/monstersAPIgh/monster/${monster}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchEachMonsterSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchEachMonsterError(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response;
}