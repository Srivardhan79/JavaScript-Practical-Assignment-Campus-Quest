const missionInput = document.getElementById("missionInput");
const addBtn = document.getElementById("addBtn");
const missionList = document.getElementById("missionList");
const missionCount = document.getElementById("missionCount");
const colorBtn = document.getElementById("colorBtn");
const colours = ["lightblue", "lightyellow", "lightpink"];
let colourIndex = 0;
addBtn.onclick = function () {
  let missionText = missionInput.value.trim();
  if (missionText === "") {
    alert("Mission cannot be empty!");
    return;
  }
  let li = document.createElement("li");
  li.className = "mission";
  li.textContent = missionText;
  li.onclick = function () {
    li.classList.toggle("completed");
  };
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = function (event) {
    event.stopPropagation();
    li.remove();
    updateCount();
  };
  li.appendChild(delBtn);
  missionList.appendChild(li);
  missionInput.value = ""; 
  updateCount();
};
function updateCount() {
  missionCount.textContent = missionList.children.length;
}
colorBtn.onclick = function () {
  document.body.style.backgroundColor = colours[colourIndex];
  colourIndex = (colourIndex + 1) % colours.length;
};