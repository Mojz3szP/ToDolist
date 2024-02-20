{
  let tasks = [];
  let hideDoneTasks = false;

  const removeTasks = (taskIndex) => {
    tasks = [...tasks.slice(0, taskIndex), ...tasks.slice(taskIndex + 1)];
    render();
  };

  const ToggleTasksDone = (taskIndex) => {
    tasks = [
      ...tasks.slice(0, taskIndex),
      {
        ...tasks[taskIndex],
        done: !tasks[taskIndex].done,
      },
      ...tasks.slice(taskIndex + 1),
    ];
    render();
  };
  const addNewTask = (newTaskContent) => {
    tasks = [...tasks, { content: newTaskContent }];
    render();
  };

  const toggleDoneTasksHide = () => {
    hideDoneTasks = !hideDoneTasks;
    render();
  };

  const allDone = () => {
    tasks = tasks.map((task) => ({
      ...task,
      done: true,
    }));
    render();
  };

  const bindRemoveEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButtons, taskIndex) => {
      removeButtons.addEventListener("click", () => {
        removeTasks(taskIndex);
      });
    });
  };
  const bindToggleEvents = () => {
    const toggleDoneButtons = document.querySelectorAll(".js-done");
    toggleDoneButtons.forEach((toggleDoneButtons, index) => {
      toggleDoneButtons.addEventListener("click", () => {
        ToggleTasksDone(index);
      });
    });
  };

  const renderTasks = () => {
    const taskToHTML = (task) => `
            <li class="task__done${
              task.done && hideDoneTasks ? " task__hide" : ""
            }">
            <button class="js-done button__task button__task--done click__task">${
              task.done ? "✓" : ""
            }</button>
                <div class=${task.done ? "changeTasksDone" : "task"}>${
      task.content
    }</div>
            <button class="js-remove button__task--remove button__task click__task--remove">🗑</button>
            </li>
            `;

    const tasksElement = document.querySelector(".js-tasks");
    tasksElement.innerHTML = tasks.map(taskToHTML).join("");
  };
  const renderButtons = () => {
    const buttonElement = document.querySelector(".js-button");

    if (!tasks.length) {
      buttonElement.innerHTML = "";
      return;
    }

    buttonElement.innerHTML = `
    <button class="button__task--all js-hide">
         ${hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button class="button__task--all  js-allDone"
         ${tasks.every(({ done }) => done) ? "disabled" : ""}> 
         Ukończ wszystkie
        </button>
    `;
  };

  const bindButtonsEvents = () => {
    const toggleNatureOfTasks = document.querySelector(".js-allDone");
    if (toggleNatureOfTasks) {
      toggleNatureOfTasks.addEventListener("click", allDone);
    }

    const toggleDoneTasksHideButton = document.querySelector(".js-hide");

    if (toggleDoneTasksHideButton) {
      toggleDoneTasksHideButton.addEventListener("click", toggleDoneTasksHide);
    }
  };

  const render = () => {
    renderTasks();
    renderButtons();

    bindRemoveEvents();
    bindToggleEvents();
    bindButtonsEvents();
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
