import React, { FC, useState } from 'react';
import { PlanetContainer } from './PlanetContainer';
import { PlanetList } from '../../models/Planet/PlanetList';
import { AgeForm } from '../AgeForm/AgeForm';
import { IPerson } from '../../models/Person/IPerson';

interface IPlanetProps {
    title: string;
}

export const PlanetDisplay: FC<IPlanetProps> = (props: IPlanetProps) => {
    const [person, setPerson] = useState<IPerson | null>(null);

    return (
        <div>
            {props.title}
            <AgeForm person={person} setPerson={setPerson} />
            <PlanetContainer
                planets={PlanetList}
                person={person}
            />
        </div>
    );
}
