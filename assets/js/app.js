// Global Variables
const currencyElementOne = document.getElementById("currency-one");
const amountElementOne = document.getElementById("amount-one");
const currencyElementTwo = document.getElementById("currency-two");
const amountElementTwo = document.getElementById("amount-two");

const rateElement = document.getElementById("rate");
const swap = document.getElementById("swap");

/*Fetch exchange rates and update the DOM*/
function calculate() {
    
    const currencyOne = currencyElementOne.value;
    const currencyTwo = currencyElementTwo.value;

    // https://app.exchangerate-api.com/
    // Fetch the data 
    // then it gets a response, the response should display its data in json
    // then can access the data and use dot notation to retrieve special data from the object
   fetch(`https://v6.exchangerate-api.com/v6/94e290c90f7a2553133ef779/latest/${currencyOne}`)
   .then(res => res.json())
   .then(data => {
        // console.log(data)
        const rate = data.conversion_rates[currencyTwo];
        // console.log(rate);

        rateElement.innerText = `1 ${currencyOne} = ${rate}`;
   });
};


// Event Listeners
currencyElementOne.addEventListener("change", calculate);
amountElementOne.addEventListener("input", calculate);
currencyElementTwo.addEventListener("change", calculate);
amountElementTwo.addEventListener("input", calculate);

calculate(); 


