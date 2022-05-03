var age = 18;  // Declaration of the age of the runners
var registeredEarly = "True"; // Declaration of how quick the runners registered for the racing.
var raceNumber = 1000; // Declaration of race number given to each runners

    if (age >= 18) '{' 
        if (registeredEarly == "True") '{'  
            if (raceNumber == 1000) '{' 
            console.log("True"); // Output: True
    
    '} else {'
      console.log("False"); // Output: False
    '}'


    '} else if (age >= 18) {'
        if (registeredEarly == "True") '{'
        if (raceNumber >= 1000) '{'
        console.log("You will race at 9:30am") // Output: You will race at 9:30am
    '}'

    '} else {'
    console.log("Sorry!, Try to enter your details correctly and ensure you meet the eligibility for this catagory of runners "); // Output: Sorry!, Try to enter your details correctly and ensure you meet the eligibility for this catagory of runners  
  '}'


  '} else if (age >= 18) {'
  if (registeredEarly == "False") '{'
  if (raceNumber < 1000) '{'
  console.log("You will race at 11:00am") // Output: You will race at 11:00am
'}'

'} else {'
console.log("Sorry!, Ensure your details are correct and you meet the criteria for this category of runners and try again "); // Output: Sorry!, Ensure your details are correct and you meet the criteria for this category of runners and try again 
'}'


'} else if (age < 18) {'
if (registeredEarly == "True") '{'
if (registeredEarly == "False") '{'
if (raceNumber < 1000) '{'
console.log("You will race at 12:30pm") // Output: You will race at 12:30pm
'}'

'} else {'
console.log("Sorry!, Ensure your details satisfies the criteria for this category of runners and try again"); // Output: Sorry!, Ensure your details satisfies the criteria for this category of runners and try again
'}'


'} else {'
if (age == 18) '{'
console.log("See registration desk"); // Output: See registration desk
'}'