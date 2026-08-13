// =============================
// Get HTML Elements
// =============================

const taskInput = document.getElementById("taskInput");
const priority = document.getElementById("priority");
const dueDate = document.getElementById("dueDate");
const addBtn = document.getElementById("addBtn");

const search = document.getElementById("search");
const filter = document.getElementById("filter");

const taskContainer = document.getElementById("taskContainer");

// =============================
// Array to Store Tasks
// =============================

let tasks = [];

// =============================
// Add Button Event
// =============================

addBtn.addEventListener("click", function () {

    const taskName = taskInput.value.trim();
    const taskPriority = priority.value;
    const taskDueDate = dueDate.value;

    // Validation
    if (taskName === "" || taskDueDate === "") {
        alert("Please fill all fields.");
        return;
    }

    // Create Object

    const task = {
        Name: taskName,
        Priority: taskPriority,
        DueDate: taskDueDate
    };

    // Store in Array

    tasks.push(task);

    console.log(tasks);

    // Display Tasks

    renderTasks();

    // Clear Inputs

    taskInput.value = "";
    priority.value = "";
    dueDate.value = "";

});

// =============================
// Render All Tasks
// =============================

function renderTasks() {

    // Remove Previous HTML

    taskContainer.innerHTML = "";

    // Loop Through Array

    tasks.forEach(function (task, index) {

        // -----------------------
        // Create Card
        // -----------------------

        const taskCard = document.createElement("div");
        taskCard.className = "task-card";

        // -----------------------
        // Task Name
        // -----------------------

        const taskName = document.createElement("p");
        taskName.textContent = "Task : " + task.Name;

        // -----------------------
        // Priority
        // -----------------------

        const taskPriority = document.createElement("p");
        taskPriority.textContent = "Priority : " + task.Priority;

        // -----------------------
        // Due Date
        // -----------------------

        const taskDate = document.createElement("p");
        taskDate.textContent = "Due Date : " + task.DueDate;

        // -----------------------
        // Delete Button
        // -----------------------

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function () {

            tasks.splice(index, 1);

            renderTasks();

        });

        // -----------------------
        // Append Everything
        // -----------------------

        taskCard.appendChild(taskName);
        taskCard.appendChild(taskPriority);
        taskCard.appendChild(taskDate);
        taskCard.appendChild(deleteBtn);

        taskContainer.appendChild(taskCard);

    });

}