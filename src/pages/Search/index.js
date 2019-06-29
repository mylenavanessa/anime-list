import React, { Component } from 'react';
import { Input, Spinner } from 'reactstrap';
import Button from '../../components/Button';
import AnimeItem from '../../components/AnimeItem';
import './styles.scss';

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

export default class Search extends Component {
  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div id="Search">
        <div className="wrapper">
          <div className="box-input">
            <Input 
              placeholder="Anime"
              onChange={this.handleChange} 
              value={this.state.value}
            />
            <Button>
              {
                true ?
                  <Spinner className="spinner" type="grow"/>
                :
                  'Buscar'
              }
            </Button>
          </div>
          <div>
            {
              [anime,anime,anime].map(item => 
                <AnimeItem anime={item}/>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
