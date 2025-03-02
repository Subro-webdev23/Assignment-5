


const taskAsigned = document.getElementById("taskAsigned");
const tasks = document.getElementById("tasks");
let navNumber = document.getElementById("navNumber");
let countTasks = tasks.children.length;
taskAsigned.innerText = countTasks;
let countNavNumber = 23;
navNumber.innerText = countNavNumber;


const taskCompleted = document.getElementsByClassName("taskCompleted");

for (const completed of taskCompleted) {
    completed.addEventListener("click", function (event) {
        completed.setAttribute("disabled", true);
        countTasks--;
        countNavNumber++;
        taskAsigned.innerText = countTasks;
        navNumber.innerText = countNavNumber;
        alert("Board Update Succecssfully");
        if (countTasks == 0) {
            alert("Board Update Completed!")
        }
        let parent = event.target.parentNode.parentNode.parentNode;
        let title = parent.querySelector("h3");
        history(title.innerText);


    })
}















console.log();


















