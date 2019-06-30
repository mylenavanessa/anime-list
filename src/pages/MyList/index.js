import React, { Component } from 'react';
import { connect } from 'react-redux'
import AnimeItem from '../../components/AnimeItem';
import './styles.scss'
import * as dispatchers from '../../store/ducks/users/dispatchers' 
import Button from '../../components/Button';


class MyList extends Component {
  
  onRemove(id){
    const { dispatchRemoveAnime } = this.props
    dispatchRemoveAnime(id)
  }

  render() {
    const { users } = this.props
    return (
      <div id="MyList">
        <div className="wrapper">
          <div>
            <h1>Minha Lista</h1>
            <Button onClick={() => this.props.history.push('/search')}>Voltar</Button>
            {
              users.user.animes.map(item => 
                <AnimeItem 
                  key={item.mal_id}
                  anime={item}
                  onRemove={() => this.onRemove(item.mal_id)}
                />
              )
            }
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = {
  ...dispatchers
}


export default connect (mapStateToProps, mapDispatchToProps)(MyList)