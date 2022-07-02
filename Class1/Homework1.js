/**
 * Convert temperature values into different units
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * 
 * Due Date: Jul-3 EOD
 * 
 */

 let fTemp1 = 75;
 let cTemp1 = (fTemp1 - 32) * 5/9;
 console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`);

 let fTemp2 = 90;
 let kTemp1 = (fTemp2) + 459.67 * 5/9; 
 console.log(`\n${fTemp1}°F is equal to ${kTemp1}°K`);

 let cTemp2 = 22;
 let fTemp3 = (cTemp2) * 9/5 + 32;
 console.log(`\n${cTemp2}°C is equal to ${fTemp3}°F`);

 let cTemp3 = 49;
 let kTemp2 = (cTemp3) + 273.15;
 console.log(`\n${cTemp3}°C is equal to ${kTemp2}°K`);

 let kTemp4 = 53;
 let fTemp4 = (kTemp4) * 9/5 - 459.63;
 console.log(`\n${kTemp4}°K is equal to ${fTemp4}°F`);

 let kTemp5 = 88;
 let cTemp4 = (kTemp5) - 273.15;
 console.log(`\n${kTemp5}°K is equal to ${cTemp4}°C`);
