/*
 *
 * Technical data
 * */
var testDiv = document.getElementById('testDiv');

function log(value) {
    console.log(value);
    testDiv.insertAdjacentHTML('beforeend', '<div>' + value + '</div>');
}