document.addEventListener("DOMContentLoaded", function () {
    const tasksContainer = document.getElementById("tasks");
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");
  
    // update progress
    function updateProgress() {
      const tasks = document.querySelectorAll(".task");
      const totalTasks = tasks.length;
      const completedTasks = document.querySelectorAll(".completed").length;
      const progress = (completedTasks / totalTasks) * 100;
  
      progressBar.value = progress;
      progressText.textContent = `${Math.round(progress)}% complete`;
    }
  
    // toggle tasks
    function toggleTaskCompletion() {
      this.classList.toggle("completed");
      updateProgress();
    }
  
    function createTaskElement(taskName) {
      const taskElement = document.createElement("div");
      taskElement.className = "task";
      taskElement.innerHTML = `
        <span>${taskName}</span>
        <input type="checkbox">
      `;
      taskElement.querySelector("input").addEventListener("change", toggleTaskCompletion);
  
      return taskElement;
    }
  
    function addTask(taskName) {
      const taskElement = createTaskElement(taskName);
      tasksContainer.appendChild(taskElement);
      updateProgress();
    }
  
    // Example tasks
    addTask("Task-1");
    addTask("Task-2");
    addTask("Task-3");
    addTask("Task-4");
    addTask("Task-5");
    addTask("Task-6");
    addTask("Task-7");
    addTask("Task-8");
    addTask("Task-9");
    addTask("Task-10");
    // You can add more tasks as needed
  });
  
  