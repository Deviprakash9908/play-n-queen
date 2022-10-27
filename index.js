let dropdown = document.getElementById("dropdown");
let taskDiv = document.getElementById("task");

function dChange() {
  console.log(dropdown.value);
  if (dropdown.value != 0) {
    generateBoard(dropdown.value);
    switch (dropdown.value) {
      case "4":
        taskDiv.innerHTML = `Place ${dropdown.value} Queens in a way that these queens does not attack each other. Google says there are 2 Solutions`;
        break;
      case "5":
        taskDiv.innerHTML = `Place ${dropdown.value} Queens in a way that these queens does not attack each other. Google says there are 10 Solutions`;
        break;
      case "6":
        taskDiv.innerHTML = `Place ${dropdown.value} Queens in a way that these queens does not attack each other. Google says there are 4 Solutions`;
        break;
      case "7":
        taskDiv.innerHTML = `Place ${dropdown.value} Queens in a way that these queens does not attack each other. Google says there are 40 Solutions`;
        break;
      case "8":
        taskDiv.innerHTML = `Place ${dropdown.value} Queens in a way that these queens does not attack each other. Google says there are 92 Solutions`;
        break;
      case "9":
        taskDiv.innerHTML = `Place ${dropdown.value} Queens in a way that these queens does not attack each other. Google says there are 352 Solutions`;
        break;
      case "10":
        taskDiv.innerHTML = `Place ${dropdown.value} Queens in a way that these queens does not attack each other. Google says there are 724 Solutions`;
        break;
    }
  }
}

function generateBoard(n) {
  let board = document.querySelector(".board");

  board.innerHTML = ``;

  board.style = `display: grid; grid-template-columns: repeat(${n}, 80px);`;

  for (i = 0; i < n * n; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    let row = Math.floor(i / n),
      col = i % n;
    cell.setAttribute("id", `${row}+${col}`);
    board.appendChild(cell);
  }

  let cells = document.querySelectorAll(".cell");

  cells.forEach((c) => {
    c.addEventListener("click", (e) => {
      c.innerHTML =
        c.innerHTML === ``
          ? `<img src="./assets/queen.png" width="70px" alt="Q" />`
          : ``;
      var parent = c.parentNode;
      var index = [].indexOf.call(parent.children, c);
      console.log(index);
      verticalFill(index);
      horizontalFill(index);
      mainDiagonalFill(index);
      secDiagonalFill(index);
    });
  });

  function verticalFill(index) {
    let row = Math.floor(index / n),
      col = index % n,
      tRow = row - 1;
    while (tRow >= 0) {
      let id = `${tRow}+${col}`;
      let cDiv = document.getElementById(id);

      cDiv.style.backgroundColor = "red";
      tRow--;
    }
    tRow = row + 1;
    while (tRow < n) {
      let id = `${tRow}+${col}`;
      let cDiv = document.getElementById(id);
      cDiv.style.backgroundColor = "red";
      tRow++;
    }
  }

  function horizontalFill(index) {
    let row = Math.floor(index / n),
      col = index % n,
      tCol = col - 1;
    while (tCol >= 0) {
      let id = `${row}+${tCol}`;
      let cDiv = document.getElementById(id);
      // cDiv.className = "notcell";
      cDiv.style.backgroundColor = "red";
      tCol--;
    }
    tCol = col + 1;
    while (tCol < n) {
      let id = `${row}+${tCol}`;
      let cDiv = document.getElementById(id);
      cDiv.style.backgroundColor = "red";
      tCol++;
    }
  }

  function mainDiagonalFill(index) {
    let row = Math.floor(index / n),
      col = index % n,
      tRow = row - 1,
      tCol = col - 1;
    while (tCol >= 0 && tRow >= 0) {
      let id = `${tRow}+${tCol}`;
      let cDiv = document.getElementById(id);
      // cDiv.className = "notcell";
      cDiv.style.backgroundColor = "red";
      tRow--;
      tCol--;
    }
    (tRow = row + 1), (tCol = col + 1);
    while (tCol < n && tRow < n) {
      let id = `${tRow}+${tCol}`;
      let cDiv = document.getElementById(id);
      // cDiv.className = "notcell";
      cDiv.style.backgroundColor = "red";
      tRow++;
      tCol++;
    }
  }

  function secDiagonalFill(index) {
    let row = Math.floor(index / n),
      col = index % n,
      tRow = row - 1,
      tCol = col + 1;
    while (tCol < n && tRow >= 0) {
      let id = `${tRow}+${tCol}`;
      let cDiv = document.getElementById(id);
      // cDiv.className = "notcell";
      cDiv.style.backgroundColor = "red";
      tRow--;
      tCol++;
    }
    (tRow = row + 1), (tCol = col - 1);
    while (tCol >= 0 && tRow < n) {
      let id = `${tRow}+${tCol}`;
      let cDiv = document.getElementById(id);
      // cDiv.className = "notcell";
      cDiv.style.backgroundColor = "red";
      tRow++;
      tCol--;
    }
  }
}
