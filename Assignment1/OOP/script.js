class Game {
    constructor() {
        this.boardState = [null, null, null, null, null, null, null, null, null];
        this.ongoingGame = true;
    }

    prepareBoard(boardElement, winnerSign, infoSign) {
        this.boardElement = boardElement;
        this.currentPlayer = "X";
        this.winnerSign = winnerSign;
        this.infoSign = infoSign;


        this.boardState.forEach((square, index) => {
            const squareElement = document.createElement("button");
            squareElement.addEventListener("click", () => {
                if (this.canMove(index)) {
                    this.move(index);
                }
                else if (!this.isWon() && !this.boardState.every(cell => cell !== null))
                    // Only display this if the game is not over yet and there still are empty cells
                    this.infoSign.textContent = "Oops, there already is a value, try another square";
            })
            this.boardElement.appendChild(squareElement);
        })
    }

    move(clickedSquare) {
        if (this.ongoingGame) {    // Only proceed if the game is ongoing
            this.boardState[clickedSquare] = this.currentPlayer;   // Set the cell value to the current player

            this.render();  // Update the cells in GUI

            // Check for a winner after the move
            if (this.isWon()) {
                this.winnerSign.textContent = `PLAYER "${this.currentPlayer}" WON`;
                this.ongoingGame = false; // This will stop other players from making a move after a person has won
                this.infoSign.textContent = "To play again, please press the Reset Game button";
                this.createCatShower();
            }

            this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";  // Toggle the current player
        }

    }

    canMove(clickedSquare) {
        return this.boardState[clickedSquare] === null;   // Only return true if the clicked cell is empty
    }

    isWon() {
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
            if (this.boardState[a] !== null && this.boardState[a] === this.boardState[b] && this.boardState[a] === this.boardState[c]) {
                return true; // A player has won
            }
        }
        return false;
    }

    reset() {
        this.boardState = [null, null, null, null, null, null, null, null, null];
        this.ongoingGame = true;
        this.removeCatShower();
        this.render();
    }

    render() {
        this.infoSign.textContent = "";
        // Loop through the board and update the visual representation
        this.boardState.forEach((cellValue, index) => {
            const cellElement = boardElement.children[index];
            cellElement.textContent = cellValue || ""; // Display 'X' or 'O' or an empty string
        });

        if (!this.isWon() && this.boardState.every(cell => cell !== null)) {
            // If there is no winner and all cells are full
            this.infoSign.textContent = "Nobody won, you gotta play another round to find out the winner";
        }
    }

    createCatShower() {
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
                catHead.src = "https://media.licdn.com/dms/image/C4D03AQFdLbooTEv1gA/profile-displayphoto-shrink_800_800/0/1586015900772?e=2147483647&v=beta&t=XeEllwXbyIQMiU4YCiObqNlFNUK4Rpx2w88Onc5i0ZU";

            catHead.classList.add("cat-head");

            // Randomize initial position and animation delay
            catHead.style.left = `${Math.random() * window.innerWidth}px`;
            catHead.style.animationDelay = `${Math.random() * 3}s`; // Randomized delay of the animation

            // Append the cat head element to the container
            catHeadsContainer.appendChild(catHead);
        }
    }

    removeCatShower() {
        const catHeadsContainer = document.getElementById('cat_heads_container');
        while (catHeadsContainer.firstChild) {
            catHeadsContainer.removeChild(catHeadsContainer.firstChild);
        }
    }
}

var game = new Game();

const gameContainer = document.createElement("div");
gameContainer.id = "container";


const boardElement = document.createElement("div");
boardElement.id = "board";

// Headline 
const headline = document.createElement("h1");
headline.textContent = "Tic Tac Toe";
headline.id = "headline";

// Add a sign that says the winner
const winnerSign = document.createElement("p");
winnerSign.id = "winner_sign";

// Add an information sign
const infoSign = document.createElement("p");
infoSign.id = "info_sign";

// Variable that keeps track of whether a game is active (somebody has won) or not
let ongoingGame = true;

game.prepareBoard(boardElement, winnerSign, infoSign)

// Add a reset button
const resetButton = document.createElement("button");
resetButton.textContent = "Reset Game";
resetButton.id = "reset_button";

resetButton.addEventListener("click", () => {
    game.reset();                   // Create a new game
    winnerSign.textContent = "";    // Clear the winner sign 
    ongoingGame = true;             // Reset this variable
    infoSign.textContent = "";      // Clear the info sign
    // Clear the cells in the GUI
    boardElement.querySelectorAll("button").forEach((cellElement) => {
        cellElement.textContent = "";
    });
})

gameContainer.appendChild(headline);
gameContainer.appendChild(boardElement);
gameContainer.appendChild(winnerSign);
gameContainer.appendChild(infoSign);
gameContainer.appendChild(resetButton);

document.body.appendChild(gameContainer);

