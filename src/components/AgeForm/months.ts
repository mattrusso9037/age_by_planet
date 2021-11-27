export const MONTHS: IMonth[] = [
    {
        text: 'January',
        value: 0,
        numberOfDays: 31,
    },
    {
        text: 'February',
        value: 1,
        numberOfDays: 29,
    },
    {
        text: 'March',
        value: 2,
        numberOfDays: 31,
    },
    {
        text: 'April',
        value: 3,
        numberOfDays: 30,
    },
    {
        text: 'May',
        value: 4,
        numberOfDays: 31,
    },
    {
        text: 'June',
        value: 5,
        numberOfDays: 30,
    },
    {
        text: 'July',
        value: 6,
        numberOfDays: 31,
    },
    {
        text: 'August',
        value: 7,
        numberOfDays: 31,
    },
    {
        text: 'September',
        value: 8,
        numberOfDays: 30,
    },
    {
        text: 'October',
        value: 9,
        numberOfDays: 31,
    },
    {
        text: 'November',
        value: 10,
        numberOfDays: 30,
    },
    {
        text: 'December',
        value: 11,
        numberOfDays: 31,
    },
];

export interface IMonth {
    text: string,
    value: number,
    numberOfDays: number,
}
