const FETCH_USER = 'users/FETCH_USER'
const FETCH_USER_SUCCESS = 'users/FETCH_USER_SUCCESS'
const FETCH_USER_ERROR = 'users/FETCH_USER_ERROR'
const ADD_USER = 'users/ADD_USER'
const ADD_USER_SUCCESS = 'users/ADD_USER_SUCCESS'
const ADD_USER_ERROR = 'users/ADD_USER_ERROR'

const ADD_ANIME = 'users/ADD_ANIME'
const ADD_ANIME_SUCCESS = 'users/ADD_ANIME_SUCESS'
const ADD_ANIME_ERROR = 'users/ADD_ANIME_ERROR'
const REMOVE_ANIME = 'users/REMOVE_ANIME'
const REMOVE_ANIME_SUCCESS = 'users/REMOVE_ANIME_SUCCESS'
const REMOVE_ANIME_ERROR = 'users/REMOVE_ANIME_ERROR'

export const Creators = {
  fetchUser : () => {
    return { type: FETCH_USER }
  },
  fetchUserSuccess : (user) => {
    return { 
      type: FETCH_USER_SUCCESS,
      payload: { user }
    }
  },
  fetchUserError : () => {
    return {
      type: FETCH_USER_ERROR,
    }
  },
  addUser : () => {
    return { type: ADD_USER }
  },
  addUserSuccess : (user) => {
    return {
      type: ADD_USER_SUCCESS,
      payload: { user }
    }
  },
  addUserError : (error) => {
    return {
      type: ADD_USER_ERROR,
      payload: { error }
    }
  },
  addAnime : () => {
    return { type: ADD_ANIME }
  },
  addAnimeSuccess : (users, user) => {
    return {
      type: ADD_ANIME_SUCCESS,
      payload: { users, user }
    }
  },
  addAnimeError : (error) => {
    return {
      type: ADD_ANIME_ERROR,
      payload: { error }
    }
  },
  removeAnime : () => {
    return { type: REMOVE_ANIME }
  },
  removeAnimeSuccess : (users, user) => {
    return {
      type: REMOVE_ANIME_SUCCESS,
      payload: { users, user } 
    }
  },
  removeAnimeError : () => {
    return { type: REMOVE_ANIME_ERROR }
  }
}

const INITIAL_STATE = {
  id: 1,
  users: [],
  loading: false,
  error: null,
  user: null,
}

const usersReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_USER:
      return {...state, loading: true }
    case FETCH_USER_SUCCESS:
      return {...state, user: action.payload.user, loading: false }
    case FETCH_USER_ERROR:
      return {...state, error: action.payload.error, loading: false }
    case ADD_USER: 
      return {...state, loading: true }
    case ADD_USER_SUCCESS:
      return {...state, users: [...state.users, {id , name: action.payload.user}], loading: false, id: state.id+1}
    case ADD_USER_ERROR:
      return {...state, loading: false, error: action.payload.error }
    case ADD_ANIME:
      return {...state, loading: true }
    case ADD_ANIME_SUCCESS:
      return {...state, user: action.payload.user, users: action.payload.users, loading: false }
    case ADD_ANIME_ERROR:
      return {...state, error: action.payload.error, loading: false }
    case REMOVE_ANIME:
      return {...state, loading: false }
    case REMOVE_ANIME_SUCCESS:
      return {...state, user: action.payload.user, users: action.payload.users, loading: false }
    case REMOVE_ANIME_ERROR:
      return {...state, loagin: false}
  }
}

export default usersReducer