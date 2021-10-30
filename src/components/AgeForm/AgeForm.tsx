import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import { IPerson } from '../../models/Person/IPerson';
import { Person } from '../../models/Person/Person';

interface IAgeFormProps {
    setPerson: (person: IPerson | null) => void;
    person: IPerson | null;
}

const AgeFormWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 24px;
> input {
    padding: 8px;
    outline: none;
    width: 30px;
    }
}
`;

export const AgeForm: React.FC<IAgeFormProps> = ({ person, setPerson }) => {
    const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const nextValue: string = event.target.value;

        if (isValidInput(nextValue)) {
            setPerson(new Person(Number(nextValue)));
        }
    };

    const isValidInput = (value: string): boolean => {
        return value === '' || !!Number(value);
    };

    return (
        <AgeFormWrapper>
            <input type='text' placeholder={'Age'} value={person?.getAgeInYears() || ''} onChange={onChange}/>
        </AgeFormWrapper>
    );
}
