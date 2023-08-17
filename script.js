const inputField = document.querySelector("#user-input");
const addButton = document.querySelector("#btn-add");
const table = document.querySelector("#table");

function cellStyle(cell) {
  cell.style.fontSize = "20px";
  cell.style.fontFamily = "monospace";
}

let count = 1;
addButton.addEventListener("click", function () {
  if (inputField.value === "") {
    alert("Please enter a task");
    return;
  }

  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const cell3 = row.insertCell();

  cell1.innerText = count;
  cell2.innerText = inputField.value;
  cell3.innerHTML =
    '<button class="btn btn-danger btn-sm btn-edit">Edit</button> <button class="btn btn-danger btn-sm btn-delete">Delete</button>';
  cellStyle(cell1);
  cellStyle(cell2);
  cellStyle(cell3);

  const editButton = cell3.querySelector(".btn-edit");
  const deleteButton = cell3.querySelector(".btn-delete");

  editButton.addEventListener("click", function () {
    const newValue = prompt("Edit the task:", cell2.innerText);
    if (newValue !== "") {
      cell2.innerText = newValue;
    }
  });

  deleteButton.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete this task?")) {
      table.deleteRow(row.rowIndex);
    }
  });

  count++;
  inputField.value = "";
});
