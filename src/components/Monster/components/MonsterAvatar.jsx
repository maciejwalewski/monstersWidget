import React, { Component } from "react";

class MonsterAvatar extends Component {
  render() {
    const { monster } = this.props;

    return (
      <div className="row center-xs middle-xs">
        <div className="col-xs-12">
          <img className="widget__photo" src={monster && monster.images.big} />
        </div>
      </div>
    );
  }
}

export default MonsterAvatar;
