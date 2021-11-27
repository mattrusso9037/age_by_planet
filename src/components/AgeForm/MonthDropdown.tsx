import React from "react";
import {IDropdownProps} from "./IDropdownProps";
import {MONTHS} from "./months";
import { Dropdown } from 'semantic-ui-react'

export const MonthDropdown: React.FC<IDropdownProps> = ({ state, setState }) => {
    return (
        <Dropdown
            placeholder='Month'
            search
            selection
            compact
            labeled={true}
            options={MONTHS}
            onChange={(event, data) => {
                console.log(event, data);
                setState({
                    ...state,
                    month: Number(data.value),
                })
            }}
        />
    );
}
