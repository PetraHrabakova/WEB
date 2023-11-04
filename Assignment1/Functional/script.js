let board = [null, null, null, null, null, null, null, null, null];
let ongoingGame = true;

const gameContainer = document.createElement("div");
gameContainer.id = "container";

const boardElement = document.createElement("div");
boardElement.id = "board";

// Headline 
const headline = document.createElement("h1");
headline.textContent = "Tic Tac Toe";
headline.id = "headline";

// Initialize a variable to keep track of the current player
let currentPlayer = "X";

// Add a sign that says the winner
const winnerSign = document.createElement("p");
winnerSign.id = "winner_sign";

// Add an information sign
const infoSign = document.createElement("p");
infoSign.id = "info_sign";


board.forEach((square, index) => {
    const squareElement = document.createElement("button");
    squareElement.addEventListener("click", () => {
        if (canMove(board, index)) {
            move(board, index);
        }
        else if (!isWon(board) && !board.every(cell => cell !== null))
            // Only display this if the game is not over yet and there still are empty cells
            infoSign.textContent = "Oops, there already is a value, try another square";
    })
    boardElement.appendChild(squareElement);
})


// Add a reset button
const resetButton = document.createElement("button");
resetButton.textContent = "Reset Game";
resetButton.id = "reset_button";

resetButton.addEventListener("click", () => {
    board = [null, null, null, null, null, null, null, null, null];        // Clear the board
    winnerSign.textContent = "";    // Clear the winner sign 
    ongoingGame = true;             // Reset this variable
    removeCatShower();
    infoSign.textContent = "";      // Clear the info sign
    // Clear the cells in the GUI
    boardElement.querySelectorAll("button").forEach((cellElement) => {
        cellElement.textContent = "";
    });
    currentPlayer = "X";
})


gameContainer.appendChild(headline);
gameContainer.appendChild(boardElement);
gameContainer.appendChild(winnerSign);
gameContainer.appendChild(infoSign);
gameContainer.appendChild(resetButton);

document.body.appendChild(gameContainer);


function render(board) {
    infoSign.textContent = "";
    // Loop through the board and update the visual representation
    board.forEach((cellValue, index) => {
        const cellElement = boardElement.children[index];
        cellElement.textContent = cellValue || ""; // Display 'X' or 'O' or an empty string
    });

    if (!isWon(board) && board.every(cell => cell !== null)) {
        // If there is no winner and all cells are full
        infoSign.textContent = "Nobody won, you gotta play another round to find out the winner";
    }
}

function move(board, clickedSquare) {
    // Only proceed if the game is ongoing
    if (ongoingGame) {
        board[clickedSquare] = currentPlayer;   // Set the cell value to the current player

        render(board);  // Update the cells in GUI

        // Check for a winner after the move
        if (isWon(board)) {
            winnerSign.textContent = `PLAYER "${currentPlayer}" WON`;
            ongoingGame = false; // This will stop other players from making a move after a person has won
            infoSign.textContent = "To play again, please press the Reset Game button";
            createCatShower();
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";  // Toggle the current player
    }
}

function canMove(board, clickedSquare) {
    return board[clickedSquare] === null;   // Only return true if the clicked cell is empty
}

function isWon(board) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (const line of lines) {
        const [a, b, c] = line;     // Deconstruct the array to 3 variables
        // Here we check 3 things:
        // 1. The value on index "a" on the board is not null
        // 2. The value on index "b" on the board is equals to what's on index "a"
        // 3. The value on index "c" on the board is equals to what's on index "a"
        if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
            return true; // A player has won
        }
    }
    return false;
}

function createCatShower() {
    const catHeadsContainer = document.getElementById("cat_heads_container");

    // Create multiple cat head elements
    for (let i = 0; i < 70; i++) {
        const catHead = document.createElement("img");
        // Add different type of cats
        if (i % 2 === 0 && i % 3 !== 0) {
            catHead.src = "https://www.pngmart.com/files/23/Cat-Head-PNG-File.png";
        }
        else if (i % 2 === 1) {
            catHead.src = "https://clipart-library.com/images_k/cat-face-transparent-background/cat-face-transparent-background-1.png";
        }
        else
            catHead.src = "https://clipart-library.com/images_k/cat-face-transparent-background/cat-face-transparent-background-2.png";

        catHead.classList.add("cat-head");

        // Randomize initial position and animation delay
        catHead.style.left = `${Math.random() * window.innerWidth}px`;
        catHead.style.animationDelay = `${Math.random() * 3}s`; // Randomized delay of the animation

        // Append the cat head element to the container
        catHeadsContainer.appendChild(catHead);
    }
}

function removeCatShower() {
    const catHeadsContainer = document.getElementById('cat_heads_container');
    while (catHeadsContainer.firstChild) {
        catHeadsContainer.removeChild(catHeadsContainer.firstChild);
    }
}

