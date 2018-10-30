import React, { Component } from "react";

class MonsterName extends Component {
  render() {
    const { monster } = this.props;

    return (
      <div className="row center-xs middle-xs">
        <header className="col-xs-12">
          <h2 className="widget__header">{monster && monster.name}</h2>
        </header>
      </div>
    );
  }
}

export default MonsterName;
