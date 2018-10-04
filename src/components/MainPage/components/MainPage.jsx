import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-custom-radio';

import { Monster } from '@/components/Monster';

class App extends Component {

  constructor() {
    super();

    this.state = {
      firstMonster: 'fooz',
      avatar: 'fooz',
    }

    this.chooseMonster = this.chooseMonster.bind(this);
  };

  componentDidMount() {
    const {
      fetchMonsters,
      fetchEachMonster,
    } = this.props;

    fetchMonsters();
    fetchEachMonster(this.state.firstMonster);
  }

  chooseMonster(event) {
    const {
      fetchEachMonster,
    } = this.props;

    fetchEachMonster(event.target.value);
  }

  render() {
    const {
      monsters
    } = this.props;

    return (
      <main>
        <div className="background-image"></div>
        <Monster />
        <nav>
          {
            monsters && monsters.map((monster, index) =>
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
                  <img
                    src={monster.images.thumb}
                    alt={monster.name} />
                </label>
              </div>
            )
          }
        </nav>
      </main>
    );
  }
}

export default App;