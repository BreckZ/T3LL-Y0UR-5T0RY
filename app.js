
const baseUrl = "http://numbersapi.com/"

//  http://numbersapi.com/8/trivia?json
//  http://numbersapi.com/8/32/date?json
let endingUrl = "";

async function fetchData(num) {
  try {
    let result = await axios.get(`${baseUrl}${num}${endingUrl}`);  // this defines your axios <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    console.log(result);
    let ageOutput = result.data.text;
    displayAgeResults(ageOutput);                                  // this calls the displayAgeResults function down below
  } catch (error) {
    console.log(error);
  }
}



// Handling the Age Input
const ageInput = document.querySelector("#age");
const ageButton = document.querySelector("#age-btn");
ageButton.addEventListener("click", handleAgeInput);


function handleAgeInput(e) {
  e.preventDefault();
  const age = ageInput.value;
  endingUrl = "/trivia?json";
  fetchData(age);
  removeAge();
  ageInput.value = "";
}

function removeAge() {
  ageBox.innerHTML = "";
}

// Displaying the Age Input
const ageBox = document.querySelector(".right");

function displayAgeResults(ageOutput) {
  console.log(ageOutput);
  let ageDiv = document.createElement("div")
  ageDiv.classList.add("output");
  ageDiv.innerText = `Age: ${ageOutput}`;
  ageBox.append(ageDiv);
}