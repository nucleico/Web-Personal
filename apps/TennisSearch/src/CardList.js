import React from 'react';
import Ficha from './Ficha';

const CardList = props => {
  const cardComponent = props.tenistas.map((user, i) => {
    return (
      <Ficha
        id={props.tenistas[i].id}
        name={props.tenistas[i].name}
        email={props.tenistas[i].email}
      />
    );
  });

  return <div>{cardComponent}</div>;
};

export default CardList;
