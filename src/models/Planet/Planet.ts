import { IPlanet } from './IPlanet';

export class Planet implements IPlanet {
    private readonly name: string;
    private readonly orbitalPeriodInDays: number;

    constructor(name: string, imageUri: string, orbitalPeriodInDays: number) {
        this.name = name;
        this.orbitalPeriodInDays = orbitalPeriodInDays;
    }

    getName(): string {
        return this.name;
    }

    getOrbitalPeriodInDays(): number {
        return this.orbitalPeriodInDays;
    }
}
