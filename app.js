let tasks = [];

function addTask(){

    let input = document.getElementById("taskInput");

    if(input.value==="") return;

    tasks.push(input.value);

    render();

    input.value="";
}


function render(){

    let list=document.getElementById("taskList");

    list.innerHTML="";

    tasks.forEach((task,index)=>{

        list.innerHTML+=`
        <li>
        ${task}
        </li>
        `;

    });

}