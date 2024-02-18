{
  let tasks = [];

  const removeTasks = (TtaskIndex) => {
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

  const DoneTasksHide = () => {
    DoneTasksHide = !DoneTasksHide;
    render();
  };

  const allDone = () => {
    tasks = tasks.map((task) => ({
      ...task,
      done: true,
    }));
    render();
  };

  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButtons, taskindex) => {
      removeButtons.addEventListener("click", () => {
        removeTasks(taskindex);
      });
    });
    const toggleDoneButtons = document.querySelectorAll(".js-done");
    toggleDoneButtons.forEach((toggleDoneButtons, index) => {
      toggleDoneButtons.addEventListener("click", () => {
        ToggleTasksDone(index);
      });
    });
  };

  const renderTasks = () => {
    const taskToHTML = (task) => `
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

    const tasksElement = document.querySelector(".js-tasks");
    tasksElement.innerHTML = tasks.map(taskToHTML).join("");
  };

  const ButtonsEvents = () => {
    const toggleNatureOfTasks = document.querySelector("js-alldone");
    if (allDone) {
      toggleNatureOfTasks.addEventListener(click, allDone);
    }
  };

  const render = () => {
    renderTasks();
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
