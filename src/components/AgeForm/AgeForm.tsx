import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {IPerson} from '../../models/Person/IPerson';
import {Person} from '../../models/Person/Person';
import {MonthDropdown} from './MonthDropdown';
import {DayDropdown} from './DayDropdown';
import {YearDropdown} from './YearDropdown';
import moment from 'moment';

interface IAgeFormProps {
    setPerson: (person: IPerson | null) => void;
    person: IPerson | null;
}

const AgeFormWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 24px;
gap: 16px;
    .ui.compact.search.selection.dropdown {
        font-size: 18px;
    }
}
.ui.dropdown:not(.button)>.default.text {
    color: #7b7b7b !important;
}
.ui.compact.search.selection.dropdown {
    font-size: 1rem !important;
}
`;

export interface IFormState {
    month: number | null;
    day: number | null;
    year: number | null;
}

const DEFAULT_STATE: IFormState = {
    month: null,
    day: null,
    year: null,
};

export const AgeForm: React.FC<IAgeFormProps> = ({person, setPerson}) => {
    const [state, setState] = useState<IFormState>(DEFAULT_STATE);

    useEffect(() => {
        if (allFieldsAreSelected(state)) {
            const age = getAge();

            setPerson(new Person(age));
        }
    }, [state]);

    const allFieldsAreSelected = (state: IFormState): boolean => {
        return Object
            .values(state)
            .every((val) => val !== null);
    };

    const getAge = (): number => {
        const birthday: Date = new Date(state.year ?? 0, state.month ?? 0, state.day ?? 0);

        return moment(moment.now()).diff(birthday, 'years', true);
    };

    return (
        <AgeFormWrapper>
            <MonthDropdown state={state} setState={setState}/>
            <DayDropdown state={state} setState={setState}/>
            <YearDropdown state={state} setState={setState}/>
        </AgeFormWrapper>
    );
}
