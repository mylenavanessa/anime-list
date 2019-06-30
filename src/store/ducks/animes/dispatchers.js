import api from '../../../services/api'
import { Creators } from './index'

export function dispatchFetchAnimes(name) {
  return async dispatch => {
    dispatch(Creators.fetchAnimes())
    try {
      const {data : animes}= await api.get(`/anime?q=${name}&limit=5`)
      dispatch(Creators.fetchAnimesSuccess(animes.results))
    }catch(e) {
      dispatch(Creators.fetchAnimesError('Erro ao buscar animes'))
    }
  }
}