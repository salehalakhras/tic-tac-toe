let gameBoard = (function () {
    var board= [];

    // link the board with html
    for (let i = 0; i < 9; i++) {
        board[i] = document.getElementById(`btn-${i + 1}`);
    }

    // clear the board
    function clear() {
        for (let i = 0; i < 9; i++) {
            board[i].innerText = ``;
        }
    }
    return {
        board: board,
        clear: clear
    }
})()

function createPlayer(symbol, name) {
    return {
        symbol: symbol,
        name: name
    }
}

let gameController = (function () {
    var gameOn = true;
    var player1 = createPlayer(`X`, `Player 1`);
    var player2 = createPlayer(`O`, `Player 2`);
    var turn = 1;
    var resetBtn = document.getElementById(`reset`);
    var winner = ``;
    var result = document.getElementById(`result`);
    var restart = document.getElementById(`restart`);
    resetBtn?.addEventListener(`click`, init);

    for (let i = 0; i < 9; i++) {
        gameBoard.board[i].addEventListener(`click`, makeMove.bind(this, i))
    }

    function init() {
        gameOn = true;
        gameBoard.clear();
        turn = 1;
        result.innerText = ``;
        winner = ``;
        restart.innerText = ``;
    }

    function makeMove(squareNum) {
        if (gameOn) {
            if (turn % 2) {
                gameBoard.board[squareNum].innerText = player1.symbol;
                turn++;

            }
            else {
                gameBoard.board[squareNum].innerText = player2.symbol;
                turn++;
            }
            if (turn > 5) {
                checkWinner()
                if (winner != ``) {
                    result.innerText = winner + ` Won, Congratulations`;
                    endGame();
                }
            }
        }
    }

    function checkWinner() {
        if (gameBoard.board[0].innerText === gameBoard.board[1].innerText && gameBoard.board[1].innerText === gameBoard.board[2].innerText && gameBoard.board[0].innerText !== ``) {
            if (gameBoard.board[0].innerText === `X`)
                winner = player1.name;
            else
                winner = player2.name;
        }
        if (gameBoard.board[3].innerText === gameBoard.board[4].innerText && gameBoard.board[4].innerText === gameBoard.board[5].innerText && gameBoard.board[3].innerText !== ``) {
            if (gameBoard.board[3].innerText === `X`)
                winner = player1.name;
            else
                winner = player2.name;
        }
        if (gameBoard.board[6].innerText === gameBoard.board[7].innerText && gameBoard.board[7].innerText === gameBoard.board[8].innerText && gameBoard.board[6].innerText !== ``) {
            if (gameBoard.board[6].innerText === `X`)
                winner = player1.name;
            else
                winner = player2.name;
        }
        if (gameBoard.board[0].innerText === gameBoard.board[4].innerText && gameBoard.board[4].innerText === gameBoard.board[8].innerText && gameBoard.board[0].innerText !== ``) {
            if (gameBoard.board[0].innerText === `X`)
                winner = player1.name;
            else
                winner = player2.name;
        }
        if (gameBoard.board[2].innerText === gameBoard.board[4].innerText && gameBoard.board[4].innerText === gameBoard.board[6].innerText && gameBoard.board[2].innerText !== ``) {
            if (gameBoard.board[2].innerText === `X`)
                winner = player1.name;
            else
                winner = player2.name;
        }
        if (gameBoard.board[0].innerText === gameBoard.board[3].innerText && gameBoard.board[3].innerText === gameBoard.board[6].innerText && gameBoard.board[0].innerText !== ``) {
            if (gameBoard.board[2].innerText === `X`)
                winner = player1.name;
            else
                winner = player2.name;
        }
        if (gameBoard.board[1].innerText === gameBoard.board[4].innerText && gameBoard.board[4].innerText === gameBoard.board[7].innerText && gameBoard.board[1].innerText !== ``) {
            if (gameBoard.board[2].innerText === `X`)
                winner = player1.name;
            else
                winner = player2.name;
        }
        if (gameBoard.board[2].innerText === gameBoard.board[5].innerText && gameBoard.board[5].innerText === gameBoard.board[8].innerText && gameBoard.board[2].innerText !== ``) {
            if (gameBoard.board[2].innerText === `X`)
                winner = player1.name;
            else
                winner = player2.name;
        }
    }

    function endGame() {
        gameOn = false;
        restart.innerText = `Please press Reset to restart`;
    }
})()