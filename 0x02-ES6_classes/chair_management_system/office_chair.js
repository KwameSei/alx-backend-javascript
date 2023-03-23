import { Chair } from "./chair";

// Inheriting from Chair class
export class OfficeChair extends Chair {
    // Adding private properties
    #basePrice;
    #maxDiscount;
    #sellerAddress;

    constructor(color, isHeightAdjustable, seatHeight, recliningAngle) {
        super();
        this.type = "Office Chair";
        this.color = color;
        this.isHeightAdjustable = isHeightAdjustable;
        this.seatHeight = seatHeight;
        this.recliningAngle = recliningAngle;
        this.isMovable = true;
        this.#basePrice = 500;
        this.#maxDiscount = 5; // In percentage
        this.#sellerAddress = "Abc address";
    }

    adjustableHeight(height) {
        if(height > this.seatHeight) {
            console.log( `Chair height changed to ${height}`);
        } else {
            console.log(`Height cannot be decreased more than the seat height ${this.seatHeight}`);
        }
    }

    adjustAngle(angle) {
        if(angle >= this.recliningAngle) {
            console.log(`Chair angle changed to ${angle}`);
        } else {
            console.log(`Angle cannot be decreased more than the min reclining angle ${this.recliningAngle}`);
        }
    }

    moveChair(x, y){
        console.log(`Chair moved to co-ordinates = (${x}, ${y})`)
    }

    getChairAmount(taxCharge) {
        return this.#basePrice + (this.#basePrice - this.#basePrice * this.#maxDiscount / 100) + taxCharge;
    }

	generateBill() {
		console.log("**** BILLING INFORMATION ****");
		console.log(`Chair Price = ${this.#getChairAmount(20)}`);
		console.log(`Seller Address = ${this.#sellerAddress}`);
	}
}