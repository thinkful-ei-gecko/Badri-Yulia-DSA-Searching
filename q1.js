/**Q1. How many searches?
 * 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
 * 0  1  2  3  4   5    6   7   8   9
 * find 8
 * 
 * 1 step start 0, end 10
 * index = 5
 * item = 12
 * 12>8
 * 2 step start = 0, end = 4
 * index = 2
 * item = 6
 * 6<8
 * 3 step start = 3 end = 4
 * index = 3
 * 8 = 8
 * return 3
 * 
 * It took us 3 steps to find 8 in array of 10 items
 * 
 * 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
 * 0  1  2  3   4   5   6   7   8   9
 * 
 * find 16
 * 
 * 1. start = 0, end = 10
 * index = 5, item = 12
 * 12<16
 * 2. start = 6, end = 10
 * index = 8, item = 17
 * 17>16
 * 3. start = 6, end = 7
 * index = 6, item = 14
 * 14<16
 * 4. start = 7, end = 7
 * index = 7 , item = 15
 * 15<16
 * 5. start = 8, end = 7
 * start> end
 * return -1
 * 
 * It took us 5 steps to find that 16 is not in the array
 * 
 */