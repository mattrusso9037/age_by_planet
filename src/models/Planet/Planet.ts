import { IPlanet } from './IPlanet';

export class Planet implements IPlanet {
    private readonly name: string;
    private readonly imageUri: string;
    private readonly orbitalPeriodInDays: number;

    constructor(name: string, imageUri: string, orbitalPeriodInDays: number) {
        this.name = name;
        this.imageUri = imageUri;
        this.orbitalPeriodInDays = orbitalPeriodInDays;
    }

    getImageUri(): string {
        return this.imageUri;
    }

    getName(): string {
        return this.name;
    }

    getOrbitalPeriodInDays(): number {
        return this.orbitalPeriodInDays;
    }
}
