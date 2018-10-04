import React, { Component } from 'react';

class Monster extends Component {

  constructor() {
    super();

    this.state = {
      frequency: 0,
    }
  };

  render() {
    const {
      monster,
    } = this.props;

    return (
      <section>
        <div className="row center-xs center-md">
          <div className="widget col-xs-10 col-sm-8 col-md-6">
            <div className="row center-xs middle-xs">
              <header className="col-xs-12">
                <h2 className="widget__header">{monster && monster.name}</h2>
              </header>
            </div>
            <div className="row center-xs middle-xs">
              <div className="col-xs-12">
                <img className="widget__photo" src={monster && monster.images.big} />
              </div>
            </div>
            <div className="row center-xs middle-xs">
              <div className="col-xs-12">
                <p className="widget__description">{monster && monster.description}</p>
              </div>
            </div>
            <div className="row center-xs middle-xs mb10">
              <div className="col-xs-12 col-sm-3">Power</div>
              <div className="widget__progressBar col-xs-12 col-sm-9">
                <div
                  className="widget__progressBar--power"
                  style={{ width: `${monster && monster.statistics.power * 100}%` }}>
                </div>
                <span className="pop-up">{`${monster && Math.floor(monster.statistics.power * 100)}%`}</span>
              </div>
            </div>
            <div className="row center-xs middle-xs mb10">
              <div className="col-xs-12 col-sm-3">Danger</div>
              <div className="widget__progressBar col-xs-12 col-sm-9">
                <div
                  className="widget__progressBar--danger"
                  style={{ width: `${monster && monster.statistics.danger * 100}%` }}>
                </div>
                <span className="pop-up">{`${monster && Math.floor(monster.statistics.danger * 100)}%`}</span>
              </div>
            </div>
            <div className="row center-xs middle-xs mb10">
              <div className="col-xs-12 col-sm-3">Frequency</div>
              <div className="widget__progressBar col-xs-12 col-sm-9">
                <div
                  className="widget__progressBar--frequency"
                  style={{ width: `${monster && monster.statistics.frequency * 100}%` }}>
                </div>
                <span className="pop-up">{`${monster && Math.floor(monster.statistics.frequency * 100)}%`}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Monster;