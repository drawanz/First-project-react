import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
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
      </div>);
  }
}

export default Missions;
