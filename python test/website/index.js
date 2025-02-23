document.addEventListener("DOMContentLoaded", () => {
    const projects = [
      {
        title: "Project 1",
        image: "IMG_0030.PNG",
        description: "This is the project I tried cell shading/rendering.",
      },
      {
        title: "Project 2",
        image: "IMG_3538.PNG",
        description: "This is one of my older artworks.",
      },
      {
        title: "Project 3",
        image: "IMG_0030.PNG",
        description: "Short description of your project.",
      },
    ];
  
    const projectsContainer = document.querySelector(".projects-container");
  
    projects.forEach((project) => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project");
  
      projectElement.innerHTML = `
        <a href="${project.image}" target="_blank">
          <img src="${project.image}" alt="${project.title}">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </a>
      `;
  
      projectsContainer.appendChild(projectElement);
    });
  });
  
