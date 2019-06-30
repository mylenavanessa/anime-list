import React, { Component } from 'react';
import { connect } from 'react-redux'
import './styles.scss';
import { Input } from 'reactstrap';
import Button from '../../components/Button';
import * as dispatchers from '../../store/ducks/users/dispatchers' 

class Home extends Component {

  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  onLogin = () => {
    const { dispatchFetchUser, dispatchAddUser } = this.props
    dispatchFetchUser(this.state.value)

    
    this.props.history.push('/search')
  }

  componentDidMount () {
    const { dispatchClearUser } = this.props
    dispatchClearUser()
  }
 
  render() {
    return (
      <div id="Home">
        <div className="wrapper">
          <h1>Anime List</h1>
          <div className="box-input">
            <Input 
              placeholder="Digite seu nome" 
              onChange={this.handleChange} 
              value={this.state.value}
              required
            />
            <Button onClick={this.onLogin}>
              Entrar
            </Button>
          </div>
        </div>
      </div>
    );
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


export default connect (mapStateToProps, mapDispatchToProps)(Home)