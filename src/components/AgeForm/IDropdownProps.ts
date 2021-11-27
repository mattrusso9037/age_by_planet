import {IFormState} from "./AgeForm";

export interface IDropdownProps {
    state: IFormState,
    setState: (state: IFormState) => void;
}
