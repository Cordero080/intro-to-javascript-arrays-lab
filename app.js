/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

const foods2 = [];  

foods2.push ('cheeseburger');
foods2.unshift ('pizza')




console.log('Exercise 2 result:', foods2);


/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/
const foods3  = ['cheeseburger', 'pizza'];
foods3.unshift('taco');


console.log('Exercise 3 result:', foods3);
console.log(foods3)

// /*
// Exercise 4: Access an array element

// 1) Retrieve the 'pizza' string from the array based on its position (index) in
//    the array.  

// 2) Assign it to a variable called `favFood`.

// Complete Exercise 4 in the space below:
// */

const foods4  = ['tonkotsu ramen','cheeseburger', 'pizza', 'fetuccine alfredo'];

favFood = foods4[2];



console.log('Exercise 4 result:', favFood);

// /*
// Exercise 5: Insert an element between two others

// 1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

// Complete Exercise 5 in the space below:
// */

const foods5  = ['tonkotsu ramen','cheeseburger', 'pizza', 'fetuccine alfredo'];

foods5.splice(2,0, 'tofu')


 console.log('Exercise 5 result:', foods5);


/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/
const foods6 = 
['tonkotsu ramen','cheeseburger', 'pizza', 'fetuccine alfredo'];

foods6.splice(2,0, 'tofu')
foods6.splice(3,1, 'sushi', 'cupcake')


console.log('Exercise 6 result:', foods6);

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

const foods7 = 
['tonkotsu ramen','cheeseburger', 'pizza', 'fetuccine alfredo'];

foods7.splice(2,0, 'tofu')
foods7.splice(3,1, 'sushi', 'cupcake')
const yummy = foods7.slice(3,5) //slices from index 3 up to but not inlcluding idx 5.



console.log('Exercise 7 result:', yummy); // output > 


/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/
const foods8= ['tonkotsu ramen', 'cheeseburger', 'tofu', 'sushi', 'cupcake', 'fetuccine alfredo']

console.log(foods8.indexOf('tofu')) // console.log() >2

//assigning variable to indexOf
 const soyIdx = foods8.indexOf('tofu') 
console.log('Exercise 8 result:', soyIdx); //output > 2

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/
const foods9= ['tonkotsu ramen', 'cheeseburger', 'tofu', 'sushi', 'cupcake', 'fetuccine alfredo']


     const allFoods = foods9.join(' -> ') // < step 1
    // step 2 ^

console.log('Exercise 9 result:', allFoods);

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

const foods10 = ['tonkotsu ramen', 'cheeseburger', 'tofu', 'sushi', 'cupcake', 'fetuccine alfredo']

hasSoup = foods10.includes('soup') // < 1st step
  // 2nd step^
hasTofu = foods10.includes('tofu')
hasTobacco = foods10.includes('tobacco')



console.log('Exercise 10 result:', hasSoup, hasTofu, hasTobacco);

/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds = [] // initialization 

for (const num of nums) {
  if (num % 2 != 0) {
    odds.push(num);   //adds odd number to odds empty array
}
}


console.log('Exercise 11 result:', odds);

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

const num2 = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const fizz = []          //notes: never forget to initialize 

   for (const num of nums) {
   if (num % 3 === 0) {
   fizz.push(num);
  }
}

const buzz = []

    for (const num of nums) {
    if (num % 5 === 0) {
    buzz.push(num);
  }
}

const fizzbuzz = []

    for (const num of nums) {
    if (num % 5 === 0 || num % 3 === 0) {
    fizzbuzz.push(num);
  }
}




console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);




