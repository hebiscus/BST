// SORTING ARRAY & CHECKING FRO EXISTING VALUE
const swap = function(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

const indexOfMinimum = function(array, startIndex) {
    let minValue = array[startIndex];
    let minIndex = startIndex;

    for(let i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

const selectionSort = function(array) {
    let temp;
    for(let i = 0; i <array.length; i++) {
        temp = indexOfMinimum(array, i);
        swap(array, temp, i);
    }
};

const deleteDuplicates = function(array) {
  const noDuplicates = [...new Set(array)];
  return noDuplicates
}