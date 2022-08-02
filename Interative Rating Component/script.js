var form = document.getElementById('form')
var rate = document.querySelector('.card')
var feedback = document.querySelector('.feedback')
var rating = document.getElementById('rating')

form.onsubmit = function () {
    var rate_value = document.querySelector('input[name = rate]:checked').value;
    rating.innerHTML = "You selected " + rate_value + " out of 5";
    rate.style.display = 'none'
    feedback.style.display = 'flex'
    return false;
};