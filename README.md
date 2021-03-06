# T3LL-Y0UR-5T0RY
Allows the user to build a numerological profile and let the numbers speak about it.

## Project Description

This application will take the user through a profile building exercise.  During the process, the user may learn something factual along the way and see how numbers can have more meaning than simply to count, measure, or label something.

## API and Data Sample

Numbers API returns data arrays with trivial or factual information based on the parameter entered by the user.  In this example, the request returns a random text with the trivia key.  

i.e. numbersapi.com/8/year?json
```
{
 "text": "8 is the number of bits in a byte.",
 "number": 8,
 "found": true,
 "type": "trivia"
}
```

## Wireframes

Desktop Design - https://imgur.com/UZrig4a

Mobile Design - https://imgur.com/KgKc1bQ


#### MVP 

  * Allow users to input fields

  * Style with Flexbox to incorporate clean look while providing dynamic interaction
  * Design responsive media query to display a slightly different setup
  * Retrieve API through dynamic JavaScript
  * HTML and CSS
    
#### PostMVP  
  * Add hover effects to display 

  * Random picture to display using external API
  * Allow user to save input results
  * Hidden numbers that display upon hover with a random effect.
  * Design a gaming effect where users can receive tokens for accomplishing tasks

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Aug 28-29| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Aug 30| Project Approval / Core Application Structure (HTML,CSS. js) / API calls working properly | Complete
|Aug 31| Pseudocode / actual code / functionality / MVP | Complete
|Sep 1| Styling Styling and More Styling / Start Post-MVP | Complete
|Sep 2| Post-MVP| Incomplete
|Sep 3| Presentations | Incomplete

## Priority Matrix
See following link https://imgur.com/GFj5v5E

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Design html layout | H | 3 hrs | 3 hrs | 3 hrs |
| Give basic css styling | H | 3 hrs | 3 hrs | 3 hrs |
| Make API calls for user inputs | H | 3 hrs | 4 hrs | 4 hrs |
| Structure flexbox for design | H | 3 hrs | 6 hrs | 6 hrs | 
| Make API calls for number requests | H | 3 hrs | 2 hrs | 2 hrs |
| Dynamic Javascript to interact with API | H | 3 hrs | 5 hrs | 5 hrs | 
| Style input containers for desktop | H | 3 hrs | 4 hrs | 4 hrs |
| HTML and CSS media query for mobile | H | 3 hrs | 4 hrs | 4 hrs |
| Style input containers for mobile | H | 3 hrs | 1 hrs | 1 hrs |
| Structure flexbox for mobile | M | 3 hrs | 3 hrs | 3 hrs |
| Style search container with flexbox | M | 3 hrs | 2 hrs | 2 hrs |
| Post MVP Random picture API based on user input | L | 3 hrs | 0 hrs | 0 hrs | 
| Post MVP incorporate hover effects | L | 3 hrs | 0 hrs | 0 hrs |
| Total | H | 39 hrs | 37 hrs | 37 hrs |

## Code Snippet

``` 
function handleInput(e) {
  e.preventDefault();
  if (e.target.id === "age-btn") {
    const age = ageInput.value;
    endingUrl = "/trivia?json";
    category = "Age";
    fetchData(age, category);
    ageInput.value = "";
  } else if (e.target.id === "bday-btn") {
    const bmonth = bmthInput.value;
    const birthDay = bdayInput.value;
    const birthDate = `${bmonth}/${birthDay}`
    endingUrl = "/date?json"
    category = "Birth Date";
    fetchData(birthDate, category);
    bmthInput.value = "";
    bdayInput.value = "";
  } else if (e.target.id === "year-btn") {
    const year = yearInput.value;
    endingUrl = "/year?json"
    category = "Year";
    fetchData(year, category);
    yearInput.value = "";
  }
```    

## Change Log

The original design from the wireframes is different in the end product, but still similar.


