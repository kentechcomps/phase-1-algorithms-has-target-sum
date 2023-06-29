const numbers = [4 , 5 , 6 ,7]
const targetVal = 16

hasTargetSum(numbers, targetVal)

function hasTargetSum(array, target) {
  // Write your algorithm here

  for (let i = 0; i < array.length; i++) {
    const firstnumberinarray = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secodnumberinarray = array[j]; 
    
    if((firstnumberinarray + secodnumberinarray)===target){
      return true
    } else{
      return false
    }
    
  }
}
}

/* 
  Write the Big O time complexity of your function here
    The big o complexity here will be Quadratic complexity
    this is where by Quadratic time: O(n²) (
*/

/* 
  Add your pseudocode here
  first we will loop through our array to establish the first element to be added
  Then we will loop the second array using a j value inorder  to obtain the second element in array
  then you will have to run a check to see if the sum between the i elemnt and the j element equals to the target element
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
