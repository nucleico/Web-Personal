import React, { Component } from 'react';
import CardList from './CardList';
import { tennisPlayers } from './tennisPlayers';

class AppT extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <CardList />
      </div>
    );
  }
}

export default AppT;
