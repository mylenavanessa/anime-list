const FETCH_ANIMES = 'animes/FETCH_ANIMES'
const FETCH_ANIMES_SUCCESS = 'animes/FETCH_ANIMES_SUCCESS'
const FETCH_ANIMES_ERROR = 'animes/FETCH_ANIMES_ERROR'

export const Creators = {
  fetchAnimes : () => {
    return { type: FETCH_ANIMES }
  },
  fetchAnimesSuccess : (animes) =>  {
    return { 
      type: FETCH_ANIMES_SUCCESS,
      payload: { animes }
    }
  },
  fetchAnimesError : (error) => {
    return { 
      type: FETCH_ANIMES_ERROR,
      payload: { error }
    }
  }
}

const INITIAL_STATE = {
  animes: [],
  loading: false,
  error: null
}

const animesReducer = (state = INITIAL_STATE, action ) => {
  switch(action.type){
    case FETCH_ANIMES:
      return {...state, loading: true}
    case FETCH_ANIMES_SUCCESS:
      return {animes: action.payload.animes, loading: false}
    case FETCH_ANIMES_ERROR:
      return {...state, loading: false, error: action.payload.error}
    default:
      return state
  }

}

export default animesReducer