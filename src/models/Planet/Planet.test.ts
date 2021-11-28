import {Planet} from './Planet';

describe('Planet', () => {
    it('Should return correct name', () => {
        const planet = new Planet('Earth', '', 365.2);
        const expected: string = 'Earth';
        const actual = planet.getName();

        expect(actual).toEqual(expected);
    });
});
