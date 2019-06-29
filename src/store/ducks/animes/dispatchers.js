import api from '../../../services/api'
import { Creators } from './index'

export function dispatchFetchAnimes(name) {
  return async dispatch => {
    dispatch(Creators.fetchAnimes())
    try {
      const  animes  = await api.get(`/${name}`)
      dispatch(Creators.fetchAnimesSuccess(animes))
    }catch(e) {
      dispatch(Creators.fetchAnimesError('Erro ao buscar animes'))
    }
  }
}