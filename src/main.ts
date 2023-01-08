let game = (function (): Object {
    var player1


    return {};
})();

let gameBoard = (function (): Object {
    var board:HTMLSpanElement[][];
    var container = document.getElementById(`container`);

    return {
        
    };
})();

function createPlayer(symbol: String, name: String): Object {
    return {
        symbol: symbol,
        name: name
    };
}