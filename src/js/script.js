
// Создаем переменные 
var newTask = document.getElementById("newTask");
var tasksLeft = document.getElementById("incomplete-tasks");
var tasksComplete = document.getElementById("completed-tasks");
var addTask = document.getElementById("btn");

//Создаем функции для приложения
function buildItems (taskstring){
  
  //Создаем элементы для динамического построения
    var build_li = document.createElement("li");    
    var build_label = document.createElement("label");
    var build_input_2 = document.createElement("input");
    var build_btn  = document.createElement("button");
    var build_btn_2 = document.createElement("button");
    var build_btn_3 = document.createElement("button");

  //Создаем типы и классы для элементов
    build_label.innerText = taskstring;
    build_input_2.type="text";
    build_btn.className="edit";
    build_btn.innerText = ""
    build_btn_2.className="delete";
    build_btn_2.innerText = "";
    build_btn_3.className="check";
    build_btn_3.innerText = ""

  //Добавляющиеся элементы
    
    build_li.appendChild(build_label);
    build_li.appendChild(build_input_2);
    build_li.appendChild(build_btn_3);
    build_li.appendChild(build_btn);
    build_li.appendChild(build_btn_2);

    return build_li;
}

// Выводим алерт если нажать добавить при пустом поле
function createTask(){
  if(newTask.value===""){
    alert("Создайте задачу");
  }else{
  console.log("Task created");

  // Создаем динамически задачу в разделе Текущие задачи, нажав на кнопку добавить задачу   
  var create = buildItems(newTask.value);//вызов функции, которая отвечает за создание задач
   newTask.value = "";
   tasksLeft.appendChild(create);
  setEvent(create,completedTasks);
  }
}

// Эта функция отвечает за редактирование определенных задач
function editTask(){
  console.log("Task Edited");
  var item = this.parentNode;
  var edit_box = item.querySelector("input[type=text]");
  var post = item.querySelector("label");
  var iscontain = item.classList.contains("editMode");
  if(iscontain){
    post.innerText = edit_box.value;
  }else{
    edit_box.value=post.innerText;
  }
  item.classList.toggle("editMode");
}

// Эта функция отвечает за удаление задач
function deleteTask(){
  console.log("Task deleted");
  console.log("this-->", this);
  var item = this.parentNode;
  var parentItem = item.parentNode;
  parentItem.removeChild(item);
}

// Эта функция отвечает за перенос задачи из выполненных в текущие
function incompletedTasks(){
  console.log("task incomplete");
  var item = this.parentNode;
  tasksLeft.appendChild(item);
  setEvent(item,completedTasks);
}

// Эта функция отвечает за перенос задачи из текущих в выполненные
function completedTasks(){
  console.log("task completed");  
  var item = this.parentNode;  
  tasksComplete.appendChild(item);
  setEvent(item,incompletedTasks);
}
// Функции кнопок
function setEvent(liItems,checkboxHandler){
  var edit_btn = liItems.querySelector("button.edit");
  var delete_btn = liItems.querySelector("button.delete");
  var check_btn = liItems.querySelector("button.check");

  //Назначение событий
  edit_btn.onclick = editTask;//вызываем функцию editTask
  delete_btn.onclick = deleteTask;//вызываем функцию deleteTask
  check_btn.onclick = checkboxHandler;// Назначаем checkboxHandler на кнопку для переноса задачи из текущих в выполненные и обратно
}

// По клику на новую задачу открывается поле добавление задачи
showi.onclick = function(){
  var newd = document.getElementById("wrap");
  newd.style.display = "block";
}

//Создаем событие на кнопке добавить задачу
btn.onclick = createTask; 





