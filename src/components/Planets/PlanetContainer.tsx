import React, { FC } from 'react';
import { IPlanet } from '../../models/Planet/IPlanet';
import { PlanetCard } from './Card/PlanetCard';
import styled from 'styled-components';
import { IPerson } from '../../models/Person/IPerson';

interface IPlanetContainerProps {
    planets: IPlanet[]
    person: IPerson;
}

const PlanetContainerWrapper = styled.div`
display: flex;
flex-wrap: wrap;
margin: 24px;
width: calc(100% - 48px);
align-items: center;
justify-content: center;
gap: 8px;
`;
export const PlanetContainer: FC<IPlanetContainerProps> = ({ planets, person }: IPlanetContainerProps) => {
    return (
        <PlanetContainerWrapper data-test-id={'test'}>
            { planets.map((planet) => {
                return (
                    <PlanetCard
                        key={planet.getName()}
                        planetName={planet.getName()}
                        planetaryAge={person.getAgeInYearsByOrbitalPeriod(planet.getOrbitalPeriodInDays())}
                    />
                )
            })}
        </PlanetContainerWrapper>
    );
}
