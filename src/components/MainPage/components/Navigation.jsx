import React, { Component } from "react";

class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      firstMonster: "fooz"
    };

    this.chooseMonster = this.chooseMonster.bind(this);
  }

  componentDidMount() {
    const { fetchMonsters, fetchEachMonster } = this.props;

    fetchMonsters();
    fetchEachMonster(this.state.firstMonster);
  }

  chooseMonster(event) {
    const { fetchEachMonster } = this.props;

    fetchEachMonster(event.target.value);
  }

  render() {
    const { monsters } = this.props;

    return (
      <nav>
        {monsters &&
          monsters.map((monster, index) => (
            <div key={index}>
              <input
                type="radio"
                name="emotion"
                id={monster.name}
                className="input-hidden"
                onChange={this.chooseMonster}
                value={monster.slug}
              />
              <label htmlFor={monster.name}>
                <img src={monster.images.thumb} alt={monster.name} />
              </label>
            </div>
          ))}
      </nav>
    );
  }
}

export default Navigation;
