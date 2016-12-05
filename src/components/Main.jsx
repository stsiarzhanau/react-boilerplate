import React from 'react';
import Nav from 'Nav';

const propTypes = {
  children: React.PropTypes.node,
};

function Main(props) {
  return (
    <div>
      <Nav />
      <div>
        {props.children}
      </div>
    </div>
  );
}

Main.propTypes = propTypes;

export default Main;
