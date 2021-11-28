import {Person} from './Person';
import {PlanetList} from '../Planet/PlanetList';
import {IPlanet} from '../Planet/IPlanet';
import {IPerson} from './IPerson';

describe('Person', () => {
    let person: IPerson | null = null;
    let age: number = 30;

    beforeEach(() => {
        person = new Person(age);
    });

    it('Should return correct age in Earth years', () => {
        const actual = person?.getAgeInYears();

        expect(actual).toEqual(age);
    });

    it('Should return correct age in Earth years', () => {
        const earth: IPlanet = PlanetList[2];
        const orbitalPeriod = earth.getOrbitalPeriodInDays();

        const actual = person?.getAgeInYearsByOrbitalPeriod(orbitalPeriod);

        expect(actual).toEqual(age);
    });
});
