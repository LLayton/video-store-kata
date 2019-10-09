import {ChildrenMovie, NewReleaseMovie, Rental} from "../../../source/domain/movie/movie"
import {moviePriceFor} from "../../../source/domain/movie/price";
import {movieReceipt, textBodyMoviesReceiptFor} from "../../../source/domain/movie/movieTextReceipt";
describe('Video Store', function () {

    it('rent new release movie one day', () => {
        expect(moviePriceFor(new Rental(1, new NewReleaseMovie("A_NEW_RELEASE_TITLE")))).toEqual(3.0)
    });

    it('rent new release movie two day', () => {
        expect(moviePriceFor(new Rental(2, new NewReleaseMovie("A_NEW_RELEASE_TITLE")))).toEqual(6.0)
    });

    it('rent children movie one day', () => {
        expect(moviePriceFor(new Rental(1, new ChildrenMovie()))).toEqual(1.5)
    });

    it('rent children movie four day', () => {
        expect(moviePriceFor(new Rental(4, new ChildrenMovie()))).toEqual(3.0)
    });

    it('print one new release movie rent for one day', () => {
        expect(movieReceipt(new Rental(1, new NewReleaseMovie("A_NEW_RELEASE_TITLE")))).toEqual("- A_NEW_RELEASE_TITLE 3.0")
    });

    it('print two new release movie rent for one day', () => {
        let aRental = new Rental(1, new NewReleaseMovie("A_NEW_RELEASE_TITLE"));
        let anotherRental = new Rental(1, new NewReleaseMovie("ANOTHER_NEW_RELEASE_TITLE"));

        let receipt = textBodyMoviesReceiptFor(Array.of(aRental,anotherRental));
        expect(receipt).toEqual("- A_NEW_RELEASE_TITLE 3.0\n" +
            "- ANOTHER_NEW_RELEASE_TITLE 3.0")
    });
});