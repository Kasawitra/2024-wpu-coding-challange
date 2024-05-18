// function evenNumbers(array, number) {
//   var result = [];

//   for (var i = 0; i <= array.length; i++) {
//     if (array[i] % 2 === 0) {
//       result.push(array[i]);
//     }
//   }

//   return result.slice(-number);
// }

const evenNumbers = (array, number) =>
  array.filter((item) => item % 2 === 0).slice(-number);

{
  {
    console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
  }
}
