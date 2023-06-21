import {compose} from "../compose";
import { MoviePrices } from "./VideoStore/MoviePrices";
import { Rental } from "./VideoStore/Rental";

const calculateAdditionalCost = (rental: Rental): MoviePrices => {
    let additionalCost = 0.0;
    if (rental.rentalDays > rental.mc.minRentDays) {
        const additionalDays = rental.rentalDays - rental.mc.minRentDays
        additionalCost = rental.mc.additionaCostPerDay * additionalDays;
    }
    return new MoviePrices(additionalCost, rental.mc.price);
}

const calculatePrice = (moviePrices: MoviePrices): number =>
     moviePrices.movieBasePrice + moviePrices.additionalCost

const calculateTotalPriceWith =
    (calculateMoviePrice:(r:Rental) => number) =>
     (rentals:Rental[]) => rentals.map(calculateMoviePrice).reduce((x,y)=>x+y)

export const calculateSingleMoviePrice: (x: Rental) => number = compose(calculateAdditionalCost,calculatePrice)
export const calculateTotalMoviesPrice: (rentals: Rental[]) => number = calculateTotalPriceWith(calculateSingleMoviePrice)