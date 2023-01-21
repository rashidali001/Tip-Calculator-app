let tip_amount_value = document.querySelector('#tip-amount-value');
let total_amount_value = document.querySelector('#total-amount-value');
let division = document.querySelectorAll('div.division');
let percentages = document.querySelectorAll(' div.percentages');
let custom = document.querySelector('#custom');
let bill = document.querySelector('#bill');
let no_of_people = document.querySelector('#people');

tip_amount_value.innerHTML = 0.0;
total_amount_value.innerHTML = 0.0;

function select(value)
{
    for (let i = 0; i < percentages.length; i++){
        percentages[i].classList.remove('selected');
    }

    percentages[value - 1].classList.add('selected');
    custom.value = "";
    keep_checking();
}

function unselect()
{
    for (let i = 0; i < percentages.length; i++){
        percentages[i].classList.remove('selected');
    }
    keep_checking();
}

function keep_checking()
{
    if (bill.value > 0)
    {
        for (let i = 0; i < percentages.length; i++){
            if(percentages[i].classList.contains('selected') || (custom.value > 0))
            {
                if (no_of_people.value < 1)
                {
                    let error = document.querySelector('#error');
                    error.style.display = 'block';
                    no_of_people.style.border = '1px solid red';
                }
                if (no_of_people.value > 0)
                {
                    let per_person = (bill.value) / (no_of_people.value);
                    let tip_per_person;
                    let total_per_person;
                    if (custom.value)
                    {
                        tip_per_person = per_person * (custom.value / 100); 
                    }
                    if (percentages[i].classList.contains('selected'))
                    {
                        tip_per_person = per_person * (percentages[i].id / 100);
                    }
                    total_per_person = per_person + tip_per_person;

                    tip_amount_value.innerHTML = '$' + tip_per_person.toFixed(2);
                    total_amount_value.innerHTML = '$' + total_per_person.toFixed(2);
                    

                }
            }
        }
    }
}

function checknumberofpeople()
{
    let error = document.querySelector('#error');
    if (no_of_people.value > 0)
    {
        error.style.display = 'none';
        no_of_people.style.border = '1px solid hsl(172, 67%, 45%)';
    }
    else{
        error.style.display = 'block';
        no_of_people.style.border = '1px solid red';
    }
    keep_checking();
}

function revert()
{
    if (!custom.value){
        tip_amount_value.innerHTML = 0;
        total_amount_value.innerHTML = 0;
    }
    
}

function destroy()
{
    tip_amount_value.innerHTML = 0;
    total_amount_value.innerHTML = 0;
    custom.value = '';
    bill.value = '';
    for (let i = 0; i < percentages.length; i++){
        percentages[i].classList.remove('selected');
    }
    no_of_people.value = '';

}
