import { Creators } from './index';

export function dispatchFetchUser(name){
  return async (dispatch, getState) => {
    dispatch(Creators.fetchUser())
    try{
      if (name){
        const user = getState().users.users.find(item => item.name === name)
        if(user)
          dispatch(Creators.fetchUserSuccess(user))
        else
          dispatch(Creators.addUserSuccess(name))
      }else{
        throw Error('Usuario não encontrado')
      }
    }catch(err){
      dispatch(Creators.fetchUserError(err))
    }
  }
}

export function dispatchAddAnime(anime){
  return async (dispatch, getState) => {
    dispatch(Creators.addAnime())
    try{
      const existAnime = getState().users.user.animes.find(item => item.mal_id === anime.mal_id)
      if(!existAnime){
        const user = {...getState().users.user, animes: [...getState().users.user.animes, anime]}
        const users = [...getState().users.users.filter(item =>  item.id !== user.id ), user]
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
        const newAnimes = getState().users.user.animes.filter(item => item.mal_id !== id)
        const user = {...getState().users.user, animes: newAnimes}
        const users = [...getState().users.users.filter(item => item.id !== user.id), user]
        dispatch(Creators.removeAnimeSuccess(users ,user))
    }catch(err){
      dispatch(Creators.removeAnimeError(err))
    }
  }
}

export function dispatchClearUser(){
  return async (dispatch) => {
    dispatch(Creators.clearUser())
  }
}