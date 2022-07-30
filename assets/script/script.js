const inputTask = document.getElementById("inputTask"); //input de html
const listTask = document.getElementById("listTask");   //listado de tareas
const button = document.getElementById("button");       //boton de Agregar tareas
const countTask = document.getElementById("countTask"); //cuenta tareas
const taskComplete = document.getElementById("taskComplete"); //tareas completadas  

const tasks = [{id: 1 , tarea: "Estudiar", status: false}, {id: 2 , tarea: " Futbol", status: false}, {id: 3 , tarea: "Dormir", status: false}];


///////Button para añadir una nueva tarea///////
button.addEventListener("click", () => {
  const newTask = inputTask.value;
  tasks.push({ id: Date.now(), tarea: newTask, status: false});
  
  let html = "";
  for (let chore of tasks) {
    if (inputTask.value === ""){
      alert("Debes Ingresar Una Tarea")
    }else if (chore.status == true) {
      chequear = "checked";
    }else {
      chequear = "";
    } 

    html += `<li> <p>${chore.id} ${chore.tarea} <input type="checkbox" id="opt_${chore.id}" ${chequear} onclick="updateTask(${chore.id})" value="first_checkbox"> <button onclick="deleteTask(${chore.id})"> Delete </button> </p> </li>`;
  }
  listTask.innerHTML = html;
  countTask.innerHTML= "Total: " + tasks.length;
  inputTask.value = "";
  cuentaOK();
  });
////////////////Función Eliminar al chequear//////////////////////////
let deleteTask = (id) => {
  const index = tasks.findIndex((ele) => ele.id == id);
  tasks.splice(index, 1);

  let html = "";
  for (chore of tasks) {
    if (chore.status== true) {
      chequear = "checked";
    }else{
      chequear = "";
    }

    html += `<li> <p>${chore.id} ${chore.tarea} <input type="checkbox" id="opt_${chore.id}" ${chequear} onclick="updateTask(${chore.id})" value="first_checkbox"> <button onclick="deleteTask(${chore.id})"> Delete </button> </p> </li>`;
  }
  listTask.innerHTML = html;
  countTask.innerHTML= "Total: " + tasks.length;
  cuentaOK();
};

let updateTask = (id) => {
  const index = tasks.findIndex((ele) => ele.id == id);
  if (document.querySelector("#opt_"+id).checked == true) {
    tasks[index].status= true;
  } else {
    tasks[index].status= false;
  }
  cuentaOK();
  console.log(tasks);
}
////////////aca se suma las realizadas con el total de tareas////////////////////
const cuentaOK = function () {
  cuentaTareas = tasks.filter(({status}) => status === true).length;
  taskComplete.innerHTML = "Realizadas:  " + cuentaTareas;
}

cuentaOK();

let html = "";
for (chore of tasks) {
  html += `<li> <p>${chore.id} ${chore.tarea} <input type="checkbox" id="opt_${chore.id}" onclick="updateTask(${chore.id})" value="first_checkbox"> <button onclick="deleteTask(${chore.id})"> Delete </button> </p> </li>`;
}

listTask.innerHTML = html;
countTask.innerHTML= "Total:  " + tasks.length;