/** epam1 */
var array = [2, 4, 5, 8];

function printing(element) {
  console.log (element);
}

function forEach(arr, fx) {
  for (var i = 0; i < arr.length; i++){
    fx(arr[i]);
  }
}

//forEach(array, printing);

/** epam2 */
var transformedArray = [];

function increasing(element) {
   return transformedArray.push(++element);
}

function getTransformedArray(arr, fx) {
  forEach(arr, fx);
  return transformedArray;
}

// getTransformedArray(array, increasing);
// console.log (transformedArray);

/** epam3 */
var presidents = [
  { name: 'George',
    surname: 'Kush' } ,
  { name: 'Barako',
    surname: 'Obaame' }];

function labeling(element){
  labelsArray.push(element.name);
  return console.log(labelsArray);
}

function pluckByAttribute(arr, fx) {
  getTransformedArray(arr, fx)
}

pluckByAttribute(presidents, labeling);


