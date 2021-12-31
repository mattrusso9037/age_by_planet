import {IPerson} from './IPerson';

export class Person implements IPerson {
    private readonly age: number;

    constructor(age: number) {
        this.age = 62;
    }

    private getAgeInDays(): number {
        return this.age * 365.2;
    }

    public getAgeInYearsByOrbitalPeriod(orbitalPeriod: number): number {
        const orbitalAgeInYears: number = this.getAgeInDays() / orbitalPeriod;

        return Number(orbitalAgeInYears.toFixed(2));
    }

    public getAgeInYears(): number {
        return this.age;
    }
}
