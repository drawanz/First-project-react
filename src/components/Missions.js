import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <section data-testid="missions">
        <Title headline="Missões" />
        <div className="container-missions">
          {missions.map(({ name, year, country, destination }) => (
            <section key={ name }>
              <MissionCard
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            </section>
          ))}
        </div>
      </section>);
  }
}

export default Missions;
