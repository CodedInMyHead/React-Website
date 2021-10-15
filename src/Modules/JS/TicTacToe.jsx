import { useState } from 'react';
import '../CSS/TicTacToe.scss';

    let gameState = true;

    function Square(props) {
        return (
            <button className="square" 
            onClick={() => {
                let temp = props.obj;

                gameState ? temp[props.val] = 'X' : temp[props.val] = 'O' ;
                gameState ? gameState = false : gameState = true;
                props.set(temp); console.log(temp);
            }
            }>
                Hi
            </button>
        );
    }
    function renderSquare(squares, props,setter) {
        return <Square obj={squares} val={props} set={setter}/>;
    }
    
    

    function Board() {
        
        const [squares , setSquares] = useState(Array(9).fill(""));

        

        const status = 'Next player: X';

    return (
    <div>
        <div className="status">{status}</div>
        <div className="board-row">
        {renderSquare(squares, 0, setSquares)}
        {renderSquare(squares, 1, setSquares)}
        {renderSquare(squares, 2, setSquares)}
        </div>
        <div className="board-row">
        {renderSquare(squares, 3, setSquares)}
        {renderSquare(squares, 4, setSquares)}
        {renderSquare(squares, 5, setSquares)}
        </div>
        <div className="board-row">
        {renderSquare(squares, 6, setSquares)}
        {renderSquare(squares, 7, setSquares)}
        {renderSquare(squares, 8, setSquares)}
        </div>
    </div>
    );
}
  
function Game() {
    return (
        <div className="game">
            <div className="game-board">
            <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}
export default Game;