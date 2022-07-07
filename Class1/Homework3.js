/**
 * Q1:
 * Print the length of the country name (without using String-length property)
 * 
 */
 let countryName = 'USA USA';


 /**
  * Q2:
  * Count the number of words in the sentence
  */
 const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 
 /**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  * 
  * 
  * 'have a great day'   ->  'Have A Great Day'
  * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
  * 
  */
 
 
 /**
  * Q4:
  * Create abbreviation for any 4-word sentence
  * 
  * 'have a great day'   ->  'HAGD'
  * 'YOu lIVe ONlY ONcE' ->  'YLOO'
  * 'yOu neVER WaLK alOne'   ->  'YNWA'
  * 
  */
 
 

let countryNameIn = countryName.lastIndexOf('A');
console.log(`\n${countryNameIn}`);





 let sentenceArray = ['HeAlTh', 'wAs', 'EArlIer', 'said', 'To', 'Be', 'the', 'AbILitY', 'of', 'the', 'bOdY', 'funcTiOnInG', 'WElL.'];
 let totalword = sentenceArray.length;
 console.log(totalword);



 let fourWord1 = ['YOu', 'lIVe', 'ONlY', 'ONcE'];
 let fourWord1Lower = fourWord1[0].toLowerCase();
 let fourWord1Lower1 = fourWord1[1].toLowerCase();
 let fourWord1Lower2 = fourWord1[2].toLowerCase();
 let fourWord1Lower3 = fourWord1[3].toLowerCase();
 let firstLetterUpper = fourWord1Lower.substring(0, 1).toUpperCase();
 let firstLetterUpper1 = fourWord1Lower1.substring(0, 1).toUpperCase();
 let firstLetterUpper2 = fourWord1Lower2.substring(0, 1).toUpperCase();
 let firstLetterUpper3 = fourWord1Lower3.substring(0, 1).toUpperCase();
 let allletters = [fourWord1Lower,fourWord1Lower1,fourWord1Lower2,fourWord1Lower3];
 allletters[0] = firstLetterUpper.concat(fourWord1Lower.substring(1));
 allletters[1] = firstLetterUpper1.concat(fourWord1Lower1.substring(1));
 allletters[2] = firstLetterUpper2.concat(fourWord1Lower2.substring(1));
 allletters[3] = firstLetterUpper3.concat(fourWord1Lower3.substring(1));
 //let refinedWord = firstLetterUpper.concat(allletters);
 console.log(`\nConverted ${fourWord1} into ${allletters}`);


 let fourWord2 = ['yOu', 'neVER', 'WaLK', 'alOne'];
 let fourWord2Lower = fourWord2[0].toLowerCase();
 let fourWord2Lower1 = fourWord2[1].toLowerCase();
 let fourWord2Lower2 = fourWord2[2].toLowerCase();
 let fourWord2Lower3 = fourWord2[3].toLowerCase();
 let firstLettersUpper = fourWord2Lower.substring(0, 1).toUpperCase();
 let firstLettersUpper1 = fourWord2Lower1.substring(0, 1).toUpperCase();
 let firstLettersUpper2 = fourWord2Lower2.substring(0, 1).toUpperCase();
 let firstLettersUpper3 = fourWord2Lower3.substring(0, 1).toUpperCase();
 let allletters1 = [firstLettersUpper,firstLettersUpper1,firstLettersUpper2,firstLettersUpper3];
 allletters1[0] = firstLettersUpper.concat(fourWord2Lower.slice(1,1));
 allletters1[1] = firstLettersUpper1.concat(fourWord2Lower1.slice(1,1));
 allletters1[2] = firstLettersUpper2.concat(fourWord2Lower2.slice(1,1));
 allletters1[3] = firstLettersUpper3.concat(fourWord2Lower3.slice(1,1));
 
 console.log(`\nConverted ${fourWord2} into ${allletters1}`);




