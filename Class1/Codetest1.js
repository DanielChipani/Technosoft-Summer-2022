/**
 * create class 
 * create function for array
 * create array variable 
 * use for loop to look through array
 * use if statment to find value
 * use splice function to remove value
 * return result of array
 * 
 * 
 * create array value
 * next filter array for min value that is not equal to -1
 * can try arrow function
 * combine into variable
 * return result of new array
 * 
 * 
 * create two user inputs
 * create total point variable
 * subtract speedlimit from userspeed
 * if 5 over is true then increment total and print
 * if not over 5 then return no change
 * 
 * 
 * 
 */



class MyCodeTest {
    toGivArray (array) {
        const arr = [2, 5, 9]
        for(let i = 0; i < arr.length; i++) {
            if ( arr[i] === 5) {
                arr.splice(i, 1);
            }
            
        }
        return arr;
    }


    firstMissingPositive (nums) {
        const array = [2, 3, 1, 56, 23, 11];

        const min = Math.min(...array.filter(a => Math.sign(a) !== -1));
        console.log(min);
    }


    returnPoints (sl, us) { 
 
        let total = 0

        const excess = sl - us;
        if (excess > 5) {
           total++;   
            console.log(`points on license ${total}`);
        } else  {
            console.log(`no change to license`)
        }
        
    } 





}







module.exports = MyCodeTest;
