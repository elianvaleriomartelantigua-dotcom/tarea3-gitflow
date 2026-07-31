let tasks = [];

let statuses = [];


function addTask(){

    let input = document.getElementById("taskInput");

    if(input.value === ""){
        return;
    }

    tasks.push(input.value);
    statuses.push("Pendiente");

    render();

    input.value = "";
}



function updateTask(index){

    let newTask = prompt("Editar tarea:", tasks[index]);

    if(newTask !== null && newTask !== ""){

        tasks[index] = newTask;

        render();

    }

}



function deleteTask(index){

    tasks.splice(index,1);
    statuses.splice(index,1);

    render();

}



function changeStatus(index){

    if(statuses[index] === "Pendiente"){

        statuses[index] = "Completada";

    }else{

        statuses[index] = "Pendiente";

    }

    render();

}



function render(){

    let list = document.getElementById("taskList");

    list.innerHTML = "";


    tasks.forEach((task,index)=>{


        list.innerHTML += `

        <li>

        ${task} - ${statuses[index]}


        <button onclick="updateTask(${index})">
        Editar
        </button>


        <button onclick="deleteTask(${index})">
        Eliminar
        </button>


        <button onclick="changeStatus(${index})">
        Estado
        </button>


        </li>

        `;


    });


}