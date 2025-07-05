const InputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

// add input value in list container
function addtask() {
  if (InputBox.value === "") {
    alert("You Write Must Sommthing");
  } else {
    const li = document.createElement("li");
    li.innerHTML = InputBox.value;
    ListContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  InputBox.value = "";
  saveData();
}

// show , hide use it toggle
ListContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked"); // toggled kam karan
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", ListContainer.innerHTML);
}
function showList() {
  ListContainer.innerHTML = localStorage.getItem("data");
}
showList();
