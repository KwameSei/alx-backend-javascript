export class Chair {
    //Defaults that will be common for all the instances:
    static backSupport = true;
    static armRests = true;

    constructor (color, seatHeight, recliningAngle, padding, armRests, seatSize, isHeightAdjustable, isMovable) {
        //Defaults which can be changed by the subclass class.

        this.color = color;
        this.seatHeight = seatHeight;
        this.recliningAngle = recliningAngle;
        // this.backSupport = true;
        this.headSupport = false;
        this.padding = "3 inch";
        // this.armRests = true;
        this.seatSize = "16 inch";
        this.isHeightAdjustable = false;
        this.isMovable = isMovable;
        this.type = "Chair";

    }

    static logObjectProps(){
        console.dir(this);
    }

    adjustableHeight() {};
    adjustAngle() {};
    moveChair() {};
}