import React, {useEffect, useState} from "react";
import {IDropdownProps} from "./IDropdownProps";
import {IDropdownConfiguration} from "./DayDropdown";
import { Dropdown } from 'semantic-ui-react';

export const YearDropdown: React.FC<IDropdownProps> = ({state, setState}) => {
    const [years, setYears] = useState<IDropdownConfiguration<number>[]>([]);

    useEffect(() => {
        const YEAR_RANGE: number[] = [1940, new Date().getFullYear()];
        const nextYears: IDropdownConfiguration<number>[] = [];

        for (let i = YEAR_RANGE[1]; i >= YEAR_RANGE[0]; i--) {
            nextYears.push({
                text: i.toString(),
                value: i,
            });
        }

        setYears(nextYears);
    }, []);


    return (
        <Dropdown
            placeholder='Year'
            search
            selection
            compact
            options={years}
            onChange={(event, data) => {
                console.log(event, data);
                setState({
                    ...state,
                    year: Number(data.value),
                })
            }}
        />
    );
}
