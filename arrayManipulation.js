function processArray(arr) {
  let result = [];
  for (let num of arr) {
      if (num % 2 === 0) {
          result.push(num ** 2);
      } else {
          result.push(num * 3);
      }
  }
  return result;
}

const numberArray = [2,5,8,10];
const processedArray = processArray(numberArray);
console.log(processedArray);

function formatArrayStrings(strings, numbers) {
  let formattedStrings = [];
  for (let i = 0; i < strings.length; i++) {
      if (numbers[i] % 2 === 0) {
          formattedStrings.push(strings[i].toUpperCase());
      } else {
          formattedStrings.push(strings[i].toLowerCase());
      }
  }
  return formattedStrings;
}


const stringArray = ['Matthew','Paa','Kwesi','Mensah'];
const processedNumbers = processArray([2,23,12,7,9,4,13,44]); 
const formattedStrings = formatArrayStrings(stringArray, processedNumbers);
console.log(formattedStrings);