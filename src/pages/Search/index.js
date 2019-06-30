import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Input, Spinner } from 'reactstrap';
import Button from '../../components/Button';
import AnimeItem from '../../components/AnimeItem';
import './styles.scss';
import * as dispatchAnimals from '../../store/ducks/animes/dispatchers'
import * as dispatchUsers from '../../store/ducks/users/dispatchers'

class Search extends Component {
  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  fetchAnimes = () => {
    const { dispatchFetchAnimes } = this.props
    dispatchFetchAnimes(this.state.value)
  }

  onAdd = (item) => {
    const { dispatchAddAnime } = this.props
    dispatchAddAnime(item)
  }

  render() {
    const { animes } = this.props
    return (
      <div id="Search">
        <div className="wrapper">
          <div className="box-input">
            <Input 
              placeholder="Anime"
              onChange={this.handleChange} 
              value={this.state.value}
            />
            <Button onClick={this.fetchAnimes}>
              {
                animes.loading ?
                  <Spinner className="spinner" type="grow"/>
                :
                  'Buscar'
              }
            </Button>
            <Button onClick={() => this.props.history.push('/mylist')}>Lista</Button>
          </div>
          <div>
            {
              animes.animes.map(item => 
                <AnimeItem anime={item} key={item.mal_id} onAdd={() => this.onAdd(item)}/>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    animes: state.animes,
    users: state.users
  }
}

const mapDispatchToProps = {
  ...dispatchUsers,
  ...dispatchAnimals
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)