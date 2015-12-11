//Problem: User interaction doesn`t provide desired results.
//solution: Add interactivity so the user can manage daily tasks.


var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0];//firstbutton
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks") //completed-tasks


//New Task List Item
var createNewTaskElement = function (taskString) {
  //Create list item
  var listItem = document.createElement("li");
  //input checkbox
  var checkBox = document.createElement("input"); //checkbox
  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input"); //text
  //button.edit
  var editButton = document.createElement("button");
  //button.delete
  var deleteButton = document.createElement("button");

      //Each element needs modifying 

      //Each element needs appending
      
  return listItem;    
}

//Add a new task
var addTask = function() {
  console.log("Add task...");
  
    //Create a new list item with the text from #new-task:
    var listItem = createNewTaskElement("Some New Task");

    //Append listItem to incompleteTasksHolder
      
}

//Edit an existing task
var editTask = function () {
  console.log("Edit task...");

  //When the Edit button is pressed
  //if the class of the parent is .editmode
    //Switch from .editmode
    //label text become the input`s value

  //else

    //Switch to .editmode
    //input value becomes the label`s text

  //Toggle .editmode on the parent    
}

var deleteTask = function () {

  console.log("Delete task...");

//Delete an existing task
  //When the Delete button is pressed
    //Remove the parent list item from the ul
}

var taskCompleted = function () {
  console.log("complete task...");


//Mark a task as complete
  //When the checkbox is checked
    //Append the task list item to the #completed-tasks
}

var taskIncomplete = function () {
  console.log("incomplete task...");

//Mark a task as incomplete
  //When the checkbox is unchecked
    //Append the task list item to the #completed-tasks
}

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  //select taskListItem`s chldren
  var checkBox = taskListItem.querySelector("input[type=checkbox]"); 
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");


    //bind editTask to edit button
    editButton.onclick = editTask;
    //bind deleteTask to delete button
    deleteButton.onclick = deleteTask;
    //bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;

}


//Set the click handler to the addTask function
addButton.onclick = addTask;


//Cycle over incompleteTasksHolder ul list items
for( var i = 0; i < incompleteTasksHolder.children.length; i++) {

    //bind events to list item`s children (taskCompleted)
    bindTaskEvents( incompleteTasksHolder.children[i], taskCompleted);
}

//Cycle over completedTasksHolder ul list items
for( var i = 0; i < completedTasksHolder.children.length; i++) {

    //bind events to list item`s children (taskIncomplete)
    bindTaskEvents( completedTasksHolder.children[i], taskIncomplete);

}    























































