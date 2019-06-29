import { Creators } from './users';

export function dispatchFetchUser(name){
  return async (dispatch, getState) => {
    dispatch(Creators.fetchUser())
    try{
      if (name){
        const user = getState().users.find(item => item.name === name)
        if(user)
        dispatch(Creators.fetchUserSuccess())
        else
        throw 'Usuario não encontrado'
      }else {
        throw Error('Usuario Inválido')
      }
    }catch(err){
      dispatch(Creators.fetchUserError(err))
    }
  }
}

export function dispatchAddUser(name){
  return async dispatch => {
    dispatch(Creators.addUser())
    try{
      dispatch(Creators.addUserSuccess(name))
    }catch(err){
      dispatch(Creators.addUserError(err))
    }
  }
}

export function dispatchAddAnime(anime){
  return async (dispatch, getState) => {
    dispatch(Creators.addAnime())
    try{
      const existAnime = getState().user.anime.find(item => item.id === anime.id)
      if(!existAnime){
        const user = {...getState().user, animes: [...getState().user.anime, anime]}
        const users = [...getState().users.filter(item =>  item.id !== user.id ), user]
        dispatch(Creators.addAnimeSuccess(users, user))
      }else{
        throw Error('Anime já está na lista')
      }
    }catch(err){
      dispatch(Creators.addAnimeError(err))
    }
  }
}

export function dispatchRemoveAnime(id){
  return async (dispatch, getState) => {
    dispatch(Creators.removeAnime())
    try{
        const newAnimes = getState().user.animes.filter(item => item.id !== id)
        const user = {...getState().user, animes: [...newAnimes]}
        const users = {...getState().user.filter(item => item.id !== user.id), user}
        dispatch(Creators.removeAnimeSuccess(users ,user))
    }catch(err){
      dispatch(Creators.removeAnimeError(err))
    }
  }
}