function compute()
{
    //Properties
    let principal = document.querySelector('#principal').value;
    let rate = document.querySelector('#rate').value
    let years = document.querySelector('#years').value

    //Principal: Text validation
     if (isNaN(principal)) {
        alert("Only numbers are allowed in this field");
        document.querySelector('#principal').focus();
        return false;
    }
    
    //Principal: Number validation
    if (principal <= 0){
        alert('Only numbers higher than 0 are allowed in this field') 
        document.querySelector('#principal').focus();
        return false;
    }

    //Calculation 
    let interest = (principal * years) * (rate / 100)

    //Year computation: from current year to year in the future
    let year = new Date().getFullYear()+parseInt(years)
    
    //Output (with template literals)
    const result = document.querySelector('#result') 
    const resultToDisplay = `
      <p>
        If you deposit <mark>${principal}</mark>, <br/>
        at an interest rate of <mark>${rate}%</mark>, <br/>
        You will receive an amount of <mark>${interest}</mark>, <br/>
        in the year <mark>${year}</mark>
      </p>
      
    `
    result.innerHTML = resultToDisplay;
}

//Update the rate value dynamically when working with the slider
function updateRate(){
    let rateVal = document.querySelector('#rate').value;
    document.querySelector('#rate_val').innerText = rateVal
}

