// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:
function calculateAverage(numbers) {
    // Write your code here to calculate and return the average of the array elements.
    //Initialize sum to 0
    //Using for loop get the numbers from the array
    //Get the sum 
    //Return by dividing the sum with the length
    let sum = 0;
    for (let i=0; i<numbers.length; i++){
        sum+= numbers[i];
    }
    return sum/ numbers.length;

}

// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30

// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:
function checkAge(age) {
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.

    //First find the age range 0-150
    //Initialize negative age, diff age range between normal ages usinf if else
    if (age > 150){
        console.log('Exceesing Age Limit');
    }else if (age < 0){
        console.log('Negative age')
    }else if (age<18){
        console.log('Minor');
    }else if (age<= 25){
        console.log('Young Adult');
    }else{
        console.log('Adult');
    }
}
checkAge(25);
// Example usage:
checkAge(25); // Possible output: young adult

// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:
function reverseString(str) {
    // Write your code here to reverse and return the string.
    function reverseString(rev) {
        let stri = ""
        for(i=rev.length-1;i>=0; --i)
        {
            stri = stri+rev[i]
        }
        return stri
    // Write your code here to reverse and return the string.
    }
    console.log(reverseString("Faadhil"))
    

}

// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"

// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:
function findLargestNumber(numbers) {
    // Write your code here to find and return the largest number in the array.

        largest = numbers[0]
        for(let i =0;i<numbers.length;i++)
        {
           if(numbers[i]>largest)
           {
            largest = numbers[i]
           }
        }
        return largest
    
}

// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50

// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:

//Use key value, constant 
const counter = {
    number:0,
    add:function(){
    this.number =this.number+1;
},display:function(){
    console.log(this.number)
},subtract:function(){
    this.number =this.number-1;
},reset:function(){
    this.number=0;
}
};

// Example usage
counter.add();
counter.add();
counter.display();  // Output: 2
counter.subtract();
counter.display();  // Output: 1
counter.reset();
counter.display();  // Output: 0