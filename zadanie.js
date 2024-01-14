{
  const tasks = [
    {
      content: "Kocham Misie",
      done: false,
    },
    {
      content: "Serio",
      done: true,
    },
  ];
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
            <li 
                ${task.done ? 'style="text-decoration: line-through"' : ""}
            >
            <button class="js-done">zrobione?</button>
            <button class="js-remove">usuń</button>
                ${task.content}
            </li>
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
