import { MovieConfiguration } from "./MovieConfiguration";

export class Rental {
    private rentalDays: number;
    private mc: MovieConfiguration;

    constructor(rentalDays: number, m: MovieConfiguration) {
        this.rentalDays = rentalDays;
        this.mc = m;
    }
}