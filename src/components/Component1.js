import React, { Component } from 'react';


class Component1 extends Component{

  render() {
      return (
        <div>
        <h1> My Component1</h1>
        <br/>

        {this.props.matche.params.id}
      </div>
      );
  }
}
export default Component1;