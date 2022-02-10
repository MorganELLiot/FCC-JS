//Basic Algorithm Scripting Solutions - Course from Free Code Camp
	

//Find the Longest Word in a String
function findLongestWordLength(str) {
 let arr = str.split(" ");
 let x = 0;
 for(let i = 0; i < arr.length; i++) {
   if(arr[i].length > x) x = arr[i].length;
 }
 return x; 
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


//Return Largest Numbers in Arrays
function largestOfFour(arr) {
 let arr2 = [];
 for(let i = 0; i < arr.length; i++) {
   let x = -Infinity;
   for(let n = 0; n < arr[i].length; n++) {
     if(arr[i][n] > x) x = arr[i][n];
   }
   arr2.push(x);
 }
 return arr2;
}
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));


//Confirm the Ending
function confirmEnding(str, target) {
 let arr = str.split('');
 let check = target.split('');
 for(let i = 0; i < target.length; i++) {
   if(arr.pop() === check.pop()) {
   } else return false;
 }
 return true
}
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));


//Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
 let x = "";
 for(let i = 0; i < num; i++) {
   x += str;
 }
 return x;
}
console.log(repeatStringNumTimes("abc", 3));


//Truncate a String
function truncateString(str, num) {
 if(str.length > num) return str.slice(0, num) + "...";
 else return str.slice(0, num);
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
 

//Finders Keepers
function findElement(arr, func) {
 let num = 0;
 for(let i = 0; i < arr.length; i++) {
   if(arr[i] % 2 === 0) return num = arr[i];
 }
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


//Boo Who
function booWho(bool) {
 return bool === true || bool === false ? true : false;
}
console.log(booWho(null));


//Title Case a Sentence
function titleCase(str) {
 let arr = str.toLowerCase().split(" ");
 arr = arr.map(word => word.replace(word[0], word[0].toUpperCase()));
 return arr.join(" ");
}
console.log(titleCase("I'm a little tea pot"));


//Slice and Splice
function frankenSplice(arr1, arr2, n) {
 let arr3 = arr2.slice();
 for(let i = 0; i < arr1.length; i++) {
   arr3.splice(n, 0, arr1[i]);
   n++;
 }
 return arr3;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


//Falsy Bouncer
	function bouncer(arr) {
return arr.filter(check => Boolean(check) === true);
}
console.log(bouncer([7, "ate", "", false, 9]));


//Where Do I Belong
function lowHigh(a, b) {
 return a - b;
}
function getIndexToIns(arr, num) {
 arr.sort(lowHigh);
 for(let i = 0; i <= arr.length; i++) {
   if(arr[i] < num);
   else return i;
 }
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));


//Chunky Monkey
function chunkArrayInGroups(arr, size) {
 let arr2d = [];
 let count = 0;
 for(let i = 0; i < arr.length / size; i++) {
     let arrSub = [];
   for(let x = 0; x < size; x++) {
     if(count == arr.length) {
     arrSub;
     break;
     }
     arrSub.push(arr[count]);
     count++;
   }
   arr2d.push(arrSub);
 }
  return arr2d;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 2));
 
	
//Mutations
function mutation(arr) {
 if(arr[1]
   .toLowerCase()
   .split("")
   .filter(check => arr[0]
   .toLowerCase()
   .split("")
   .indexOf(check) === -1)
   .length === 0) return true;
 else return false;
}
console.log(mutation(["hello", "hey"]));
 
 
 
















//Intermediate Algorithm Scripting - Course from Free Code Camp


//Sum All Numbers in a Range
function sumAll(arr) {
arr.sort(function(a, b) {
  return a - b
});
let sum = 0;
for(let i = arr[0] + 1; i < arr[1]; i ++) {
  sum += i;
}
return sum + arr[0] + arr[1];
}
console.log(sumAll([1, 4]));
//initial working design using a for loop
 
 
function sumAll(arr) {
 arr.sort((a, b) => a - b);
 let sum = 0;
 for(let i = arr[0]; i <= arr[1]; i ++) sum += i;
 return sum;
}
console.log(sumAll([1, 4]));
//tightened design
 
 
//Diff Two Arrays
function diffArray(arr1, arr2) {
 let newArr = [];
 for(let i = 0; i < arr2.length; i++) {
   if(arr1.indexOf(arr2[i]) < 0) newArr.push(arr2[i]);
 }
 for(let i = 0; i < arr1.length; i++) {
   if(arr2.indexOf(arr1[i]) < 0) newArr.push(arr1[i]);
   }
 return newArr;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//initial working design using a for loop
 
 
function diffArray(arr1, arr2) {
 return arr1
   .filter(match => arr2.indexOf(match) < 0)
   .concat(arr2
     .filter(match => arr1.indexOf(match) < 0));
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//tightend solution using filter

 
//Seek and Destroy
function destroyer(arr, ...seek) {
 return arr.filter(hit => seek.indexOf(hit) < 0);
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
 
 
//Spinal Tap Case
function spinalCase(str) {
 return str
 .replace(/([A-Z])/g, " $1")
 .trim()
 .split(/_*\W*\W+/)
 .join("-")
 .toLowerCase();
}
console.log(spinalCase("This Is Spinal Tap"));
 
 
//Pig Latin
function translatePigLatin(str) {
 if((/^[aeiou]/).test(str)) return str + "way";
 else {
   let m = str
     .match(/^[^a^e^i^o^u]+/)
     .toString().length;
   return str
     .split("")
     .slice(m)
     .concat(str.slice(0, m))
     .join("") + "ay";
   }
}
console.log(translatePigLatin("ccchonsonant"));
//initial working design, seems tightenable
 
 
//Search And Replace
function myReplace(str, before, after) {
 if((/[A-Z]/).test(before[0]))
   return str
     .replace(before, after[0]
       .toUpperCase() + after
         .slice(1));
 else return str
   .replace(before, after[0]
     .toLowerCase() + after
       .slice(1));
}
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
 
 
//DNA Pairing
	function pairElement(str) {
 	  let arr = []; //aesthetic fill
 	  for(let i = 0; i < str.length; i++) {
   	    if(str[i] === "A") arr.push(["A", "T"]);
   	    else if(str[i] === "T") arr.push(["T", "A"]);
   	    else if(str[i] === "C") arr.push(["C", "G"]);
   	    else if(str[i] === "G") arr.push(["G", "C"]);
 	  }
 	  return arr;
}
console.log(pairElement("GCG"));
 
 
//Missing Numbers
function fearNotLetter(str) {
 for(let i = 0; i < str.length - 1; i++) {
   if(str.charCodeAt(i) !== str.charCodeAt(i + 1) - 1)
     return String.fromCharCode(str.charCodeAt(i) + 1);
 }
}
console.log(fearNotLetter("abce"));
	
 
//Sorted Union
function uniteUnique(...xyz) {
  let arr = [];
  xyz = xyz.join(/\d/g).match(/\d/g).join("");
  for(let i = 0; i < xyz.length; i++) {
    if(arr.indexOf(Number(xyz.charAt(i))) === -1)
      arr.push(Number(xyz.charAt(i)));
  } 
  return arr;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
//Can this be done with a big ol’ .reduce shaped knuckle sandwich? This code feels low key clumsy.
 
 
//Sum of All Odd Fibonacci Numbers
function sumFibs(num) {
 let arr = [1, 1];
 let sum = 2;
 for(let i = 0; i <= num; i++) {
   if(i === ((arr[arr.length - 1])
     + (arr[arr.length - 2]))) {
       arr.push(i);
       if(i % 2 === 1) sum += i;
   }
 }
 return sum;
}
console.log(sumFibs(4));
 
 
//Sum Of All Primes
//The following code relies on a Sieve of Eratosthenes written by Ted Hopp and copied from StackOverflow. https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100#:~:text=function%20getPrimes(max,true%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20return%20primes%3B%0A%7D
function getPrimes(max) {
  var sieve = [], i, j, primes = [];
  for (i = 2; i <= max; ++i) {
    if (!sieve[i]) {
    // i has not been marked -- it is prime
    primes.push(i);
    for (j = i << 1; j <= max; j += i) {
      sieve[j] = true;
      }
    }
  }
  return primes;
}
 
function sumPrimes(num) {
  return getPrimes(num).reduce((sum, i) => sum + i);
}
console.log(sumPrimes(10));

 
//Convert HTML Entities
function convertHTML(str) {
 let arr = str.split("");
 for(let i = 0; i < arr.length; i++) {
   if(arr[i] === "&") arr.splice(i, 1, "&amp;");
   else if(arr[i] === "\<") arr.splice(i, 1, "&lt;");
   else if(arr[i] === "\>") arr.splice(i, 1, "&gt;");
   else if(arr[i] === "\"") arr.splice(i, 1, "&quot;");
   else if(arr[i] === "\'") arr.splice(i, 1, "&apos;");
 }
 return arr.join("");
}
console.log(convertHTML("Dolce & Gabbana"));
 
 
//Drop It
function dropElements(arr, func) {
  let  marker = arr.filter(num => func(num) === true);
  if(marker.length === 0) return [];
  return arr.slice(arr.indexOf(marker[0]));
}
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));

 
//Binary Agents
function binaryAgent(str) {
  let bnry = str.split(" ");
  let ten = [];
  for(let i = 0; i < bnry.length; i++) {
    ten.push(String.fromCharCode(parseInt(bnry[i], 2)));
  }
  return ten.join("");
}
 
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
 
 
//Everything Be True
function truthCheck(collection, pre) {
  for(let i = 0; i < collection.length; i++) {
    if(!Boolean((collection[i][pre]))) return false;
  }
  return true;
}
 
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
//Javascript Algorithms and Data Structures Projects


//Palindrome Checker
function palindrome(str) {
str = str.toLowerCase();
str = str.split("");
let rts = [];
let str2 = [];
for(let i = 0; i < str.length; i++) {
  if(/[a-z0-9]/i.test(str[i])) {
    str2.push(str[i]);
  }
}
for(let i = 0; i < str.length; i++) {
  if(/[a-z0-9]/.test(str[i])) {
    rts.unshift(str[i]);
  }
}
for(let i = 0; i < str.length; i++) {
  if(rts[i] !== str2[i]) {
    return false;
  }
 }
return true;
}
 
console.log(palindrome("eye"));
//my initial working design using for loops
 
 
function palindrome(str) {
str = str.toLowerCase().split("");
let rts = [];
let str2 = [];
for(let i = 0; i < str.length; i++) {
 if(/[a-z0-9]/i.test(str[i])) {
   str2.push(str[i]),
   rts.unshift(str[i]);
 }
}
for(let i = 0; i < str.length; i++) {
 if(rts[i] !== str2[i]) {
   return false;
 }
}
return true;
}
console.log(palindrome("eye"));
//improvement on initial working design using for loops
 
 
//Roman Numeral Converter
function convertToRoman(num) {
 let roman = "";
 for(let i = 0; i <= 12; i++) {
   if(num >= 1000) num -= 1000, roman += "M";
   else if(num >= 900) num -= 900, roman += "CM";
   else if(num >= 500) num -= 500, roman += "D";
   else if(num >= 400) num -= 400, roman += "CD";
   else if(num >= 100) num -= 100, roman += "C";
   else if(num >= 90) num -= 90, roman += "XC";
   else if(num >= 50) num -= 50, roman += "L";
   else if(num >= 40) num -= 40, roman += "XL";
   else if(num >= 10) num -= 10, roman += "X";
   else if(num >= 9) num -= 9, roman += "IX";
   else if(num >= 5) num -= 5, roman += "V";
   else if(num >= 4) num -= 4, roman += "IV";
   else if(num >= 1) num -= 1, roman += "I";
}
return roman;
}
console.log(convertToRoman(36));
//Obviously not succinct but very easy to read. Perhaps there is another way that ticks both boxes
 
 
//Caesar’s Cypher
function rot13(str) {
  let decoded = "";
  for(let i = 0; i < str.length; i++) {
    if(str.charCodeAt(i) > 77)
      decoded += (String.fromCharCode(str.charCodeAt(i) - 13));
    else if(str.charCodeAt(i) > 64)
      decoded += (String.fromCharCode(str.charCodeAt(i) + 13));
    else if(str.charCodeAt(i) > 31)
      decoded += str[i];
  }
  return decoded;
}
console.log(rot13("SERR PBQR PNZC"));
 
 
//Telephone Number Validator
function telephoneCheck(str) {
  if((/^(1?|1\s?)(\d\d\d|\(\d\d\d\))(\-|\s)?\d\d\d(\-|\s)?\d\d\d\d$/).test(str)) return true;
  else return false;
}
console.log(telephoneCheck("555-555-5555"));
 
 
//Cash Register
function checkCashRegister(price, cash, cid) {
 let cidSum = 0;
 let changeSum = 0;
 let diff = cash - price;
 let options = [["ONE HUNDRED", 100], ["TWENTY", 20],["TEN", 10], ["FIVE", 5],["ONE", 1],["QUARTER", 0.25], ["DIME", 0.10], ["NICKLE", 0.05], ["PENNY", 0.01]];
 let arr = [];
 let obj = new Object();
 obj.status = "INSUFFICIENT_FUNDS";
 obj.change = [];
 for(let i = 0; i < 9; i++) {
   cidSum += cid[i][1];
 }
 if(cidSum - diff < 0) return obj;
 for(let i = 0; i < 9; i++) { //looks through each denomination in drawer
   for(let m = cid[cid.length - 1 - i][1] / options[i][1]; m > 0; m--) { //finds the amount available per denomination (m) and looks through to find exact change
     if((diff.toFixed(2) - (options[i][1] * (m)) >= 0)) {//if change required is greater than (between 1 and m) times a particular denomination (i)
       options[i][1] *= (m);
       arr.push(options[i]),
       diff -= options[i][1],
       changeSum += options[i][1];
     } else if(cidSum == changeSum) {//if cash in drawer is exactly the same as change required, *closed* and display array of cash in drawer (cid)
       obj.status = "CLOSED",
       obj.change = cid;
     } else if(diff.toFixed(2) < 0.01) {//if exact change can be given *open* and return array of change
       obj.status = "OPEN",
       obj.change = arr;
     }
   }
 }
 return obj;
}
 
console.log(checkCashRegister(19.02, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));