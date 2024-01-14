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

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
            <li 
                ${task.done ? 'style="text-decoration: line-through"' : ""}
            >
            <button class="js-remove">usuń</button>
                ${task.content}
            </li>
            `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    const removeButtons = document.querySelectorAll(".js-remove");
    removeButtons.forEach((removeButtons, index) => {
      removeButtons.addEventListener("click", () => {
        removeTasks(index);
      });
    });
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
