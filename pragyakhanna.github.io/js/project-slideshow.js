let project = document.getElementsByClassName("project");
let slideIndex = 1;

showProject(slideIndex);
window.navigateProject = navigateProject;

function showProject(num) {
  //go to first project, after clicking the forward button from prev button
  if (num > project.length) {
    slideIndex = 1;
  }
  // go to lastproject, when clicking backwards button from first project
  if (num < 1) {
    slideIndex = project.length;
  }
  //for loop to hide all the projects - show only one project at one time
  for (let i = 0; i < project.length; i++) {
    project[i].style.display = "none";
  }
  project[slideIndex - 1].style.display = "flex";
}

function navigateProject(num) {
  //Change the slideindex based on the arrows
  showProject((slideIndex += num)); //if +1 then 2, if -1 then 0
}
