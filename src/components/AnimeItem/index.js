import React from 'react';
import Button from '../Button';
import './styles.scss';

export default function AnimeItem({anime, onAdd = () => {}, onRemove = null}) {
  return (
    <div id="AnimeItem">
      <a href={anime.url} target="_blank">
        <img src={anime.image_url} alt={anime.title}/>
      </a>
      <dl>
        <dt>Nome</dt>
        <dd>{anime.title}</dd>
        <dt>Sinopse</dt>
        <dd>{anime.synopsis}</dd>
        <dt>Episódios</dt>
        <dd>{anime.episodes}</dd>
      </dl>
      {
        !onRemove ?
          <Button onClick={onAdd}>
            Adicionar
          </Button>
        :
          <Button onClick={onRemove}>
            Remover
          </Button>
      }
    </div>
  );
}
