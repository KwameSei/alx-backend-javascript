import Currency from "./3-currency";

export default class Pricing {
    constructor (amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    get amount() {
        return this._amount;
    }
    
    get currency() {
        return this._currency;
    }

    set amount(new_amount) {
        this._amount = new_amount;
    }

    set currency(new_currency) {
        this._currency = new_currency;
    }

    displayFullPrice() {
        return `${this.amount} ${this.currency.displayFullCurrenty()}`;
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}