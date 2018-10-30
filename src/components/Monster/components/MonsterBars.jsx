import React, { Component } from "react";

class MonsterBars extends Component {
  constructor() {
    super();

    this.state = {
      power: 0,
      danger: 0,
      frequency: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    const { monster } = nextProps;

    if (monster) {
      this.setState({
        power: Math.floor(monster.statistics.power * 100),
        danger: Math.floor(monster.statistics.danger * 100),
        frequency: Math.floor(monster.statistics.frequency * 100)
      });
    }
  }

  render() {
    const { 
      power, 
      danger, 
      frequency,
    } = this.state;

    return (
      <div>
        <div className="row center-xs middle-xs mb10">
          <div className="col-xs-12 col-sm-3">Power</div>
          <div className="widget__progressBar col-xs-12 col-sm-9">
            <div
              className="widget__progressBar--power"
              style={{
                width: `${power && power}%`
              }}
            />
            <span className="pop-up">{`${power && power}%`}</span>
          </div>
        </div>
        <div className="row center-xs middle-xs mb10">
          <div className="col-xs-12 col-sm-3">Danger</div>
          <div className="widget__progressBar col-xs-12 col-sm-9">
            <div
              className="widget__progressBar--danger"
              style={{
                width: `${danger && danger}%`
              }}
            />
            <span className="pop-up">{`${danger && danger}%`}</span>
          </div>
        </div>
        <div className="row center-xs middle-xs mb10">
          <div className="col-xs-12 col-sm-3">Frequency</div>
          <div className="widget__progressBar col-xs-12 col-sm-9">
            <div
              className="widget__progressBar--frequency"
              style={{
                width: `${frequency && frequency}%`
              }}
            />
            <span className="pop-up">{`${frequency && frequency}%`}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default MonsterBars;
