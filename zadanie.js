{
  const tasks = [];
  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
      done: false,
    });
    render();
  };
  const removeTasks = (index) => {
    tasks.splice(index, 1);
    render();
  };
  const ToggleTasksDone = (index) => {
    tasks[index].done = !tasks[index].done;
    render();
  };
  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");
    removeButtons.forEach((removeButtons, index) => {
      removeButtons.addEventListener("click", () => {
        removeTasks(index);
      });
    });
    const toggleDoneButtons = document.querySelectorAll(".js-done");
    toggleDoneButtons.forEach((toggleDoneButtons, index) => {
      toggleDoneButtons.addEventListener("click", () => {
        ToggleTasksDone(index);
      });
    });
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
            <li>
            <div class="task__done">
            <button class="js-done button__task button__task--done click__task">${
              task.done ? "✓" : ""
            }</button>
                <div class=${task.done ? "changeTasksDone" : "task"}>${
        task.content
      }</div>
            <button class="js-remove button__task--remove button__task click__task--remove">🗑</button>
            </div>
            </li>
            `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
    bindEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskElement = document.querySelector(".js-newTasks");
    const newTaskContent = newTaskElement.value.trim();

    if (newTaskContent !== "") {
      addNewTask(newTaskContent);
      newTaskElement.value = "";
    }
    newTaskElement.focus();
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}
