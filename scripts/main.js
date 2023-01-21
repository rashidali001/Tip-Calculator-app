let tip_amount_value = document.querySelector('#tip-amount-value');
let total_amount_value = document.querySelector('#total-amount-value');
let division = document.querySelectorAll('div.division');
let percentages = document.querySelectorAll(' div.percentages');
let custom = document.querySelector('#custom');

tip_amount_value.innerHTML = 0.0;
total_amount_value.innerHTML = 0.0;

function select(value)
{
    for (let i = 0; i < percentages.length; i++){
        percentages[i].classList.remove('selected');
    }

    percentages[value - 1].classList.add('selected');
    custom.value = "";
}

function unselect()
{
    for (let i = 0; i < percentages.length; i++){
        percentages[i].classList.remove('selected');
    }
}