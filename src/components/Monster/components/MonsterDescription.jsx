import React, { Component } from "react";

class MonsterDescription extends Component {
  render() {
    const { monster } = this.props;

    return (
      <div className="row center-xs middle-xs">
        <div className="col-xs-12">
          <p className="widget__description">
            {monster && monster.description}
          </p>
        </div>
      </div>
    );
  }
}

export default MonsterDescription;
