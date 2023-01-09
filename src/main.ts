let gameBoard = (function () {
    var board: any = [];

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

function createPlayer(symbol: string, name: string) {
    return {
        symbol: symbol,
        name: name
    }
}

let gameController = (function () {
    var player1 = createPlayer(`X`, `Player 1`);
    var player2 = createPlayer(`O`, `Player 2`);
    var turn: number = 1;
    var resetBtn = document.getElementById(`reset`);
    var winner: string = ``;
    var result = document.getElementById(`result`);
    resetBtn?.addEventListener(`click`, init);

    for (let i = 0; i < 9; i++) {
        gameBoard.board[i].addEventListener(`click`, () => makeMove(i))
    }

    function init() {
        gameBoard.clear();
        turn = 1;
        result!.innerText = ``;
    }

    function makeMove(squareNum: number) {
        if (turn % 2) {
            gameBoard.board[squareNum].innerText = player1.symbol;
            turn++;

        }
        else {
            gameBoard.board[squareNum].innerText = player2.symbol;
            turn++;
        }
        if (turn > 5)
            checkWinner();
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

        if (result?.innerText == ``)
            result!.innerText = winner;
    }

    return{
        turn:turn,
        winner: winner,
        gameBoard:gameBoard
    }
})()