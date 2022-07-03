// Due Date : Tuesday Jul-05

const sentence1 = 'Hello dear, how are you doing?';
let result1 = 0;
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in result1
 * otherwise
 *      assign 25 in result1
 */
console.log(`result1 -> ${result1}`);


const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */

const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'health' (ignore cases)
 * 3. does sentence-3 contains with 'Body' (ignore cases)
 * 4. index of 'Body' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'Body' is present only once. (true or false)
 */


let result = sentence1.length >= 10 ? 15 : 25; 
console.log(`result -> ${result}`);

let sentence2_Replace = sentence2.replace(/a/gi, 'Alpha');
console.log(`\nsentence2 -> ${sentence2}`);
console.log(`sentence2_Replace -> ${sentence2_Replace}`);

let sentence3_length = sentence3.length;
console.log(`sentence3_length -> ${sentence3_length}`);

let sentence3_StartsWithPatt = ('HEALTH');
let sentence3_UpperCase = sentence3.toUpperCase('HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.');
let sentence3_StartsWith_health = sentence3_UpperCase.startsWith(sentence3_StartsWithPatt);
console.log(`\nsentence3 -> ${sentence3}`);
console.log(`does ${sentence3} start with 'health' : ${sentence3_StartsWith_health}`);

let sentence3_IncludePatt = ('BODY');
let sentence3_Include_BOD = sentence3_UpperCase.includes(sentence3_IncludePatt);
console.log(`\nsentence3 -> ${sentence3}`);
console.log(`does ${sentence3} include 'body' : ${sentence3_Include_BOD}`);

let sentence3_Index = sentence3_UpperCase.indexOf('BODY');
console.log(`\nIndex of body in sentence 3 is ${sentence3_Index}`);

let sentence3_CharAt = sentence3.charAt(70)
console.log(`\nLast character in sentence 3 is ${sentence3_CharAt}`);

let sentence3_LastIndex = sentence3_UpperCase.lastIndexOf('BODY');
console.log(`\nCharacter last index is ${sentence3_LastIndex}`);

let sentence3_LastIndexBod = 49
let sentence3_Bodyonce = sentence3_LastIndexBod === sentence3_Index ? true : false ;
console.log(`\nOnly Occurence ${sentence3_Bodyonce}`); 








