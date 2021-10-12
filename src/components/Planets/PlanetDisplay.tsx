import React, { FC } from 'react';
import { PlanetContainer } from './PlanetContainer';
import { PlanetList } from '../../models/Planet/PlanetList';
import { Person } from '../../models/Person/Person';

interface IPlanetProps {
    title: string;
}

export const PlanetDisplay: FC<IPlanetProps> = (props: IPlanetProps) => {
    return (
        <div>
            {props.title}
            <PlanetContainer
                planets={PlanetList}
                person={new Person(31)}
            />
        </div>
    );
}
