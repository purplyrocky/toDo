/*** Created by Rocky on 4/14/2015.*/
//grab the button from html
var myBtn = document.getElementById('myBtn');
//add event listener to button to run a function when clicked
myBtn.addEventListener('click', createTask);

//grab the ul from the HTML
var list = document.getElementById('list');
//grab the input field from the HTML
var inputTask = document.getElementById('inputTask');

//create function that will run when myBtn is clicked
function createTask(e){
    //prevents page from refreshing each time the button is clicked
    e.preventDefault();
    //create array to store tasks
    var tasks = [];
    //put user input into a var
    var inputValue = inputTask.value;
    //create the var to contain the user input
    var theLi = document.createElement('li');
    //change the inner html in javascript to display items in a list with buttons and checkbox
    var newLi = theLi.innerHTML = '<input type="checkbox">' + inputValue +
    '<button id="edit" type="submit" class="btn btn-default">Edit</button>' +
    '<button id="del" type="submit" class="btn btn-default">Delete</button>';
    //add item to the list
    //list.appendChild(theLi);

    //push li to tasks array
    tasks.push(inputValue);
    console.log(tasks);
    //clear the input field
    inputTask.value = '';
}

//grab the edit button from the HTML
var edit = document.getElementById('edit');

//add event listener to button to run function when clicked
//edit.addEventListener('click', editItem() {
    //function should turn item into input field then change back to item when "enter" key is pressed

//});

//grab the delete button from the HTML
//var del = document.getElementById('del');
//add event listener to button to run a function when clicked
//del.addEventListener('click', removeItem() {
    //function removes the list item it's within, when clicked confirm they really want to delete
//});
