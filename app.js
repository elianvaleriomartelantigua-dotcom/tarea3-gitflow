let tasks = [];


function addTask(){

    let input = document.getElementById("taskInput");

    if(input.value === ""){
        return;
    }

    tasks.push(input.value);

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

    render();

}



function searchTask(){

    let text = prompt("Buscar tarea:");

    let results = tasks.filter(task =>
        task.toLowerCase().includes(text.toLowerCase())
    );

    alert(results.join("\n"));

}



function render(){

    let list = document.getElementById("taskList");

    list.innerHTML = "";


    tasks.forEach((task,index)=>{


        list.innerHTML += `

        <li>

        ${task}

        <button onclick="updateTask(${index})">
        Editar
        </button>


        <button onclick="deleteTask(${index})">
        Eliminar
        </button>


        </li>

        `;


    });


}