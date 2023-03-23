import { Chair } from "./chair_management_system/chair";
import { OfficeChair } from "./chair_management_system/office_chair";

// const newChair = new Chair("Blue","25 inch","20 deg",true,false,"3 inch",true,"16 inch",false,false);
// console.dir("Chair Prototype", Chair)
// console.log("Chair Object", newChair)

const newChair = new Chair();
newChair;

const newOfficeChair = new OfficeChair("Red", true, 30, 30);

console.log(newOfficeChair.adjustableHeight(31));
console.log(newOfficeChair.adjustAngle(40));
console.log(newOfficeChair.moveChair(10,20));