/* Q1. Implement customMap() function for JS arrays. 
The functionality should be exactly the same as that of JS native .map() function. 
Function customMap() should return a new array and not change the array on which we are mapping

Example:
const arr = [1, 2, 3];
const squaredNums = arr.customMap((item, index) => {
	return item * item;
}); 
console.log(squaredNums); // should output [1, 4, 9]
console.log(arr); // should output [1, 2, 3] */

Array.prototype.customMap = function (callBack) {
  const maparr = []; //empty array initialized
  //looping through the array elemenys
  for (let i = 0; i < arr.length; i++) {
    maparr.push(callBack(arr[i])); // calling the callback once for each element && returned value is added to maparr array
  }
  return maparr;
};
