const myFruits = ['apple', 'pear', 'pineapple', ['orange', 'banana', ['grape', 'papaya']], 'melon'];

Array.prototype.flatAll = function() {
  const result = [];

  function r(array) {
    array.forEach((value) => {
      if (typeof value === 'object') {
        r(value);
      } else {
        result.push(value);
      }
    });
  }
  
  r(this);

  return result;
}

console.log(myFruits.flatAll());