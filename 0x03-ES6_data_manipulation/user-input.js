const fruits = [];
fruits.push("banana", "apple", "orange", "strawberry");
fruits.push("pineapple", "mango", "grapes");
console.log(fruits);

// function getArea() {
//   const length = 10;
//   const area = length * length;
//   if (area > 20) {
//     console.log(`Value above threshold: ${area}m2.`);
//   } else {
//     console.log(`Value below threshold: ${area}m2.`);
//   }
//   return area;
// }

// const results = getArea();
// console.log(results);

const getArea = () => {
  const length = 10;
  const area = length * length;
  if (area > 20) {
    console.log(`Value above threshold: ${area}m2.`);
  } else {
    console.log(`Value below threshold: ${area}m2.`);
  }
  return area;
}

const results = getArea();