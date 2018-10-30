import React, { Component } from "react";

import MonsterName from "./MonsterName";
import MonsterAvatar from "./MonsterAvatar";
import MonsterDescription from "./MonsterDescription";
import MonsterBars from "./MonsterBars";

class Monster extends Component {
  render() {
    const { monster } = this.props;

    return (
      <section>
        <div className="row center-xs center-md">
          <div className="widget col-xs-10 col-sm-8 col-md-6">
            <MonsterName monster={monster} />
            <MonsterAvatar monster={monster} />
            <MonsterDescription monster={monster} />
            <MonsterBars monster={monster} />
          </div>
        </div>
      </section>
    );
  }
}

export default Monster;