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

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
            <li 
                ${task.done ? 'style="text-decoration: line-through"' : ""}
            >
                ${task.content}
            </li>
            `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
  };
  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const newTaskContent = document
        .querySelector(".js-newTasks")
        .value.trim();
      console.log(newTaskContent);
      if (newTaskContent === "") {
        return;
      }

      tasks.push({
        content: newTaskContent,
      });
      render();
    });
  };

  init();
}
