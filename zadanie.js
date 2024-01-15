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
            <div class="list__done">
            <button class="js-done button__done">${
              task.done ? "✓" : ""
            }</button>
                <div class=${task.done ? "changeTasksDone" : "list"}>${
        task.content
      }</div>
            <button class="js-remove button__remove">🗑</button>
            </div>
            </li>
            <div class="filling"></div>
            `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
    bindEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTasks").value.trim();
    console.log(newTaskContent);
    if (newTaskContent === "") {
      return;
    }
    addNewTask(newTaskContent);
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}
