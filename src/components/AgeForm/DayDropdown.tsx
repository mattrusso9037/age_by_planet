import React, {useEffect, useState} from "react";
import {IDropdownProps} from "./IDropdownProps";
import {MONTHS} from "./months";
import { Dropdown } from 'semantic-ui-react'
export interface IDropdownConfiguration<TData> {
    text: string;
    value: TData;
}

export const DayDropdown: React.FC<IDropdownProps> = ({ state, setState }) => {
    const [days, setDays] = useState<IDropdownConfiguration<number>[]>([]);

    useEffect(() => {
        const numOfDays: number = MONTHS.find((month) => month.value === state.month)?.numberOfDays || 0;
        const nextDays: IDropdownConfiguration<number>[] = [];

        for (let i = 1; i <= numOfDays; i++) {
            nextDays.push({
                value: i,
                text: i.toString(),
            });
        }

        setDays(nextDays);
    }, [state.month]);


    return (
        <Dropdown
            placeholder='Day'
            search
            selection
            compact
            options={days}
            onChange={(event, data) => {
                console.log(event, data);
                setState({
                    ...state,
                    day: Number(data.value),
                })
            }}
        />
    );
}
