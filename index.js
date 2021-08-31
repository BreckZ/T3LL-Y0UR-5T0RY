const url = "http://numbersapi.com/"
// http://numbersapi.com/8?json

async function fetchData() {
  try {
    let result = await axios.get(`${url}8?json`);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}