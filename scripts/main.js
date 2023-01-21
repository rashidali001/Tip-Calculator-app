let tip_amount_value = document.querySelector('#tip-amount-value');
let total_amount_value = document.querySelector('#total-amount-value');
let division = document.querySelectorAll('div.division');

tip_amount_value.innerHTML = 0.0;
total_amount_value.innerHTML = 0.0;

let main = document.querySelector('main');
let body = document.querySelector('body');

if (window.innerWidth > 800)
{
    body.style.display = none;

}