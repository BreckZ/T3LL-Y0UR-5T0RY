
const baseUrl = "http://numbersapi.com/"

let endingUrl = "";

async function fetchData(num, category) {
  try {
    let result = await axios.get(`${baseUrl}${num}${endingUrl}`);  // this defines your axios <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    console.log(result);
    let output = result.data.text;
    let cat = category;
    displayResults(output, category);                                // this calls the displayAgeResults function down below
  } catch (error) {
    console.log(error);
  }
}

// Handling the Input
const ageInput = document.querySelector("#age");
const ageButton = document.querySelector("#age-btn");
ageButton.addEventListener("click", handleInput);

const bmthInput = document.querySelector("#bmth");
const bdayInput = document.querySelector("#bday");
const bdayButton = document.querySelector("#bday-btn");
bdayButton.addEventListener("click", handleInput);

const yearInput = document.querySelector("#byear");
const yearButton = document.querySelector("#year-btn");
yearButton.addEventListener("click", handleInput);

const hftInput = document.querySelector("#hft");
const hinInput = document.querySelector("#hin");
const heightButton = document.querySelector("#height-btn");
heightButton.addEventListener("click", handleInput);

const weightInput = document.querySelector("#lbs");
const weightButton = document.querySelector("#weight-btn");
weightButton.addEventListener("click", handleInput);

const shoeInput = document.querySelector("#shoe");
const shoeButton = document.querySelector("#shoe-btn");
shoeButton.addEventListener("click", handleInput);

const favInput = document.querySelector("#favNum");
const favButton = document.querySelector("#fav-btn");
favButton.addEventListener("click", handleInput);


let category = "";

function handleInput(e) {
  e.preventDefault();
  if (e.target.id === "age-btn") {
    console.log(e.target.id);
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
    console.log(yearInput);
  } else if (e.target.id === "height-btn") {
    let feet = hftInput.value * 12;
    console.log(feet);
    let inch = hinInput.value * 1;
    const height = feet + inch;
    endingUrl = "/?json"
    category = "Height in Inches";
    fetchData(height, category);
    hftInput.value = "";
    hinInput.value = "";
  } else if (e.target.id === "weight-btn") {
    const weight = weightInput.value;
    endingUrl = "/?json"
    category = "Weight";
    fetchData(weight, category);
    weightInput.value = "";
  } else if (e.target.id === "shoe-btn") {
    const shoeSize = shoeInput.value;
    endingUrl = "/trivia?json"
    category = "Shoe Size";
    fetchData(shoeSize, category);
    shoeInput.value = "";
  } else if (e.target.id === "fav-btn") {
    const favNum = favInput.value;
    endingUrl = "/trivia?json"
    category = "Favorite Number";
    fetchData(favNum, category);
    favInput.value = "";
  }
  else {
    console.log("How did you do this?!")
  }
}



const rightBox = document.querySelector(".right");
const outputBox = document.querySelector(".output-box");


function displayResults(output, category) {
  let div = document.createElement("div");
  div.classList.add("output-box");
  rightBox.append(div);

  let p1 = document.createElement("p");
  p1.classList.add("title");
  p1.innerText = `${category}:`;
  outputBox.append(p1);

  console.log(div);
  let p2 = document.createElement("p");
  p2.classList.add("output")
  p2.innerText = `${output}`;
  console.log(output);
  outputBox.append(p2);
}

function removeOuput() {
  // ageBox.innerHTML = "";
}