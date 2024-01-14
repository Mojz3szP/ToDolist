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
            <li>
                ${task.content}
            </li>
            `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
  };
  const init = () => {
    render();
  };

  init();
}
