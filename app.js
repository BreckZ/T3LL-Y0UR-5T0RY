
const baseUrl = "http://numbersapi.com/"

let endingUrl = "";

async function fetchData(num, category) {
  try {
    let result = await axios.get(`${baseUrl}${num}${endingUrl}`);  // this defines your axios <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    console.log(result);
    let ageOutput = result.data.text;
    displayResults(ageOutput, category);                                  // this calls the displayAgeResults function down below
  } catch (error) {
    console.log(error);
  }
}



// Handling the Input
const ageInput = document.querySelector("#age");
const ageButton = document.querySelector("#age-btn");
ageButton.addEventListener("click", handleInput);

const yearInput = document.querySelector("#byear");
const yearButton = document.querySelector("#year-btn");
yearButton.addEventListener("click", handleInput);

// add eventListener to ("click", handleInput)

let category = "";

function handleInput(e) {  // handleInput
  e.preventDefault();
  if (e.target.id === "age-btn") {
    console.log(e.target.id);
    const age = ageInput.value;
    endingUrl = "/trivia?json";
    category = "Age";
    fetchData(age, category);
    ageInput.value = "";
  } else if (e.target.id === "year-btn") {
    console.log(e.target.id);
    const year = yearInput.value;
    console.log(year);
    endingUrl = "/year?json"
    category = "Year";
    fetchData(year, category);
    console.log(fetch);
    yearInput.value = "";
    console.log(yearInput);
  } else {
    console.log("hello")
  }
}

function removeAge() {
  ageBox.innerHTML = "";
}

// Displaying the Age Input
const rightBox = document.querySelector(".right");

function displayResults(output, category) {
  console.log(output);
  let div = document.createElement("div")
  div.classList.add("output");
  div.innerText = `${category}: ${output}`;
  rightBox.append(div);
}

// Handling the Birth Year Input
// const yearInput = document.querySelector("#byear");
// const yearButton = document.querySelector("#year-btn");
// yearButton.addEventListener("click", handleYearInput);


// function handleYearInput(e) {
//   e.preventDefault();
//   const byear = yearInput.value;
//   endingUrl = "/year?json";
//   fetchData(byear);
//   yearInput.value = "";
// }

// Displaying the Birth Year Input
// const yearBox = document.querySelector(".right");

// function displayYearResults(yearOutput) {
//   console.log(yearOutput);
//   let yearDiv = document.createElement("div")
//   yearDiv.classList.add("output");
//   yearDiv.innerText = `Birth Year: ${yearOutput}`;
//   yearBox.append(yearDiv);
// }