import React, { Component } from 'react';
import './styles.scss';
import { Input } from 'reactstrap';
import Button from '../../components/Button';

export default class Home extends Component {

  state = {
    name: ''
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
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
            <Button>
              Enviar
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
