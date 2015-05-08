/*** Created by Rocky on 4/14/2015.*/
//grab the button from html
var myBtn = document.getElementById('myBtn');

//add event listener to button to run a function when clicked
myBtn.addEventListener('click', createTask);

//declaring global vars
var theLi;

var newLi;

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
    theLi = document.createElement('li');
    //change the inner html in javascript to display items in a list with buttons and checkbox
    newLi = theLi.innerHTML = '<input type="checkbox">' + inputValue +
    '<button id="edit" type="submit" class="btn btn-default">Edit</button>' +
    '<button id="del" type="submit" class="btn btn-default">Delete</button>';

    //add item to the list
    list.appendChild(theLi);

    //push li to tasks array
    tasks.push(inputValue);
    //add item to the list on
    //list.appendChild(tasks);

    console.log(tasks);
    //clear the input field
    inputTask.value = '';
}

//grab the edit button from the HTML
var edit = document.querySelectorAll('#edit');
//add event listener to button to run function when clicked
for (i = 0; i < edit; i++) {
    var editBtn = edit[i];
    editBtn.addEventListener('click', editItem);
}
//function should turn item into input field then change back to item when "enter" key is pressed
function editItem(){

}

//grab the delete button from the HTML
var del = document.querySelectorAll('#del');
//add event listener to button to run a function when clicked
for (i = 0; i < del; i++) {
    var delBtn = del[i];
    delBtn.addEventListener('click', removeItem);
}
//function removes the list item it's within and when clicked confirm they really want to delete
function removeItem(){
    theLi.remove();
}
