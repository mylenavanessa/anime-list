import React, { Component } from 'react';
import AnimeItem from '../../components/AnimeItem';
import './styles.scss'

const anime = {
  "mal_id": 20,
  "url": "https:\/\/myanimelist.net\/anime\/20\/Naruto",
  "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/13\/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
  "title": "Naruto",
  "airing": false,
  "synopsis": "Moments priorlorem to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'...",
  "type": "TV",
  "episodes": 220,
  "score": 7.91,
  "start_date": "2002-10-03T00:00:00+00:00",
  "end_date": "2007-02-08T00:00:00+00:00",
  "members": 1155942,
  "rated": "PG-13"
}

export default class MyList extends Component {
  render() {
    return (
      <div id="MyList">
        <div className="wrapper">
          <div>
            <h1>Minha Lista</h1>
            {
              [anime,anime,anime].map(item => 
                <AnimeItem 
                  anime={item}
                  onRemove={() => {}}
                />
              )
            }
          </div>
        </div>
      </div>
    )
  }
}
