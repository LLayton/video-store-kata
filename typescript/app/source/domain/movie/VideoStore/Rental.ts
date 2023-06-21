import { MovieConfiguration } from "./MovieConfiguration";
import { MoviePrices } from "./MoviePrices";

export class Rental {
    private rentalDays: number;
    private mc: MovieConfiguration;

    constructor(rentalDays: number, m: MovieConfiguration) {
        this.rentalDays = rentalDays;
        this.mc = m;
    }
    public  calculateAdditionalCost = (rental: Rental): MoviePrices => {
        let additionalCost = 0.0;
        if (rental.rentalDays > rental.mc.GetminRentDays()) {
            const additionalDays = rental.rentalDays - rental.mc.GetminRentDays();
            additionalCost = rental.mc.GetadditionaCostPerDay() * additionalDays;
        }
        return new MoviePrices(additionalCost, rental.mc.GetPrice());
    }
    
}