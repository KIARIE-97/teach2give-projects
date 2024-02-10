"use strict";

    // Function to check if x is power of 2

function isPowerOfTwo(n) { 
      if (n === 0) 
            return false; 
        
        while (n !== 1){ 
            if (n % 2 !== 0) 
                return false; 
            n = n / 2; 
        }
        return true; 
}
 
       console.log(isPowerOfTwo(8));
       console.log(isPowerOfTwo(6));
    


