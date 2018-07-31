/*
 * https://projecteuler.net/problem=1
 * Multiples of 3 and 5
 * Problem 1
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

(function(){
    var FIRST_MULTIPLE = 3,
        SECOND_MULTIPLE = 5,
        COMMON_MULTIPLE = FIRST_MULTIPLE * SECOND_MULTIPLE,
        LOWER_LIMITE = 0,
        UPPER_LIMITE = 100000;
    var sum = 0,
        sum_first_multiple = 0,
        sum_second_multiple = 0,
        sum_common_multiple = 0;

    // A: sum all the values multiple of 3 under 1000
    for(sum = 0; sum < UPPER_LIMITE; sum+=FIRST_MULTIPLE)
        sum_first_multiple += sum;

    // B: sum all the values multiple of 5 under 1000
    for(sum = 0; sum < UPPER_LIMITE; sum+=SECOND_MULTIPLE)
        sum_second_multiple += sum;

    // C: sum all the values multiple of 3x5 = 15  (common values: repeated)
    for(sum = 0; sum < UPPER_LIMITE; sum+=COMMON_MULTIPLE)
        sum_common_multiple += sum;
 
    // result = A + B - C;
    console.log(  sum_first_multiple
                + sum_second_multiple
                - sum_common_multiple);
})();
