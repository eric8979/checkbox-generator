const boxes = document.querySelector(".boxes");
const submitBtn = document.querySelector("#submit");
const clearBtn = document.querySelector("#clear");
const row = document.querySelector("#row");
const col = document.querySelector("#col");

clearBtn.disabled = true;

submitBtn.onclick = getSize;
clearBtn.onclick = clearBoard;

function getSize() {
  const rowSize = row.value;
  const colSize = col.value;

  if (rowSize < 1 || colSize < 1) {
    window.alert("choose box size first");
    clearBtn.disabled = true;
  } else {
    clearBtn.disabled = false;
    for (let i = 0; i < rowSize; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      boxes.appendChild(row);
      for (let i = 0; i < colSize; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        row.appendChild(box);
      }
    }
  }
}

function clearBoard() {
  row.value = 0;
  col.value = 0;
  boxes.innerHTML = "";

  clearBtn.disabled = true;
}
