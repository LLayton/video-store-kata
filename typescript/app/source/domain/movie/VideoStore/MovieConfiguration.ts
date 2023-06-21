export class MovieConfiguration {
    private title: string;
    private price: number;
    private minRentDays: number;
    private additionaCostPerDay: number;
    private additionalRenterPoint: number;

    constructor(title: string,
                price: number,
                minRentDays: number,
                additionaCostPerDay: number,
                additionalRenterPoint: number) {
        this.title = title;
        this.price = price;
        this.minRentDays = minRentDays;
        this.additionaCostPerDay = additionaCostPerDay;
        this.additionalRenterPoint = additionalRenterPoint;
    }
    public GetminRentDays():number{
        return  this.minRentDays;
    }
    public GetadditionaCostPerDay():number{
        return this.additionaCostPerDay;
    }
    public GetPrice():number{
        return this.price;
    }
    
}
export const newReleaseConfiguration: (title: string) => MovieConfiguration = (title:string)=>{
    return  new MovieConfiguration(title,3.0,1,3.0,1)
};
export const childrenConfiguration: (title: string) => MovieConfiguration = (title:string)=>{
    return  new MovieConfiguration(title,1.5,3,1.5,0)
};
