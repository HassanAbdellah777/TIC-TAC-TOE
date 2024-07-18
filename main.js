let playerX = document.querySelector(".player-x");
let playerO = document.querySelector(".player-o");
let cubes = document.querySelectorAll(".cube");
let playAgainBtn = document.querySelector(".play-again");
let count = 1;

cubes.forEach((cube) => {
  cube.addEventListener("click", (e) => {
    // check box click
    if (e.target.textContent === "") {
      // let cubeX = e.target.firstElementChild;
      // let cubeO = e.target.lastElementChild;
      //check player turn
      if (playerX.classList.contains("turn")) {
        // player X turn
        e.target.textContent = "X";
        // cubeX.style.display = "block";
        if (count > 4) {
          checkWinner("X");
        }
        if (playerX.classList.contains("win")) {
          playAgainBtn.style.display = "block";
        } else {
          playerX.classList.remove("turn");
          playerO.classList.add("turn");
        }
        // playerX.style.display = "none";
        // playerO.style.display = "block";
        count += 1;
      } else {
        // player O turn
        // cubeO.style.display = "block";
        e.target.textContent = "O";

        // check winner
        if (count > 4) {
          checkWinner("O");
        }
        if (playerO.classList.contains("win")) {
          playAgainBtn.style.display = "block";
        }

        playerO.classList.remove("turn");
        playerX.classList.add("turn");

        // playerO.style.display = "none";
        // playerX.style.display = "block";
        count += 1;
      }
    }
    e.target.classList.add("clicked");
    // e.target.style.pointerEvents = "none";
  });
});

//check winner function
function checkWinner(sign) {
  //Cube 0 conditions
  if (cubes[0].textContent === `${sign}`) {
    if (
      (cubes[1].textContent === `${sign}` &&
        cubes[2].textContent === `${sign}`) ||
      (cubes[3].textContent === `${sign}` &&
        cubes[6].textContent === `${sign}`) ||
      (cubes[4].textContent === `${sign}` && cubes[8].textContent === `${sign}`)
    ) {
      declareWinner(`player${sign}`);
    }
  }
  //Cube 1 conditions
  else if (cubes[1].textContent === `${sign}`) {
    if (
      cubes[4].textContent === `${sign}` &&
      cubes[7].textContent === `${sign}`
    ) {
      declareWinner(`player${sign}`);
    }
  }
  //Cube 2 conditions
  else if (cubes[2].textContent === `${sign}`) {
    if (
      (cubes[5].textContent === `${sign}` &&
        cubes[8].textContent === `${sign}`) ||
      (cubes[4].textContent === `${sign}` && cubes[6].textContent === `${sign}`)
    ) {
      declareWinner(`player${sign}`);
    }
  }
  //Cube 3 conditions
  else if (cubes[3].textContent === `${sign}`) {
    if (
      cubes[4].textContent === `${sign}` &&
      cubes[5].textContent === `${sign}`
    ) {
      declareWinner(`player${sign}`);
    }
  }

  //Cube 5 conditions
  if (cubes[5].textContent === `${sign}`) {
    if (
      cubes[2].textContent === `${sign}` &&
      cubes[8].textContent === `${sign}`
    ) {
      declareWinner(`player${sign}`);
    }
  }

  //Cube 7 conditions
  else if (cubes[7].textContent === `${sign}`) {
    if (
      cubes[6].textContent === `${sign}` &&
      cubes[8].textContent === `${sign}`
    ) {
      declareWinner(`player${sign}`);
    }
  } else if (count === 9) {
    declareWinner("draw");
  }
}
//declare winner
function declareWinner(player) {
  if (player === "playerX") {
    playerX.classList.add("win");
    playerO.style.display = "none";
    playerX.textContent = "The Winner is Player X";
  } else if (player === "draw") {
    playerO.style.display = "none";
    playerX.textContent = "Game Draw";
    playAgainBtn.style.display = "block";
  } else {
    playerO.classList.add("win");
    playerX.style.display = "none";
    playerO.textContent = "The Winner is Player O";
  }
  //prevent click event for cubes
  cubes.forEach((cube) => {
    cube.style.pointerEvents = "none";
  });
}
//Play Agani Button
playAgainBtn.addEventListener("click", () => {
  location.reload();
});
