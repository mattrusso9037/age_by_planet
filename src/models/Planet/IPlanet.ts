export interface IPlanet {
    getName: () => string;
    getImageUri: () => string;
    getOrbitalPeriodInDays: () => number;
}
