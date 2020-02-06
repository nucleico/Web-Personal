import React from 'react';

const Ficha = props => {
  return (
    <div className="tc bg-light-green dib vr3 pa3 ma2 grow bw2 shadow-5">
      <img alt="players" src={props.id} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Ficha;
